<template>
  <v-form ref="form" v-model="valid" @submit.prevent="submit">
    <v-container>
      <v-row>
        <v-col md="4" sm="12">
          <info-card
            title="Total tasks"
            :value="tasksSubmitted"
            img="https://image.freepik.com/free-icon/todo-list_318-10185.jpg"
          ></info-card>
        </v-col>
        <v-col md="4" sm="12">
          <info-card
            title="Correctly done"
            :value="correctTasksSubmitted"
            img="https://broughtonprimary.files.wordpress.com/2016/06/well-done.jpg"
          ></info-card>
        </v-col>
        <v-col md="4" sm="12">
          <info-card
            title="For each correct task you earn:"
            :value="`E$${wage}`"
            img="https://www.flaticon.com/svg/static/icons/svg/3135/3135706.svg"
          ></info-card>
        </v-col>
      </v-row>
      <v-row class="m-0">
        <v-col cols="12">
          <v-alert
            class="lead text-center m-0 p-0"
            outlined
            color="primary"
            :style="{ padding: '0px', margin: '0px' }"
          >
            In this task you should translate a sequence of numbers into a
            series of letters from the English alphabet. Below you can see (1) a
            sequence of NUMBERS (2) a KEY indicating which LETTER represents
            each NUMBER (3) a text box in which the letter solution should be
            typed. In each task a new sequence of numbers will appear along with
            a new key of number to letter relationships.<br />
            <div v-if="false">
              JUST FOR OUR EYES ONLY: CORRECT ANSWER:
              {{ currentTask.correctAnswer }}
            </div>
          </v-alert>
        </v-col>
      </v-row>
      <v-row class="m-0 d-flex align-stretch">
        <v-col sm="12" md="6" class="d-flex align-items-center justify-center">
          <v-card>
            <v-card-text>
              <v-simple-table>
                <tr>
                  <th>Letter:</th>
                  <td
                    width="30px"
                    :class="`bordered`"
                    v-for="l in currentTask.letters"
                    :key="l"
                  >
                    {{ l }}
                  </td>
                </tr>
                <tr>
                  <th>Key:</th>
                  <td
                    :class="`bordered`"
                    v-for="n in currentTask.numbers"
                    :key="n"
                  >
                    {{ n }}
                  </td>
                </tr>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col sm="12" md="6" height="100%">
          <v-card height="100%">
            <v-card-title>Task to solve:</v-card-title>
            <v-card-text>
              <v-simple-table>
                <tr>
                  <td
                    width="30px"
                    :class="`bordered`"
                    v-for="l in currentTask.numsToSolve"
                    :key="l"
                  >
                    {{ l }}
                  </td>
                </tr>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="m-0">
        <v-col cols="12" v-cloak>
          Submit your answer here and press "Enter"
          <v-text-field
            v-model="answer"
            single-line
            type="text"
            @keyup.enter="submit"
            autofocus
            @change="validate"
            :rules="[rules.required]"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import _ from "lodash";
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
import infoCard from "work/InfoCard";
import Matrix from "work/Matrix";
import gameParams from "../params";

import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: { infoCard, Matrix },
  data() {
    return {
      valid: true,
      answer: "",
      rules: { required: (value) => !!value || "Required." },
    };
  },
  computed: {
    ...mapState([
      "currentTask",
      "tasksSubmitted",
      "correctTasksSubmitted",
      "wage",
    ]),
  },

  methods: {
    ...mapActions(["processTaskAnswer"]),

    validate() {
      this.$refs.form.validate();
    },
    submit() {
      if (this.valid) {
        this.processTaskAnswer(this.answer);
        this.answer = null;
        this.$refs.form.reset();
      }
    },
  },
};
</script>
<style scoped >
.bordered {
  border: thick solid rgba(102, 102, 153, 0.5);
  font-size: 2rem;
  font-family: "Roboto Mono";
}
</style>