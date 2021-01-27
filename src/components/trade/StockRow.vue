<template>
  <tr>
    <td>{{ name }}</td>

    <td>
      <transition name="fade" mode="out-in">
        <div :key="price" class="d-flex ">
          <div class="mr-3" :style="{ color: color }">
            {{ price }}
          </div>
          <div>
            <span :style="{ color: 'red' }">
              <v-icon :color="color">{{ icon }}</v-icon>
            </span>
          </div>
        </div>
      </transition>
    </td>

    <td>
      <div class="d-flex">
        <buy-sell-dialog
          action="buy"
          :stockName="name"
        
          :innerName='innerName'
          actionIcon="mdi-cart-arrow-down"
        ></buy-sell-dialog>
        <buy-sell-dialog
          action="sell"
          :stockName="name"
        
          :actionIcon="'mdi-trash-can-outline'"
          :innerName='innerName'
        ></buy-sell-dialog>
      </div>
    </td>
  </tr>
</template>

<script>
import _ from "lodash";

import BuySellDialog from "./BuySellDialog";

export default {
  components: { BuySellDialog },
  props: ["name",  "color", "icon", 'innerName'],
  data() {
    return {};
  },

  computed: {},
  watch: {},
  methods: {},
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
