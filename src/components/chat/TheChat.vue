<template>
    <div >
        <div >
            <p>KAL</p>
            <p v-for="m in store.state.messages" :key="m.text">{{m.text}}</p>
<!--            <ChatMessage v-for="m in messages" :key="m.text" :name="m.name" :text="m.text" owner/>-->
        </div>
        <div class="c-form">
            <ChatForm/>
        </div>
    </div>
</template>

<script>
import ChatMessage from "../chat/ChatMessage.vue";
import ChatForm from "../chat/ChatForm.vue"
import { chatModule } from "@/store/modules/chatModule";
import {useStore} from "vuex";

export default {
    //middleware: ["chat"],
    methods: {
    },
    components: { ChatMessage, ChatForm },
    computed: {
        store() {
            return useStore()
        },
        messages: () => chatModule.getters.getMessages(chatModule.state())
    }
};
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


