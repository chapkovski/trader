import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'
import VueNativeSock from 'vue-native-websocket'
import gameParams from './params'

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

const dayResetabbleParams = () => ({

    currentTick: 0,
    dayStart: new Date(),
    cashBalance: gameParams.endowment,
    tasksSubmitted: 0,
    correctTasksSubmitted: 0,
    currentTask: generateTask(),
    currentTab: null,
    secSpentOnTrade: 0,
    numTransactions: 0,
    awardForTime: {},
    awardForTransaction: {},
    transactions: [],
    stocks: []
})
const store = new Vuex.Store({
    state: {
        formSubmittable: false,
        numTicks: parseInt(gameParams.dayLength / gameParams.tickFrequency),
        dayNumber: 0,
        priceDataLoaded: false,
        priceDataLoading: false,
        wage: 0,
        commission: 0,
        ...dayResetabbleParams(),
        socket: {
            isConnected: false,
            message: '',
            reconnectError: false,
        },
    },
    getters: {
        dataInLoading: (state) => () => {
            return (!state.priceDataLoaded && state.priceDataLoading);
        },
        pandle: (state) => (name) => {
            const sells = _.filter(state.transactions, (i) => (i.innerName === name && i.inner_action == 'sell'))
            const buys = _.filter(state.transactions, (i) => (i.innerName === name && i.inner_action == 'buy'))
            const totSells = _.sumBy(sells, function (o) { return o.price * o.quantity; });
            const avSellPrice = totSells / (sells.length || 1)
            const totBuys = _.sumBy(buys, function (o) { return o.price * o.quantity; });
            const avBuyPrice = totBuys / (buys.length || 1)
            const realized = (avSellPrice - avBuyPrice) * sells.length
            const stock = state.stocks.find(stock => stock.innerName === name)
            const outstandingPos = stock.quantity * stock.price
            return totSells - totBuys + outstandingPos
        },
        getAllTransactions: (state) => () => { return state.transactions },
        getCurrentTransactionNum: (state) => () => { return state.numTransactions },
        getCurrentTimeInTrade: (state) => () => { return state.secSpentOnTrade },
        getCashBalance: (state) => () => { return state.cashBalance },
        portfoglioValue: (state) => () => {
            return (_.sumBy(state.stocks, (i) => { return i.quantity * i.price })).toFixed(2);
        },
        getStockByName: (state) => (name) => {

            return state.stocks.find(stock => stock.innerName === name)
        },
        getStockIndexByName: (state) => (name) => {
            return _.findIndex(state.stocks, (i) => i.innerName === name)
        }
    },
    mutations: {
        SET_DAY_PARAMS: (state, { wage, commission }) => {
            state.wage = wage;
            state.commission = commission;
        },
        ALLOW_FORM_SUBMIT: (state) => {
            state.formSubmittable = true
        },
        RESET_ALL: (state) => {
            const newDayData = dayResetabbleParams();
            for (const i of Object.keys(newDayData)) {
                state[i] = newDayData[i]
            }
        },
        SET_LOADING: (state, v) => {

            state.priceDataLoading = v
        },
        DATA_LOADED: (state) => {
            state.priceDataLoaded = true;
            state.priceDataLoading = false;

        },
        DATA_LOADING: (state) => {
            state.priceDataLoaded = false;
            state.priceDataLoading = true;
        },
        PRICE_DATA_UPDATE: (state, obj) => {
            state.stocks = obj;
        },
        SET_NUM_AWARD: (state, obj) => { state.awardForTransaction = obj },
        SET_TIME_AWARD: (state, obj) => { state.awardForTime = obj },
        SEC_ON_TRADE_INCREASE: (state) => {
            state.secSpentOnTrade++;
        },
        TRANSACTION_NUM_INCREASE: (state) => {
            state.numTransactions++
        },
        NEW_TRANSACTION: (state, { trans }) => {
            state.transactions.push(
                trans
            )
        },
        TRANSACTIONS_RESET: (state, { trans }) => {
            state.transactions = []
        },
        DAY_INCREASE: (state) => {
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
        TICK_RESET: (state) => (state.currentTick = 0),
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
        setNumAward(context, obj) {
            if (gameParams.gamified) {
                context.commit('SET_NUM_AWARD', obj)
            }
        },
        setTimeAward(context, obj) {
            if (gameParams.gamified) { context.commit('SET_TIME_AWARD', obj) }
        },
        setTab(context, tab) {
            context.commit('SET_TAB', tab)
        },
        processTaskAnswer({ commit, state }, answer) {
            // somewhere here we send task asnwer for checking on a server side, and get a new task to work on
            // as soon as we get the answer we increase the counter of total tasks by 1, and 
            // if correct we increase the salary, number of crrect task and total number of money avaialbe
            function isAnswerCorrect(task, answer) {
                const m1 = _.max(task.matrix1)
                const m2 = _.max(task.matrix2)
                const correctAnswer = m1 + m2
                return parseInt(correctAnswer) === parseInt(answer)
            }
            const currentTask = state.currentTask
            if (isAnswerCorrect(currentTask, answer)) {
                commit('INCREASE_CORRECT_TASKS_COUNTER')
                commit('CHANGE_CASH', state.wage)
            }


            commit('INCREASE_TOTAL_TASKS_COUNTER')
            commit('SET_NEW_TASK', generateTask())
        },


        makeTransaction({ commit, state, getters }, { stock, quantity, initial = false }) {
            // negative quantity means selling, positive quanitity means buying
            // Somewhere here we also register transaction and send it back via socket to server
            // we may consider to register the full history of transactions somewhere
            const obj = getters.getStockByName(stock)

            const price = obj.price;

            obj.quantity += quantity;
            // we inverse final amount to be added/withdrawn from cash reserves because it is inversly related to the
            // transaction direction (negative quantity means byuing etc. )
            const finalAmount = -price * quantity - state.commission
            console.debug('GONNA SPENT WITHOUT COMMISSION', -price * quantity)
            console.debug('COMMISSION', state.commission * 1)
            console.debug('GONNA SPENT TOTOAL', -price * quantity - state.commission)

            const ind = getters.getStockIndexByName(stock);
            commit('STOCK_UPDATE', { ind, obj });
            if (!initial) {
                commit('CHANGE_CASH', finalAmount);
                commit('TRANSACTION_NUM_INCREASE');
            }
            let inner_action = quantity > 0 ? 'buy' : 'sell'
            let transaction_dir, trans_price;
            if (initial) {
                transaction_dir = 'Initial amount';
                trans_price = obj.history[0]
            } else {
                transaction_dir = quantity > 0 ? 'Buy' : 'Sell';
                trans_price = obj.price;
            }
            const formatted_trans = {
                innerName: obj.innerName,
                publicName: obj.publicName,
                inner_action: inner_action,

                action: transaction_dir,
                quantity: Math.abs(quantity),
                price: trans_price,
                time: new Date(),

            }

            commit('NEW_TRANSACTION', { trans: formatted_trans });
        },
        async nextDay({ commit, state, dispatch }) {
            // We trigger the next day, send a request to an api (for demo purposes, later on
            // we ll use the web socker with the same thing. )
            // we get prices for the entire day, it'll save the load at the websocket. 
            // in production we'll send there the participant code and the day number. Now 
            // just number of ticks
            // does it make sense to increase the day if there is no day info? lets try to find the day param in day_params of gameParams 
            const { priceUrl, day_params } = gameParams
            const next_one = state.dayNumber + 1;
            const specificDayParams = _.find(day_params, (i) => (i.round === next_one.toString()))

            if (specificDayParams === undefined) {
                commit('ALLOW_FORM_SUBMIT')
            } else {
                console.debug('GONNA SET THE FOLLOWING DAY PARAMS:', specificDayParams)
                commit('SET_DAY_PARAMS', specificDayParams)
                const n = state.numTicks;

                commit('DATA_LOADING');
                const r = await axios.get(`${priceUrl}?n=${n}`)
                const stocks = _.map(r.data, (i) => ({ ...i, quantity: 0 }))
                commit('RESET_ALL');
                commit('PRICE_DATA_UPDATE', stocks);
                commit('DAY_INCREASE');
                commit('DATA_LOADED');
                dispatch('updStocks')
            }
        },
        updStocks({ commit, state }) {
            const { currentTick, stocks } = state;
            _.forEach(stocks, (obj, ind) => {
                const price = obj.prices[currentTick]
                obj.price = _.round(price, 2);


                obj.history = obj.prices.slice(0, currentTick)
                obj.previous = _.last(obj.history);
                commit('STOCK_UPDATE', { ind, obj });

            });
        },

        async getNewTick({ commit, state, getters, dispatch }) {
            const { currentTick, numTicks, stocks } = state;
            if (currentTick >= numTicks) {
                await dispatch('nextDay')
            }
            else {
                dispatch('updStocks')
                commit('INC_TICK')
            }


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