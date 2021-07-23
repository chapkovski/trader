<template>
  <div class="about">
    <h1>Choose one of two options</h1>
    <div class="my-3">
      <v-btn width="150" @click="changeTab('Work')">Working tab</v-btn>
    </div>
    <div class="my-3">
      <v-btn width="150"  @click="changeTab('Trade')">Trading tab</v-btn>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({}),
  computed: {},

  methods: {
    ...mapMutations({ startTimer: "SET_TIMER" }),
    changeTab(where) {
      this.startTimer(true);
      this.$router.push({ name:where }).catch(() => {});
    },
  },
};
</script>
 
