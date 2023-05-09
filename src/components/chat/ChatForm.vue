<template>
    <v-row xs12>
        <v-text-field label="Введите сообщение" outline v-model="message.text" @keydown.enter="send(message)"/>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        message: {
            text: "",
            name: "username"
        }
    }),
    methods: {
        send(message) {
            this.$socket.emit('msg', JSON.stringify(message))
        }
    }
};
</script>