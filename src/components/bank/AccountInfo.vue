
<template>
    <v-card class="ma-1"  >
        <v-card-text>
            E$:
            <v-chip color="primary">
                {{getCashBalance().toFixed(2)}}
            </v-chip>
        </v-card-text>
    
    
    </v-card>
</template>

<script>
import {mapGetters} from 'vuex'
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
        ...mapGetters(['getCashBalance']),
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
