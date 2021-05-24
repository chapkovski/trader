import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import VueNativeSock from 'vue-native-websocket'
import gameParams, { lastKnownState } from './params'
Vue.use(Vuex)
// all this bullshit with task generation should move to server side later

const generateTask = () => {
    const matrix1 = _.map(_.range(100), () => {
        return _.random(50, 999);
    })
    const matrix2 = _.map(_.range(100), () => {
        return _.random(50, 999);
    })
    return { matrix1, matrix2 }
}
const store = new Vuex.Store({
    state: {
        ...lastKnownState,
        dayNumber:1,
        dayStart: new Date(),
        cashBalance: 0,
        salary: 0,
        tasksSubmitted: 0,
        correctTasksSubmitted: 0,
        currentTask: generateTask(),
        currentTab: null,
        transactions: [

        ],
        stocks:
            [
                {
                    innerName: 'a',
                    publicName: 'Stock A',
                    price: 0,
                    previous: 0,
                    quantity: 10,
                    history: [],
                    rate_return: 0
                },
                {
                    innerName: 'b',
                    publicName: 'Stock B',
                    price: 0,
                    previous: 0,
                    quantity: 2,
                    history: [],
                    rate_return: 0
                },
                {
                    innerName: 'c',
                    publicName: 'Leveraged ETF 2XA',
                    price: 0,
                    previous: 0,
                    quantity: 2,
                    history: [],
                    rate_return: 0
                },
                {
                    innerName: 'd',
                    publicName: 'Leveraged ETF 2XB',
                    price: 0,
                    previous: 0,
                    quantity: 2,
                    history: [],
                    rate_return: 0
                },
            ]
        ,
        socket: {
            isConnected: false,
            message: '',
            reconnectError: false,
        },
    },
    getters: {
        getCashBalance: (state) => () => { return state.cashBalance },
        portfoglioValue: (state)=> ()=>{
            return (_.sumBy(state.stocks, (i)=>{return i.quantity*i.price})).toFixed(2);
        },
        getStockByName: (state) => (name) => {

            return state.stocks.find(stock => stock.innerName === name)
        },
        getStockIndexByName: (state) => (name) => {

            return _.findIndex(state.stocks, (i) => i.innerName === name)
        }
    },
    mutations: {
        DAY_INCREASE: (state)=> {
            state.dayNumber++;
            // TODO: we don't need it in production because we'll get the date in new rounds aka  new pages 
            // TODO: we'll set the day data (number, start from backend, will be immutable)
            state.dayStart = new Date()
        },
        STOCK_UPDATE: (state, { ind, obj }) => {
            state.stocks.splice(ind, 1, obj);
        },
        CHANGE_CASH: (state, q) => {
            state.cashBalance += q
        },
        INCREASE_TOTAL_TASKS_COUNTER: (state) => { state.tasksSubmitted++ },
        INCREASE_CORRECT_TASKS_COUNTER: (state) => { state.correctTasksSubmitted++ },
        SET_NEW_TASK: (state, body) => { state.currentTask = body },
        SET_TAB: (state, tab) => {
            state.currentTab = tab
        },
        INC_TICK: (state) => (state.currentTick++),
        SOCKET_ONOPEN(state, event) {
            Vue.prototype.$socket = event.currentTarget
            state.socket.isConnected = true
        },
        SOCKET_ONCLOSE(state, event) {
            state.socket.isConnected = false
        },
        SOCKET_ONERROR(state, event) {
            console.error(state, event)
        },
        // default handler called for all methods
        SOCKET_ONMESSAGE(state, message) {

        },
        // mutations for reconnect methods
        SOCKET_RECONNECT(state, count) {
            console.info('Reconnecting....', state, count)
        },
        SOCKET_RECONNECT_ERROR(state) {
            state.socket.reconnectError = true;
        },
    },
    actions: {
        setTab(context, tab) {
            context.commit('SET_TAB', tab)
        },
        processTaskAnswer(context, answer) {
            // somewhere here we send task asnwer for checking on a server side, and get a new task to work on
            // as soon as we get the answer we increase the counter of total tasks by 1, and 
            // if correct we increase the salary, number of crrect task and total number of money avaialbe
            function isAnswerCorrect(task, answer) {
                const m1 = _.max(task.matrix1)
                const m2 = _.max(task.matrix2)
                const correctAnswer = m1 + m2
                return parseInt(correctAnswer) === parseInt(answer)
            }
            const currentTask = context.state.currentTask
            if (isAnswerCorrect(currentTask, answer)) {
                context.commit('INCREASE_CORRECT_TASKS_COUNTER')
                context.commit('CHANGE_CASH', gameParams.taskFee)
            }


            context.commit('INCREASE_TOTAL_TASKS_COUNTER')
            context.commit('SET_NEW_TASK', generateTask())
        },
        makeTransaction(context, { stock, quantity }) {
            // negative quantity means selling, positive quanitity means buying
            // Somewhere here we also register transaction and send it back via socket to server
            // we may consider to register the full history of transactions somewhere
            const obj = context.getters.getStockByName(stock)
            const price = obj.price;
            obj.quantity += quantity;
            // we inverse final amount to be added/withdrawn from cash reserves because it is inversly related to the
            // transaction direction (negative quantity means byuing etc. )
            const finalAmount = -price * quantity
            const ind = context.getters.getStockIndexByName(stock);
            context.commit('STOCK_UPDATE', { ind, obj });
            context.commit('CHANGE_CASH', finalAmount);
        },

        requestPriceUpdate(context, stock) {
            // TODO: somewhere here we'll send a socket request to get a new tick
            // TODO: we dont' need to send so many requests; it makes sense to request them in a bunch
            const price = Math.random();
            const obj = context.getters.getStockByName(stock)
            obj.price = _.round(price, 2);
            obj.previous = _.last(obj.history);
            obj.history = [...obj.history,  price];
            const ind = context.getters.getStockIndexByName(stock);
            context.commit('STOCK_UPDATE', { ind, obj });

        }

    }
})
const ws_scheme = window.location.protocol === "https:" ? "wss" : "ws";
const ws_path = ws_scheme + '://' + window.location.host + window.socket_path;
// TODO: connection to backend
// Vue.use(VueNativeSock, ws_path, {
//     store: store,
//     format: 'json',
//     reconnection: true, // (Boolean) whether to reconnect automatically (false)
//     reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
//     reconnectionDelay: 3000,
// });
export default store;