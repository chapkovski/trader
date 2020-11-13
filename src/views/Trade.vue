<template>
  <v-container>
    <template>
      <div>
        <v-toolbar dark prominent>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Trading</v-toolbar-title>

          <v-spacer></v-spacer>
        </v-toolbar>
      </div>
    </template>

    <v-row flex>
      <v-col cols="6">
        <action-bar />
      </v-col>
      <v-col cols="6">
        <holdings />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <charts />
      </v-col>
      <v-col cols="6">
        <history />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { ActionBar, Holdings, Charts, History, Information } from "trade";

export default {
  name: "Trade",
  components: {
    ActionBar,
    Holdings,
    Charts,
    History,

    Information,
  },
};
</script>
