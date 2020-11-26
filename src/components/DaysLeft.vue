
<template>
    <v-card raised class='mx-3'>
        <v-card-text>
            Day:
            <v-chip class="ma-2" color="primary">
                1/10
            </v-chip>
        </v-card-text>
    
    
    </v-card>
</template>

<script>
export default {
    data: () => ({
        icons: [
            'mdi-home',
            'mdi-email',
            'mdi-calendar',
            'mdi-delete',
        ],
        items: [
            'default',
            'absolute',
            'fixed',
        ],
        padless: false,
        variant: 'default',
    }),
    computed: {
        localAttrs() {
            const attrs = {}

            if (this.variant === 'default') {
                attrs.absolute = false
                attrs.fixed = false
            } else {
                attrs[this.variant] = true
            }
            return attrs
        },
    },
}
</script>

<style scoped>

</style>
