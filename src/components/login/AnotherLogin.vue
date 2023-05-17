<template>
    <v-sheet width="300" class="mx-auto">

        <v-text-field
                v-model="name"
                label="Username"
        ></v-text-field>

        <v-text-field
                type="password"
                v-model="password"
                label="Password"
        ></v-text-field>

        <v-btn type="submit" block class="mt-2" @submit.prevent @click="onLogin">Login</v-btn>
        <v-btn type="submit" color="#80CBC4" block class="mt-2" @submit.prevent @click="onRegister">Register</v-btn>

        <v-dialog
                v-model="dialog"
                width="auto"
        >
            <v-card>
                <v-card-text>
                    Incorrect login or password.
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" block @click="dialog = false">Got it</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-sheet>

</template>

<script>
export default {
    data: () => ({
        name: '',
        password: '',
        dialog: false
    }),
    methods: {
        onLogin() {
            this.$store.dispatch('authModule/onLogin', {
                name: this.name,
                password: this.password
            }).then((res) => {
                console.log('resSSS', res)
                if (!res) {
                    this.dialog = true
                } else {
                    this.$router.push('/feed');
                }
            })
        },
        onRegister() {
            this.$store.dispatch('authModule/onRegister', {
                name: this.name,
                password: this.password
            }).then(() => {
                this.$router.push('/feed');
            })
        }
    }
}
</script>

<style scoped>

</style>