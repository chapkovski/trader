<template>
  <v-app>
    <v-app-bar absolute color="#6A76AB" dark app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Trading app</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on">
            <v-badge avatar bordered overlap>
              <template v-slot:badge>
                <v-avatar>
                  2
                </v-avatar>
              </template>

              <v-avatar size="40">
                <v-img
                  src="https://previews.123rf.com/images/pikepicture/pikepicture1807/pikepicture180700221/104970298-best-worker-employee-vector-european-woman-award-of-the-year-gold-wreath-leader-business-cartoon-ill.jpg"
                ></v-img>
              </v-avatar>
            </v-badge>
          </div>
        </template>
        <span>Best trader of the day</span>
      </v-tooltip>
    </v-app-bar>
    <v-navigation-drawer absolute permanent app>
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

    <v-footer app>
      <trade-footer v-if="inTrade" />
    </v-footer>
  </v-app>
</template>
<script>
import TradeFooter from "trade/TradeFooter";
export default {
  components: { TradeFooter },
  data() {
    return {
      items: [
        { title: "Trading", icon: "mdi-bank", to: { name: "Trade" } },
        { title: "Bank Account", icon: "mdi-cash-usd", to: { name: "Bank" } },
        { title: "Work", icon: "mdi-account-hard-hat", to: { name: "Work" } },
      ],
    };
  },
  computed: {
    inTrade() {
      return this.$route.name == "Trade";
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
