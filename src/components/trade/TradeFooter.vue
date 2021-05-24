<template>
    <div class="d-flex justify-content-center " :style="{'flex-grow':'1'}" v-if='true'>
        <v-alert outlined height="42" type="warning" :icon="false" class="centered-alert">
            Current portfolio value:
            <span>
            {{ portfoglioValue()  }}
          </span>
        </v-alert>
       
    </div>
</template>

<script>

import _ from 'lodash';
import {mapGetters} from 'vuex'
export default {
    components: {   },
    data: () => ({
        
    }),
    created() {
        
    },
    computed :{
         ...mapGetters(['portfoglioValue']),
    },
    methods: {
       
    },
};
</script>

<style scoped>
.centered-alert {
    margin: 0px;
    margin-bottom: 5px;
    padding: 5px;
    font-size: small;
    flex-grow: 1;
}
</style>