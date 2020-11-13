<template>
  <v-col flex justify-content-center class="d-flex justify-center">
    <v-alert
      outlined
      type="warning"
      border="left"
      :icon="false"
      class="centered-alert"
    >
      Interest accrued:
      <v-chip class="ma-2" label>
        {{ (accrued ).toFixed(2)  }}
      </v-chip>
    </v-alert>
    <v-alert
      outlined
      type="primary"
      border="left"
      :icon="false"
      class="mx-3 centered-alert"
    >
      Current rate:
      <v-chip class="ma-2" color="primary" label>
        {{ (rate * 100).toFixed(2) }}%
      </v-chip>
    </v-alert>
    <v-alert
      outlined
      type="error"
      border="left"
      :icon="false"
      class="mx-3 centered-alert"
    >
      Borrowed so far:
      <v-chip class="ma-2" color="error" label>
        {{ (currentDebt).toFixed(2) }}
      </v-chip>
    </v-alert>
    <margin-dialog />
  </v-col>
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
        this.rate=this.rate +_.random(-1,1, true)/100
        this.accrued += this.currentDebt*(this.rate)
      }, 2000);
    },
  },
};
</script>
<style>
.centered-alert {
  /* display:flex; */
}
</style>
