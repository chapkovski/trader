<template>
  <v-card raised color="red">
    <v-card-text>
      Time left till the end of the day:
      <v-chip class="ma-2" color="primary">
        <countdown
          :left-time="timeLeft"
          @finish="restartTimer"
          ref="timer"
        >
          <template v-slot:process="anyYouWantedScopName">
            <span>{{ ` ${anyYouWantedScopName.timeObj.ceil.s}` }}</span>
          </template>
        </countdown>
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    timeLeft: 6000,
    endTime:new Date().getTime() + 4000
  }),
  computed: {
    
  },
  methods: {
    restartTimer() {
      this.$refs.timer.startCountdown(true);
    },
  },
};
</script>

<style scoped></style>
