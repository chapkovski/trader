<template>
  <v-container>
    <template>
      <div>
        <v-toolbar
          dark
          prominent
          src="https://on-woman.com/wp-content/uploads/2377dd4dc8fd6c8a5988ab5e218af88a-jpg.jpeg"
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Vuetify</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-export</v-icon>
          </v-btn>
        </v-toolbar>
      </div>
    </template>

    <v-row flex>
      <v-col cols="4">
        <action-bar />
      </v-col>
      <v-col cols="4">
        <holdings />
      </v-col>

      <v-col cols="4">
        <charts />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <history />
      </v-col>
      <v-col>
        <margin />
      </v-col>
      <v-col>
        <information />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import {
  ActionBar,
  Holdings,
  Charts,
  History,
  Margin,
  Information,
} from "trade";

export default {
  name: "Trade",
  components: {
    ActionBar,
    Holdings,
    Charts,
    History,
    Margin,
    Information,
  },
};
</script>
