<template>
  <v-form ref="form" v-model="valid"  @submit.prevent="submit">
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
            title="Fee per task"
            :value="fee"
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
            First: find in each section below a maximum number; <br />Second:
            provide a sum of these two numbers in the field below<br />JUST FOR
            OUR EYES ONLY: CORRECT ANSWER: {{ correctAnswer }}
          </v-alert>
        </v-col>
      </v-row>
      <v-row class="m-0">
        <v-col sm="12" md="6">
          <v-card>
            <v-card-text>
              <matrix :data="currentTask.matrix1"></matrix>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col sm="12" md="6">
          <v-card>
            <v-card-text>
              <matrix :data="currentTask.matrix2"></matrix>
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
            type="number"
            
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

import infoCard from "work/InfoCard";
import Matrix from "work/Matrix";
import gameParams from "../params";
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: { infoCard, Matrix },
  data() {
    return {
      fee: gameParams.taskFee,
      valid: true,
      answer: '',
      rules: {required: value => !!value || 'Required.',}
    };
  },
  computed: {
    ...mapState(["currentTask", "tasksSubmitted", "correctTasksSubmitted"]),
    correctAnswer() {
      return _.max(this.currentTask.matrix1) + _.max(this.currentTask.matrix2);
    },
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
        this.$refs.form.reset()
      }
    },
  },
};
</script>
