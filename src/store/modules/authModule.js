import {AuthApi as authApi} from "@/api/authApi";

export default {
    namespaced: true,

    state: {
            credentials: {
                token: localStorage.getItem('access_token') || null,
                name: localStorage.getItem('name') || null,
                role: localStorage.getItem('role') || null,
                id: localStorage.getItem('user_id') || null
            }

    },

    getters: {
        getRole: (state) => state.credentials.role,
        getName: (state) => state.credentials.name,
        getId: (state) => state.credentials.id
    },

    mutations: {
        setToken(state, token) {
            state.credentials.token = token;
            localStorage.setItem('access_token', token);
        },

        setRole(state, role) {
            state.credentials.role = role;
            localStorage.setItem('role', role);
        },

        setName(state, name) {
            state.credentials.name = name;
            localStorage.setItem('name', name)
        },

        setId(state, id) {
            state.credentials.id = id;
            localStorage.setItem('user_id', id);
        }
    },

    actions: {
        onLogin({commit}, {name, password}) {
            authApi.login(name, password).then((res) => {
                commit('setToken', res.data.access_token);
                commit('setName', res.data.name);
                commit('setRole', res.data.role);
                commit('setId', res.data.user_id);
                console.log(res.data)
            })
        },
        onRegister({commit}, {name, password}) {
            authApi.register(name, password).then((res) => {
                commit('setToken', res.data.access_token);
                commit('setName', res.data.name);
                commit('setRole', res.data.role);
            })
        }
    }
}