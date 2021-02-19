<template>
  <v-app>
    <v-app-bar color="#6A76AB" dark app height="95">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <account-info> </account-info>
      <days-left :day="day"></days-left>
      <time-left @dayDone="day++"></time-left>
      <v-spacer></v-spacer>
      <div :class="{ 'd-flex': true }" v-if="inTrade">
        <div class="m-3">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <div v-bind="attrs" v-on="on">
                <v-badge avatar bordered overlap color="error">
                  <template v-slot:badge>
                    <v-avatar>
                      2
                    </v-avatar>
                  </template>

                  <v-avatar size="60">
                    <v-img
                      src="https://cdn1.iconfinder.com/data/icons/web-design-18/50/86-512.png"
                    ></v-img>
                  </v-avatar>
                </v-badge>
              </div>
            </template>
            <span>Amount of trade > 1000</span>
          </v-tooltip>
        </div>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <v-badge avatar bordered overlap>
                <template v-slot:badge>
                  <v-avatar>
                    2
                  </v-avatar>
                </template>

                <v-avatar size="60">
                  <v-img
                    src="https://previews.123rf.com/images/pikepicture/pikepicture1807/pikepicture180700221/104970298-best-worker-employee-vector-european-woman-award-of-the-year-gold-wreath-leader-business-cartoon-ill.jpg"
                  ></v-img>
                </v-avatar>
              </v-badge>
            </div>
          </template>
          <span>Best trader of the day</span>
        </v-tooltip>
      </div>
    </v-app-bar>

    <v-navigation-drawer permanent expand-on-hover app>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
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
import _ from 'lodash'
import AccountInfo from "bank/AccountInfo";
import DaysLeft from "./components/DaysLeft";
import TimeLeft from "./components/TimeLeft";
import {mapActions, mapMutations, mapState} from 'vuex'
import gameParams from './params'
export default {
  components: { TradeFooter, AccountInfo, DaysLeft, TimeLeft },
  data() {
    return {
      day: 1,
      items: [
        { title: "Trading", icon: "mdi-bank", to: { name: "Trade" } },
        { title: "Work", icon: "mdi-account-hard-hat", to: { name: "Work" } },
      ],
    };
  },
  created(){
    this.addRecord();
    this.updShares()
  },
  computed: {
    ...mapState(['stocks']),
    inTrade() {
      return this.$route.name == "Trade";
    },
  },
  watch: {
    $route(to, from) {
      if (to.name) {
          this.setTab(to.name)
      }
      
    },
  },
  methods: {
    ...mapActions(['setTab', 'requestPriceUpdate']),
    ...mapMutations(["INC_TICK"]),
    updShares: function() {
      this.intervalid1 = setInterval(() => {
        this.addRecord();
      }, gameParams.tickFrequency * 1000);
    },
    addRecord() {
      _.forEach(this.stocks, i=>this.requestPriceUpdate(i.innerName))
     
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
