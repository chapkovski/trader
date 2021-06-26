<template>
  <div class="text-center">
    <v-dialog :value="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Attention
        </v-card-title>

        <v-card-text>
         New round has started!
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            :disabled="!priceDataLoaded"
            @click="closeDialog"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapState(["priceDataLoading", "priceDataLoaded"]),
    ...mapGetters(["dataInLoading"]),
    altDataLoading() {
      return this.priceDataLoading;
    },
  },

  watch: {
    altDataLoading(v, o) {
      this.dialog = true;
    },
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>