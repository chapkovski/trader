<template>
  <div class="text-center">
    <v-dialog :value="dialog" width="500" persistent>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2 my-3">
          End of the round {{ dayNumber }}!
        </v-card-title>

        <v-card-text>
          <h5>Earnings in this round:</h5>
          <v-list flat>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                {{ item.text }}
              </v-list-item-content>
              <v-list-item-icon
                >{{ getInfo(item.info_type).toFixed(2) }}
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeDialog"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
const gamified_item = {
  info_type: "bonus_for_time",
  text: "Value of shares given for time spent in trading:",
  icon: "mdi-gift",
};
const generalItems = [
  {
    info_type: "earnings_from_work",
    text: "Earnings from work:",
    icon: "mdi-account-hard-hat",
  },
  {
    info_type: "earnings_from_trade",
    text: "Earnings from trade:",
    icon: "mdi-domain",
  },
];
export default {
  data() {
    let items = generalItems;
    if (this.gamified) {
      items = [...items, gamified_item];
    }
    return {
      dialog: false,
      items,
    };
  },
  computed: {
    ...mapGetters(["gamified"]),
    ...mapState([
      "endDayDialog",
      "dayNumber",
      "earnings_from_work",
      "earnings_from_trade",
      "bonus_for_time",
    ]),
  },
  mounted() {},
  watch: {
    endDayDialog(v, o) {
      this.dialog = v;
    },
  },
  methods: {
    ...mapMutations(["SET_DAY_END_DIALOG"]),
    ...mapActions(["nextDay"]),
    async closeDialog() {
      await this.nextDay();
      // this.dialog = false;
      this.SET_DAY_END_DIALOG(false);
    },
    getInfo(info_type) {
      return this[info_type];
    },
  },
};
</script>