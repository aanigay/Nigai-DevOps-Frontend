import {LoginAPIInstance} from "@/api";

export const AuthApi = {
    /**
     *
     * @param {string} name
     * @param {string} password
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    login(name, password) {
        const url = '/login';
        const data = {name, password};
        return LoginAPIInstance.post(url, data);
    },

    register(name, password) {
        const url = '/register';
        const data = {name, password};
        return LoginAPIInstance.post(url, data);
    }
}