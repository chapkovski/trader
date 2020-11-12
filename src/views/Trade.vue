<template>
  <v-container>
    <v-row flex>
      <v-col cols=4>
        <action-bar />
      </v-col>
      <v-col cols=4>
        <holdings />
      </v-col>

      <v-col cols=4>
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
