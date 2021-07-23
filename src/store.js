import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'
import VueNativeSock from 'vue-native-websocket'
import gameParams, { listAwards } from './params'

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
    awardsGiven: [],
    awardForTime: {},
    awardForTransaction: {},
    transactions: [],
    stocks: []
})
const store = new Vuex.Store({
    state: {
        earnings_from_work: 0,
        earnings_from_trade: 0,
        bonus_for_time: 0,
        timerActive: false,
        endDayDialog: false,
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
        status: (state) => state.socket.isConnected,
        dataInLoading: (state) => () => {
            return (!state.priceDataLoaded && state.priceDataLoading);
        },
        pandle: (state) => (name) => {
            let avBuyPrice = 0, avSellPrice = 0
            const sells = _.filter(state.transactions, (i) => (i.innerName === name && i.inner_action == 'sell'))
            const buys = _.filter(state.transactions, (i) => (i.innerName === name && i.inner_action == 'buy'))
            const totSells = _.sumBy(sells, function (o) { return o.price * o.quantity; });
            const totSellsQ = _.sumBy(sells, function (o) { return o.quantity; });
            if (sells.length > 0) {
                avSellPrice = totSells / totSellsQ
            }

            const totBuys = _.sumBy(buys, function (o) { return o.price * o.quantity; });
            const totBuysQ = _.sumBy(buys, function (o) { return o.quantity; });

            if (buys.length > 0) {
                avBuyPrice = totBuys / totBuysQ;
            }

            const realized = (avSellPrice - avBuyPrice) * totSellsQ
            const stock = state.stocks.find(stock => stock.innerName === name)
            const unrealized = stock.quantity * (stock.price - avBuyPrice)

            return {
                realized: realized,
                unrealized: unrealized,
                total: realized + unrealized
            }
        },
        getAllTransactions: (state) => () => { return state.transactions },
        getCurrentTransactionNum: (state) => () => { return state.numTransactions },
        getCurrentTimeInTrade: (state) => () => { return state.secSpentOnTrade },
        getCashBalance: (state) => () => { return state.cashBalance },
        portfoglioValue: (state) => () => {
            return (_.sumBy(state.stocks, (i) => { return i.quantity * i.price }));
        },
        getStockByName: (state) => (name) => {

            return state.stocks.find(stock => stock.innerName === name)
        },
        getStockIndexByName: (state) => (name) => {
            return _.findIndex(state.stocks, (i) => i.innerName === name)
        }
    },
    mutations: {
        SET_DAY_END_DIALOG: (state, val) => {
            state.endDayDialog = val
        },
        SET_TIMER: (state, val) => {
            state.timerActive = val
        },
        SET_DAY_PARAMS: (state, { wage, commission }) => {
            state.wage = parseInt(wage);
            state.commission = parseInt(commission);
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
        SET_NUM_AWARD: (state, obj) => {

            state.awardForTransaction = obj;
            state.awardsGiven.push(obj)

        },
        SET_TIME_AWARD: (state, obj) => {
            state.awardForTime = obj;
            state.awardsGiven.push(obj)
        },
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
        CHANGE_CASH: (state, { q, source }) => {
            console.debug("WORK", "TRADE", q, source)
            switch (source) {
                case 'work':
                    state.earnings_from_work += q;
                    break;
                case 'trade':
                    state.earnings_from_trade += q;
                    break;
                case 'bonus':
                    state.bonus_for_time += q;
                    break;

            }

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
        setNumAward({ commit, state, dispatch }, obj) {
            if (gameParams.gamified) {
                commit('SET_NUM_AWARD', obj);
                dispatch('sendEventToServer', { name: 'awardForTransaction', award_type: obj, numTransactions: state.numTransactions })
            }
        },
        setTimeAward({ commit, state, dispatch }, obj) {
            if (gameParams.gamified) {
                commit('SET_TIME_AWARD', obj);
                dispatch('sendEventToServer', { name: 'awardForTime', secSpentOnTrade: state.secSpentOnTrade, award_type: obj })
            }
        },
        setTab({ commit, state, dispatch }, tab) {
            commit('SET_TAB', tab);
            dispatch('sendEventToServer', { name: 'tabChanged', new_tab: state.currentTab })
        },
        processTaskAnswer({ commit, state, dispatch }, answer) {

            function isAnswerCorrect(task, answer) {
                const m1 = _.max(task.matrix1)
                const m2 = _.max(task.matrix2)
                const correctAnswer = m1 + m2
                return parseInt(correctAnswer) === parseInt(answer)
            }
            const currentTask = state.currentTask
            const isCorrect = isAnswerCorrect(currentTask, answer);
            if (isCorrect) {
                commit('INCREASE_CORRECT_TASKS_COUNTER')
                commit('CHANGE_CASH', { q: state.wage, source: 'work' })
            }

            commit('INCREASE_TOTAL_TASKS_COUNTER');
            dispatch('sendEventToServer', {
                name: 'taskSubmitted',
                correct: isCorrect,
                wage: state.wage,
                balance: state.cashBalance,
                totalCorrect: state.correctTasksSubmitted,
                totalSubmitted: state.totalSubmitted
            })


            commit('SET_NEW_TASK', generateTask())
        },


        makeTransaction({ commit, state, getters, dispatch }, { stock, quantity, initial = false }) {
            // negative quantity means selling, positive quanitity means buying
            // Somewhere here we also register transaction and send it back via socket to server
            // we may consider to register the full history of transactions somewhere

            const obj = getters.getStockByName(stock)

            const price = obj.price;

            obj.quantity += quantity;
            // we inverse final amount to be added/withdrawn from cash reserves because it is inversly related to the
            // transaction direction (negative quantity means byuing etc. )
            const finalAmount = -price * quantity - state.commission
            if (initial || (state.cashBalance + finalAmount > 0)) {


                const ind = getters.getStockIndexByName(stock);
                commit('STOCK_UPDATE', { ind, obj });
                if (!initial) {
                    commit('CHANGE_CASH', { q: finalAmount, source: 'trade' });
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
                dispatch('sendEventToServer', { name: 'newTransaction', ...formatted_trans, balance: state.cashBalance })

                commit('NEW_TRANSACTION', { trans: formatted_trans });
            }
            else {
                console.debug('what do we get here', initial)
                console.debug('what do we get here', finalAmount)
                console.debug('what do we get here', state.cashBalance)
                console.debug('transaction impossible')
            }
        },
        async dayEnds({ commit, state, dispatch }) {
            console.debug('DAY IS DONE!')
            commit('SET_TIMER', false);
            dispatch('clearHoldings');
            
            if (gameParams.gamified) {
                dispatch('giveBonusForTime');
            }
            dispatch('sendEventToServer', { name: 'dayEnded', secSpentOnTrade: state.secSpentOnTrade, balance: state.cashBalance })
            commit('SET_DAY_END_DIALOG', true)

        },
        async nextDay({ commit, state, dispatch }, { startSession = false } = {}) {
            // We trigger the next day, send a request to an api (for demo purposes, later on
            // we ll use the web socker with the same thing. )
            // we get prices for the entire day, it'll save the load at the websocket. 
            // in production we'll send there the participant code and the day number. Now 
            // just number of ticks
            // does it make sense to increase the day if there is no day info? lets try to find the day param in day_params of gameParams 
            commit('SET_TIMER', false)
            if (!startSession) {
                // dispatch('clearHoldings');
                // dispatch('sendEventToServer', { name: 'dayEnded', secSpentOnTrade: state.secSpentOnTrade, balance: state.cashBalance })
            } else {
                console.debug('Start of the session')
            }

            const { priceUrl, day_params } = gameParams
            const next_one = state.dayNumber + 1;
            const specificDayParams = _.find(day_params, (i) => (i.round === next_one.toString()))

            if (specificDayParams === undefined) {
                dispatch('sendEventToServer', { name: 'gameEnded', balance: state.cashBalance })
                commit('ALLOW_FORM_SUBMIT')
            } else {
                commit('SET_DAY_PARAMS', specificDayParams)
                const n = state.numTicks;

                commit('DATA_LOADING');
                const r = await axios.get(`${priceUrl}?n=${n}`)
                const stocks = _.map(r.data, (i) => ({ ...i, quantity: 0, history: [i.initial] }))

                commit('RESET_ALL');
                commit('PRICE_DATA_UPDATE', stocks);
                commit('DAY_INCREASE');
                commit('DATA_LOADED');

                dispatch('makeTransaction', {
                    stock: "a",
                    quantity: 10,
                    initial: true,
                });
                dispatch('makeTransaction', {
                    stock: "b",
                    quantity: 10,
                    initial: true,
                });
                dispatch('updStocks');
                dispatch('sendEventToServer', { name: 'dayStarted', dayNumber: state.dayNumber, balance: state.cashBalance, ...specificDayParams })
            }
        },
        updStocks({ commit, state, dispatch }) {
            const { currentTick, stocks } = state;
            _.forEach(stocks, (obj, ind) => {
                const price = obj.prices[currentTick]
                obj.price = _.round(price, 2);
                obj.history = obj.prices.slice(0, currentTick)
                obj.previous = _.last(obj.history);
                commit('STOCK_UPDATE', { ind, obj });
                // dispatch('sendEventToServer', {  name: 'priceUpdate', ..._.pick(obj, ['innerName', 'publicName', 'initial', 'sigma', 'leverage', 'price', 'previous']) })

            });
        },
        clearHoldings({ commit, state, getters, dispatch }) {
            const finalStockAmount = getters.portfoglioValue()
            const stocks = _.map(state.stocks, (i) => ({
                innerName: i.innerName,
                price: i.price, quantity: i.quantity
            }))
            commit('CHANGE_CASH', { q: finalStockAmount, source: 'trade' });
            dispatch('sendEventToServer', { name: 'clearingStockBeforeDayEnds', finalStockAmount, stocksOwned: stocks, balance: state.cashBalance })
        },
        async getNewTick({ commit, state, dispatch }) {
            const { currentTick, numTicks, stocks } = state;

            if (currentTick >= numTicks) {
                await dispatch('nextDay')
            }
            else {
                dispatch('updStocks')
                commit('INC_TICK')
            }


        },
        getServerConfirmation(context, message) {
            console.debug('Message from server: ', message)
        },
        giveBonusForTime({ commit, dispatch, state }) {
            const { bonusProbabilityCoef, numStocksInBonus, dayLength } = gameParams
            const { stocks, secSpentOnTrade, cashBalance } = state;
            const filtered = _.filter(stocks, _.matches({ leverage: 1 }));
            const chosenStock = _.sample(filtered)
            const bonus = chosenStock.price * numStocksInBonus
            const r = _.random()
            const prob = (secSpentOnTrade / dayLength)*bonusProbabilityCoef;
            
            if (r <= prob) {
                commit('CHANGE_CASH', { q: bonus, source: 'bonus' });
                dispatch('sendEventToServer', {
                    name: 'giveBonus', chosenStockName: chosenStock.innerName,
                    chosenStockPrice: chosenStock.price,
                    balance: cashBalance,
                    secSpentOnTrade: secSpentOnTrade
                })
            }

        },
        sendEventToServer(context, message) {
            try {
                const round_number = context.state.dayNumber;
                message = { ...message, round_number }
                Vue.prototype.$socket.sendObj(message)
            } catch (e) { console.debug("TRYING TO SEND SOMETHING ON SEVER WHAT?", message) }
        },

    }
})
const ws_scheme = window.location.protocol === "https:" ? "wss" : "ws";
const ws_path = ws_scheme + '://' + window.location.host + window.socket_path;
Vue.use(VueNativeSock, ws_path, {
    store: store,
    format: 'json',
    reconnection: true, // (Boolean) whether to reconnect automatically (false)
    reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
    reconnectionDelay: 3000,
});
export default store;