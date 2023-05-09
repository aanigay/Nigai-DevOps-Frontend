<template>
    <v-layout>
        <v-navigation-drawer expand-on-hover rail>
            <v-list>
                <v-list-item
                        prepend-icon="mdi-account"
                        :title="authModule.getters.getName(authModule.state())"
                        :subtitle="authModule.getters.getRole(authModule.state())"
                >
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-newspaper" title="Feed"
                             value="feed" to="/feed"></v-list-item>
                <v-list-item prepend-icon="mdi-chat" title="Chat"
                             value="chat" to="/chat"></v-list-item>
                <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard"
                             value="dashboard"></v-list-item>
                <v-list-item prepend-icon="mdi-login" title="Login"
                             value="login" to="/login"></v-list-item>
            </v-list>
        </v-navigation-drawer>
        <router-view class="h-screen a-main"></router-view>
    </v-layout>
</template>

<script>

import { authModule } from "./store/modules/authModule";
export default {
    computed: {
        authModule() {
            return authModule
        }
    },

    data: () => ({
    })
}
</script>

<style>

.a-main {
    width: 100dvh;
    left: 100px;
}
</style>