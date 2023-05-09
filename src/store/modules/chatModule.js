export const chatModule = {
    state() {
        return {
            messages: []
        }
    },
    getters: {
        getMessages(state) {
            return state.messages
        }
    },
    mutations: {
        SOCKET_msg(state, message) {
            console.log('message received', message)
            state.messages.push(JSON.parse(message))
            console.log(state.messages)
        },
        getMessages(state) {
            return state.messages
        }
    }
}