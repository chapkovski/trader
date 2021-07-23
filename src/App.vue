

<template>
  <v-app>
    <transition
      enter-active-class="animate__animated animate__fadeIn animate__slow"
      leave-active-class="animate__animated animate__fadeOut animate__slow"
    >
      <Balloons v-if="isAwardGiven" />
    </transition>
    <form
      class="otree-form"
      method="post"
      role="form"
      id="form"
      ref="otreeForm"
    >
      <input
        type="hidden"
        name="secSpentOnTrade"
        :value="secSpentOnTrade"
        id="id_secSpentOnTrade"
      />
    </form>
    <new-day-dialog></new-day-dialog>
    <transition
      enter-active-class="animate__animated animate__bounce animate__slow"
      leave-active-class="animate__animated animate__fadeOutTopRight animate__slow"
    >
      <v-overlay
        :value="awardGiven"
        v-if="isAwardGiven"
        :dark="false"
        :opacity="0"
        z-index="10000"
      >
        <v-img
          contain
          max-height="300"
          max-width="300"
          :src="awardGiven.img"
        ></v-img>
        <v-sheet width="300">
          <h4>{{ awardGiven.name }}</h4>
          <h5>{{ awardGiven.desc }}</h5>
        </v-sheet>
      </v-overlay>
    </transition>
    <v-app-bar color="#6A76AB" dark app height="95" v-if="!inStart">
      <account-info> </account-info>
      <days-left :day="dayNumber"></days-left>

      <time-left @dayDone="nextDay()"></time-left>
      <v-spacer></v-spacer>
      <div :class="{ 'd-flex': true }" v-if="inTrade">
        <div
          class="m-1"
          v-for="award in awards"
          :key="award.id"
          v-if="$gamified"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <div v-bind="attrs" v-on="on">
                <v-badge
                  bordered
                  overlap
                  :color="locked(award.id) ? 'secondary' : 'success'"
                  bottom
                  left
                >
                  <template v-slot:badge>
                    <v-icon v-if="locked(award.id)">mdi-lock</v-icon>
                    <v-icon v-else>mdi-check-outline</v-icon>
                  </template>

                  <v-avatar size="60">
                    <v-img
                      :src="award.img"
                      :class="classAward(award.id)"
                    ></v-img>
                  </v-avatar>
                </v-badge>
              </div>
            </template>
            <span>{{ award.brief }}</span>
          </v-tooltip>
        </div>
      </div>
    </v-app-bar>

    <v-navigation-drawer permanent expand-on-hover app v-if="!inStart">
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar> </v-list-item-avatar>

          <v-list-item-content> </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app height="50">
      <div class="d-flex justify-content-center">
        <instructions-dialog></instructions-dialog>

        <trade-footer v-if="inTrade" />
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import TradeFooter from "trade/TradeFooter";
import Balloons from "trade/Balloons";
import _ from "lodash";
import AccountInfo from "bank/AccountInfo";
import DaysLeft from "./components/DaysLeft";
import NewDayDialog from "./components/NewDayDialog";
import InstructionsDialog from "./components/InstructionsDialog";
import TimeLeft from "./components/TimeLeft";
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";
import gameParams, { listAwards } from "./params";

export default {
  components: {
    TradeFooter,
    AccountInfo,
    DaysLeft,
    TimeLeft,
    NewDayDialog,
    InstructionsDialog,
    Balloons,
  },
  data() {
    const i = document.getElementById("instructions").innerHTML;
    return {
      i: i,
      awards: listAwards,
      day: 1,
      monitorInterval: null,
      awardGiven: {},
      items: [
        { title: "Trading", icon: "mdi-bank", to: { name: "Trade" } },
        { title: "Work", icon: "mdi-account-hard-hat", to: { name: "Work" } },
      ],
    };
  },
  async created() {
    this.nextDay({ startSession: true });

    this.getNewTick();
    this.updShares();

    this.monitorTime();
  },
  mounted() {},
  computed: {
    ...mapState([
      "stocks",
      "dayNumber",
      "secSpentOnTrade",
      "numTransactions",
      "awardForTime",
      "awardForTransaction",
      "formSubmittable",
      "awardsGiven",
      "timerActive"
    ]),
    ...mapGetters(["getCurrentTransactionNum", "pandle"]),
    transactionAwardExists() {
      return !_.isEmpty(this.awardForTransaction);
    },
    timeAwardExists() {
      return !_.isEmpty(this.awardForTime);
    },
    isAwardGiven() {
      return !_.isEmpty(this.awardGiven);
    },
    inTrade() {
      return this.$route.name == "Trade";
    },
    inStart() {
      return this.$route.name == "Start";
    },
  },
  watch: {
    formSubmittable(val, oldVal) {
      if (val === true) {
        this.$refs.otreeForm.submit();
      }
    },
    awardGiven(val) {
      this.isAwardGiven &&
        setTimeout(() => {
          this.awardGiven = {};
          // this.$confetti.stop();
        }, 3000);
    },
    numTransactions(val) {
      const numsAward = gameParams.awards.nums[val];
      if (numsAward && this.$gamified) {
        this.setNumAward(numsAward);
        this.awardGiven = numsAward;
      }
    },
    dayNumber() {
      this.$router.push({ name: "Start" }).catch(() => {});
    },
    $route(to, from) {
      if (to.name) {
        this.setTab(to.name);
      }
    },
  },
  methods: {
    ...mapActions([
      "setTab",
      "requestPriceUpdate",
      "setNumAward",
      "setTimeAward",
      "makeTransaction",
      "getNewTick",
      "nextDay",
    ]),
    // TODO: we don't need the day increase in production. most likely.
    ...mapMutations(["SEC_ON_TRADE_INCREASE"]),
    classAward(award_id) {
      const award = _.find(this.awardsGiven, (i) => i.id === award_id);
      if (award) return "";
      return "gray";
    },
    locked(award_id) {
      const award = _.find(this.awardsGiven, (i) => i.id === award_id);
      if (award) return false;
      return true;
    },
    monitorTime() {
      this.monitorInterval = setInterval(() => {
        if (this.inTrade) {
          this.SEC_ON_TRADE_INCREASE();
          const timeAward = gameParams.awards.time[this.secSpentOnTrade];
          if (timeAward && this.$gamified) {
            this.setTimeAward(timeAward);
            this.awardGiven = timeAward;
          }
        }
      }, 1000);
    },

    async updShares() {
      this.intervalid1 = setInterval(() => {
        if (this.timerActive) {
          this.getNewTick();
        }
      }, gameParams.tickFrequency * 1000);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.gray {
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.centered-alert {
  margin: 0px;
  margin-bottom: 5px;
  padding: 5px;
  /* font-size: small; */
  flex-grow: 1;
}
</style>
 