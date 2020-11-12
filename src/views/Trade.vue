<template>
  <v-container>
    <v-row>
      <v-col>
        <action-bar />
      </v-col>
      <v-col>
        <holdings />
      </v-col>
      <v-col> </v-col>
      <v-col>
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
