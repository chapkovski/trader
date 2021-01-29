<template>
  <v-form ref="form" v-model="valid">
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            :color="actionColor"
            v-bind="attrs"
            v-on="on"
            outlined
            :disabled="!passInitialCheck"
            class="my-3"
          >
            <v-icon>{{ actionIcon }}</v-icon>
            {{ action }}
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
                    >Current price per share: {{ getCurrentPrice }}</v-sheet
                  >
                  <v-sheet
                    >You currently owns: {{ getAvailableQuantity }}</v-sheet
                  >
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>

              <v-list-item>
                <v-list-item-content>
                  <v-text-field
                    type="number"
                    v-model="q"
                    @change="validate"
                    @keyup.enter="processingTransaction"
                    :rules="[rules.amountValidated]"
                    :label="`How many shares you would like to ${action}?`"
                    autofocus
                  ></v-text-field>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="processingTransaction"
              :disabled="!valid"
            >
              {{ action }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-form>
</template>
<script>
import _ from "lodash";

import { mapGetters, mapActions } from "vuex";
export default {
  props: ["action", "stockName", "actionIcon", "name"],
  data() {
    return {
      dialog: false,
      q: null,
      valid: true,
      rules: {
        amountValidated: (v) => this.validateTransaction(v),
      },
    };
  },
  created() {},
  computed: {
    
    ...mapGetters(["getStockByName", "getCashBalance"]),
    passInitialCheck(){
        switch (this.action) {
          case 'buy':
            return this.getCashBalance()>0;
          case 'sell':
            return this.getAvailableQuantity>0;  
          default:
            return true 
        }
    },
    getAvailableQuantity() {
      const stock = this.getStockByName(this.name);
      return stock.quantity;
    },
    getCurrentPrice() {
      const stock = this.getStockByName(this.name);
      return stock.price;
    },

    capAction() {
      return _.capitalize(this.action);
    },
    actionColor() {
      return this.action === "buy" ? "green" : "red";
    },
    actionSign() {
      return this.action === "buy" ? 1 : -1;
    },
  },
  watch:{
    dialog(){
      this.q = null
    }
  },

  methods: {
    ...mapActions(["makeTransaction"]),
    validate() {
      this.$refs.form.validate();
    },
    processingTransaction() {
      if (this.valid) {
        this.makeTransaction({
          stock: this.name,
          quantity: this.actionSign * this.q,
        });

        this.dialog = false;
      }
    },
    validateTransaction(v) {
      switch (this.action) {
        case "buy":
          return (
            v * this.getCurrentPrice <= this.getCashBalance() ||
            "Not enough funds"
          );
        case "sell":
          return v <= this.getAvailableQuantity || "Not enough items to sell";
      }
    },
  },
};
</script>
