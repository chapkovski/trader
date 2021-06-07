<template>
  <v-app>
    <v-app-bar color="#6A76AB" dark app height="95">
      <account-info> </account-info>
      <days-left :day="dayNumber"></days-left>
      <time-left @dayDone="DAY_INCREASE()"></time-left>
      <v-spacer></v-spacer>
      <div :class="{ 'd-flex': true }" v-if="inTrade">
        <div>{{ secSpentOnTrade }}</div>
        <div>{{ numTransactions }}</div>
        <div class="m-3">
          <v-tooltip bottom v-if='timeAwardExists'>
            <template v-slot:activator="{ on, attrs }">
              <div v-bind="attrs" v-on="on">
                <v-badge avatar bordered overlap color="error">
                  <template v-slot:badge>
                    {{awardForTime.name}} 
                  </template>

                  <v-avatar size="60">
                    <v-img
                        :src="awardForTime.img"
                    ></v-img>
                  </v-avatar>
                </v-badge>
              </div>
            </template>
            <span>{{awardForTime.desc}}</span>
          </v-tooltip>
        </div>
        <v-tooltip bottom v-if='transactionAwardExists'>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <v-badge  bordered overlap>
                <template v-slot:badge>
                   {{awardForTransaction.name}} 
                </template>

                <v-avatar size="60">
                  <v-img
                    :src="awardForTransaction.img"
                  ></v-img>
                </v-avatar>
              </v-badge>
            </div>
          </template>
          <span>{{awardForTransaction.desc}}</span>
        </v-tooltip>
      </div>
    </v-app-bar>

    <v-navigation-drawer permanent expand-on-hover app>
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
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app height="50">
      <trade-footer v-if="inTrade" />
    </v-footer>
  </v-app>
</template>

<script>
import TradeFooter from "trade/TradeFooter";
import _ from "lodash";
import AccountInfo from "bank/AccountInfo";
import DaysLeft from "./components/DaysLeft";
import TimeLeft from "./components/TimeLeft";
import { mapActions, mapMutations, mapState , mapGetters} from "vuex";
import gameParams from "./params";
export default {
  components: { TradeFooter, AccountInfo, DaysLeft, TimeLeft },
  data() {
    return {
      day: 1,
      monitorInterval: null,
      items: [
        { title: "Trading", icon: "mdi-bank", to: { name: "Trade" } },
        { title: "Work", icon: "mdi-account-hard-hat", to: { name: "Work" } },
      ],
    };
  },
  created() {
    this.addRecord();
    this.updShares();
    this.monitorTime();
  },
  computed: {
    ...mapState(["stocks", "dayNumber", "secSpentOnTrade", "numTransactions", "awardForTime", "awardForTransaction"]),
    ...mapGetters(['getCurrentTransactionNum']),
    transactionAwardExists(){
      return !_.isEmpty(this.awardForTransaction)
    },
    timeAwardExists(){    
      return !_.isEmpty(this.awardForTime)
    },
    inTrade() {
      return this.$route.name == "Trade";
    },
  },
  watch: {
    numTransactions(val){
      const numsAward=gameParams.awards.nums[val]
        if (numsAward) {
         this.setNumAward(numsAward)
        }
    },
    $route(to, from) {
      if (to.name) {
        this.setTab(to.name);
      }
    },
  },
  methods: {
    ...mapActions(["setTab", "requestPriceUpdate", "setNumAward", 'setTimeAward']),
    // TODO: we don't need the day increase in production. most likely.
    ...mapMutations(["INC_TICK", "DAY_INCREASE", "SEC_ON_TRADE_INCREASE",]),
    monitorTime() {
      this.monitorInterval = setInterval(() => {
        if (this.inTrade) {this.SEC_ON_TRADE_INCREASE();
        const timeAward=gameParams.awards.time[this.secSpentOnTrade]
        if (timeAward) {
          this.setTimeAward(timeAward)
        }
        }
      }, 1000);
    },
    updShares: function () {
      this.intervalid1 = setInterval(() => {
        this.addRecord();
      }, gameParams.tickFrequency * 1000);
    },
    addRecord() {
      _.forEach(this.stocks, (i) => this.requestPriceUpdate(i.innerName));

      this.INC_TICK();
    },
    newDay() {
      console.debug("NEW DAY!!!");
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
</style>
