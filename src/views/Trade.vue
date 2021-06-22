<template>
  <v-container>
    <transition name="fade">
      <v-row if="successfulTrade" :key="successfulTrade">
        <v-col cols="12">
          <v-alert
            v-model="successfulTrade"
            border="left"
            close-text="Close Alert"
            color="deep-purple accent-4"
            dark
            dismissible
          >
            Hurray, you achieved new heights in trading!
          </v-alert>
        </v-col>
      </v-row>
    </transition>
    <v-row flex>
      <v-col cols="12" md="6">
        <action-bar />
      </v-col>
      <v-col cols="12" md="6">
        <holdings />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <!-- <history /> -->
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <transactions />
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
// @ is an alias to /src
import { ActionBar, Holdings, History, Transactions } from "trade";

export default {
  name: "Trade",
  components: {
    ActionBar,
    Holdings,

    History,

    Transactions,
  },
  data() {
    return {
      successfulTrade: false,
    };
  },
  created() {
    // this.congratulate();
  },

  methods: {
 
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
