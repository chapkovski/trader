<template>
  <v-card class="ma-1" :color="$gamified ? 'red' : ''">
    <v-card-text>
      Time left:
      <v-chip color="primary">
        <countdown :left-time="timeLeft" @finish="dayOver" ref="timer">
          <template v-slot:process="anyYouWantedScopName">
            <span>{{
              ` ${anyYouWantedScopName.timeObj.m}: ${anyYouWantedScopName.timeObj.s}`
            }}</span>
          </template>
        </countdown>
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
import gameParams from "../params";
const { dayLength, SEC } = gameParams;
const durationInMillisecs = dayLength * SEC;
import { mapState } from "vuex";
export default {
  data: () => ({
    timeLeft: durationInMillisecs,
    endTime: new Date().getTime() + durationInMillisecs,
  }),
  computed: {
    ...mapState(["timerActive"]),
  },
  watch: { timerActive(val) {
    if (val){
    this.$refs.timer.startCountdown();
    } else {
      this.$refs.timer.stopCountdown();
    }
  } },
  methods: {
    dayOver() {
      
      this.$emit("dayDone");
    },
  },
};
</script>

<style scoped></style>
