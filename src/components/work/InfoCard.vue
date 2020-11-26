<template>
  <v-sheet color="grey lighten-3" outlined>
    <v-list-item>
      <v-list-item-icon class="d-none d-md-block">
        <v-img :src="img" width="50px"></v-img>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ title }}</v-list-item-title>
        <v-list-item-subtitle>
          <transition
            mode="out-in"
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__fadeOutUp"
          >
            <v-chip class="ma-2" color="secondary" :key="value">
              {{ value }}
            </v-chip>
          </transition>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-sheet>
</template>

<script>
import "animate.css";
export default {
  props: ["title", "value", "img"],
  data: () => ({}),
  computed: {},
};
</script>

<style scoped></style>
