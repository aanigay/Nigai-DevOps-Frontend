<template>
    <v-sheet width="300" class="mx-auto">
        <v-form fast-fail @submit.prevent @submit="onSubmit">
            <v-text-field
                v-model="name"
                label="Username"
            ></v-text-field>

            <v-text-field
                type="password"
                v-model="password"
                label="Password"
            ></v-text-field>

            <v-btn type="submit" block class="mt-2">Submit</v-btn>
        </v-form>
    </v-sheet>
</template>

<script>
export default {
    data: () => ({
        name: '',
        password: '',
        rules: [
            value => {
                if (value) return true

                return 'You must enter a first name.'
            },
        ],
    }),
    methods: {
        onSubmit() {
            this.$store.dispatch('authModule/onLogin', {
                name: this.name,
                password: this.password
            }).then(() => {
                this.$router.push('/chat');
            })
        }
    }
}
</script>

<style scoped>

</style>