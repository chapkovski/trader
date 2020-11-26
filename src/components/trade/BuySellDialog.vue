<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          :color="actionColor"
          v-bind="attrs"
          v-on="on"
          outlined
          class="my-3"
        >
          <v-icon>{{ actionIcon }}</v-icon>
          {{action}}
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" :class="actionColor">
          {{ capAction }} {{ stockName }}
        </v-card-title>

        <v-card-text>
          <v-list>
            <v-list-item>
              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title> </v-list-item-title>
                <v-sheet
                  >Current price per share: {{ price  }}</v-sheet
                >
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>

            <v-list-item>
              <v-list-item-content>
                <v-text-field
                  type="number"
                  :label="`How many shares you would like to ${action}?`"
                ></v-text-field>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            {{ action }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import _ from "lodash";
export default {
  props: ["action", "stockName", "price", "actionIcon"],
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    capAction(){return  _.capitalize(this.action) },
    actionColor() {
      return this.action === "buy" ? "green" : "red";
    },
  },
};
</script>
