<template>
    <div class="c-wrap">
        <div class="c-chat">
            <ChatMessage v-for="m in messages" :key="m.text" :name="m.name" :text="m.text" :owner="username===m.name"/>
        </div>
        <div class="c-form">
            <ChatForm :username="username"/>
        </div>
    </div>
</template>

<script setup>
import ChatMessage from "../chat/ChatMessage.vue";
import ChatForm from "../chat/ChatForm.vue"
import {useStore} from "vuex";
let store = useStore();
let messages = store.getters["chatModule/getMessages"] || []
let username = store.getters["authModule/getName"]

</script>

<style scoped>
.c-wrap {
    height: 100%;
    position: relative;
    overflow: hidden;
}

.c-form {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    height: 80px;
    background: #f2f2f2;
    border-radius: 10px;
}

.c-chat {
}
</style>


