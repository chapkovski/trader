<template>
  <v-app>
     

    <v-app-bar app>
      <v-app-bar
        absolute
        color="#6A76AB"
        dark
         
      >
 

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Trading app</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab to="/">
              Home 
            </v-tab>
            <v-tab  to="/about">
              About 
            </v-tab>
            <v-tab>Tab 3</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
    </v-app-bar>
     <v-main>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;">
            <router-view></router-view>
      </v-container>
    </v-sheet>
    </v-main>
    

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

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
