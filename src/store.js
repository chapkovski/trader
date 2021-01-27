import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import VueNativeSock from 'vue-native-websocket'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        socket: {
            isConnected: false,
            message: '',
            reconnectError: false,
        },
    },
    getters: {
    },
    mutations: {
       
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