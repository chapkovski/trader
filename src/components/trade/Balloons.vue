

<template>
  <div id="balloon-container">
    <div
      v-for="balloon in balloons"
      :key="balloon.id"
      :style="getRandomStyles()"
      class="balloon"
    ></div>
  </div>
</template>

<script>
import _ from "lodash";



export default {
  data() {
    return {
      numBalloons: 100,
      balloons: [],
    };
  },
  async created() {},
  mounted() {
    const nums = _.range(this.numBalloons);
    this.balloons = _.map(nums, (i) => ({ id: i }));
  },
  computed: {},
  watch: {},
  methods: {
    getRandomStyles() {
      console.debug('what?', 'are wh even here??')
      var r = _.random(255);
      var g = _.random(255);
      var b = _.random(255);
      var mt = _.random(200);
      var ml = _.random(50);
      var dur = _.random(5) + 5;
      return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
    },
  },
};
</script>

<style lang="scss">
#balloon-container {
  z-index: 10000;
  position: fixed;
  height: 100vh;
  padding: 1em;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}

.balloon {
  height: 125px;
  width: 105px;
  border-radius: 75% 75% 70% 70%;
  position: relative;
}

.balloon:before {
  content: "";
  height: 75px;
  width: 1px;
  padding: 1px;
  background-color: #fdfd96;
  display: block;
  position: absolute;
  top: 125px;
  left: 0;
  right: 0;
  margin: auto;
}

.balloon:after {
  content: "▲";
  text-align: center;
  display: block;
  position: absolute;
  color: inherit;
  top: 120px;
  left: 0;
  right: 0;
  margin: auto;
}

@keyframes float {
  from {
    transform: translateY(100vh);
    opacity: 1;
  }
  to {
    transform: translateY(-300vh);
    opacity: 0;
  }
}
</style>
 