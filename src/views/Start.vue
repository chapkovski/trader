<template>
  <div class="about">
    <h1>Choose one of two options</h1>
    <div class="my-3" v-for="item in tabItems" :key="item.title">
      <v-btn width="150" @click="changeTab(item.to.name)">
        <v-icon>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import gameParams, { tabItems } from "../params";

export default {
  data: () => ({ tabItems }),
  computed: {},

  methods: {
    ...mapMutations({ startTimer: "SET_TIMER" }),
    changeTab(where) {
      this.startTimer(true);
      this.$router.push({ name: where }).catch(() => {});
    },
  },
};
</script>
