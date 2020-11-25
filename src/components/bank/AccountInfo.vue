
<template>
    <v-card raised>
        <v-card-text>
            Bank account balance:
            <v-chip class="ma-2" color="primary">
                $100.000
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
