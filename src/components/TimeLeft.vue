<template>
  <v-card raised color="red">
    <v-card-text>
      Time left till the end of the round:
      <v-chip class="ma-2" color="primary">
        <countdown :left-time="timeLeft" @finish="restartTimer" ref="timer">
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

export default {
  data: () => ({
    timeLeft: durationInMillisecs,
    endTime: new Date().getTime() + durationInMillisecs,
  }),
  computed: {},
  methods: {
    restartTimer() {
      this.$refs.timer.startCountdown(true);
      this.$emit("dayDone");
    },
  },
};
</script>

<style scoped></style>
