<template>
  <div class="text-center">
    <v-dialog :value="dialog" width="500">
      <v-card>
        <v-card-title v-if='dayNumber===1' class="text-h5 red lighten-2 text-center d-flex justify-center"> <div>This is the training round</div> </v-card-title>
        <v-card-title class="text-h5 grey lighten-2"> New round! </v-card-title>

        <v-card-text>
          <v-list flat>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                {{ item.text }}
              </v-list-item-content>
              <v-list-item-icon
                >{{ getInfo(item.info_type) }}
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            :disabled="!priceDataLoaded"
            @click="closeDialog"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      items: [
        { info_type: "dayNumber", text: "Round:", icon: "mdi-clock" },
        {
          info_type: "wage",
          text: "Wage per correct task:",
          icon: "mdi-account",
        },
        {
          info_type: "commission",
          text: "Trade commission per each transaction:",
          icon: "mdi-flag",
        },
      ],
    };
  },
  computed: {
    ...mapState([
      "priceDataLoading",
      "priceDataLoaded",
      "wage",
      "commission",
      "dayNumber",
    ]),
  },
  mounted() {},
  watch: {
    dayNumber(v, o) {
      this.dialog = true;
    },
  },
  methods: {
    ...mapMutations(["SET_TIMER"]),
    closeDialog() {
      this.dialog = false;
      this.SET_TIMER(true);
    },
    getInfo(info_type) {
      return this[info_type];
    },
  },
};
</script>
