<template>
  <v-card raised color="red">
    <v-card-text>
      Time left till the end of the round:
      <v-chip class="ma-2" color="primary">
        <countdown
          :left-time="timeLeft"
          @finish="restartTimer"
          ref="timer"
        >
          <template v-slot:process="anyYouWantedScopName">
            <span>{{ ` ${anyYouWantedScopName.timeObj.m}: ${anyYouWantedScopName.timeObj.s}` }}</span>
          </template>
        </countdown>
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    timeLeft: 60*1000,
    endTime:new Date().getTime() + 60*1000
  }),
  computed: {
    
  },
  methods: {
    restartTimer() {
      this.$refs.timer.startCountdown(true);
      this.$emit('dayDone');
    },
  },
};
</script>

<style scoped></style>
