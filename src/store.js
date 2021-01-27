import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import VueNativeSock from 'vue-native-websocket'
import gameParams, { lastKnownState } from './params'
Vue.use(Vuex)
// 
const store = new Vuex.Store({
    state: {
        ...lastKnownState,
        stocks: [
            {
                innerName: 'a',
                publicName: 'Stock A',
                price: 0,
                previous: 0,
                volume: 0,
                history: []
            },
            {
                innerName: 'b',
                publicName: 'Stock B',
                price: 0,
                previous: 0,
                volume: 0,
                history: []
            },
        ],
        socket: {
            isConnected: false,
            message: '',
            reconnectError: false,
        },
    },
    getters: {
        getStockByName: (state) => (name) => {
            return state.stocks.find(stock => stock.innerName === name)
        },
        getStockIndexByName: (state) => (name) => {

            return _.findIndex(state.stocks, (i) => i.innerName === name)
        }
    },
    mutations: {
        STOCK_UPDATE: (state, { ind, obj }) => {
            state.stocks.splice(ind, 1, obj);
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
        requestPriceUpdate(context, stock) {
            // TODO: somewhere here we'll send a socket request to get a new tick
            const price = Math.random();
            const obj = context.getters.getStockByName(stock)
            obj.price = price;
            obj.previous = _.last(obj.history);
            obj.history = [...obj.history, price];
            const ind = context.getters.getStockIndexByName(stock);
            context.commit('STOCK_UPDATE', { ind, obj });

        }

    }
})
const ws_scheme = window.location.protocol === "https:" ? "wss" : "ws";
const ws_path = ws_scheme + '://' + window.location.host + window.socket_path;
// Vue.use(VueNativeSock, ws_path, {
//     store: store,
//     format: 'json',
//     reconnection: true, // (Boolean) whether to reconnect automatically (false)
//     reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
//     reconnectionDelay: 3000,
// });
export default store;  