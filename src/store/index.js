
import { createStore } from "vuex";
import authModule from './modules/authModule';
import chatModule from "@/store/modules/chatModule";



export default createStore({
    modules: {
        authModule,
        chatModule
    }
})