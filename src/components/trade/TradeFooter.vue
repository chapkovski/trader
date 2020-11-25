<template>
    <div class="d-flex justify-content-center " :style="{'flex-grow':'1'}">
        <v-alert outlined height="42" type="warning" :icon="false" class="centered-alert">
            Interest accrued:
            <span>
            {{ (accrued ).toFixed(2)  }}
          </span>
        </v-alert>
        <v-alert outlined type="info" height="42" :icon="false" class="mx-3 centered-alert">
            Current rate:
            <span>
            {{ (rate * 100).toFixed(2) }}%
          </span>
        </v-alert>
        <v-alert height="42" outlined type="error" :icon="false" class="mx-3 centered-alert">
            Borrowed so far:
            <span>
            {{ (currentDebt).toFixed(2) }}
          </span>
        </v-alert>
        <margin-dialog />
    </div>
</template>

<script>
import MarginDialog from "./MarginDialog";
import _ from 'lodash'
export default {
    components: { MarginDialog },
    data: () => ({
        rate: 0.05,
        currentDebt: 100,
        accrued: 0,
    }),
    created() {
        this.updDebt();
    },
    methods: {
        updDebt: function() {
            this.intervalid1 = setInterval(() => {
                this.currentDebt++;
                this.rate = this.rate + _.random(-1, 1, true) / 100
                this.accrued += this.currentDebt * (this.rate)
            }, 2000);
        },
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