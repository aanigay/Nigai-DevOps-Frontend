<template>
    <v-card>
        <v-list lines="three">
            <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :title="item.title"
                    :subtitle="item.value"
            ></v-list-item>
        </v-list>
    </v-card>
</template>

<script>

export default {
    data: () => ({
        items: [
            {
                title: 'Post #1',
                value: 1,
            },
            {
                title: 'Post #2',
                value: 2,
            },
            {
                title: 'Post #3',
                value: 3,
            },
        ],
    }),
}

</script>