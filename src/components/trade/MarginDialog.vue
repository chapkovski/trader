<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Margin account
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Do you want to borrow some money?
        </v-card-title>

        <v-card-text>
          <v-list>
            <v-list-item  >
              <v-list-item-icon>
                <v-icon ></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title  >
                  
                  </v-list-item-title>
                  <v-sheet >Current rate: {{(rate*100).toFixed(2)}}%</v-sheet>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item  >
              <v-list-item-icon>
                <v-icon  ></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title ></v-list-item-title>
                <v-sheet>Total borrowed so far: {{currentDebt}}</v-sheet>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item  >
              
              <v-list-item-content>
                <v-text-field  type="number" label="Type amount to borrow"  ></v-text-field>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            Borrow
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props:['rate', 'currentDebt'],
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
