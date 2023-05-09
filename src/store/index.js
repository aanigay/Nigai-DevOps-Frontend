import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import {authModule} from './modules/authModule';
import {chatModule} from "@/store/modules/chatModule";

// Create store
export default new Vuex.Store({
    modules: {
        authModule,
        chatModule
    },
    plugins: [createPersistedState()]
});