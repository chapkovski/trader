<template>
  <v-container>
    <v-row>
      <v-col md="4" sm="12">
        <info-card
          title="Total tasks"
          :value="totalTasks"
          img="https://image.freepik.com/free-icon/todo-list_318-10185.jpg"
        ></info-card>
      </v-col>
      <v-col md="4" sm="12">
        <info-card
          title="Correctly done"
          :value="correctTasks"
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
          provide a sum of these two numbers in the field below<br>JUST FOR OUR EYES ONLY: CORRECT ANSWER: {{correctAnswer}} 
        </v-alert>
      </v-col>
    </v-row>
    <v-row class="m-0">
      <v-col sm="12" md="6">
        <v-card>
          <v-card-text>
            <matrix :data="matrix1"></matrix>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="12" md="6">
        <v-card>
          <v-card-text>
            <matrix :data="matrix2"></matrix>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="m-0">
      <v-col cols="12">
        Submit your answer here and press "Enter"
        <v-text-field
          v-model="answer"
          hide-details
          single-line
          type="number"
          v-on:keyup.enter="submit"
          autofocus
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import _ from "lodash";

import infoCard from "work/InfoCard";
import Matrix from "work/Matrix";
import gameParams from '../params'
export default {
  name: "Home",
  components: { infoCard, Matrix },
  data() {
    return {
      totalTasks: 0,
      fee:gameParams.taskFee, 
      matrix1: _.map(_.range(100), () => {
        return _.random(50, 999);
      }),
      matrix2: _.map(_.range(100), () => {
        return _.random(50, 999);
      }),

      correctTasks: 0,
      salary: 0,
 
      answer: null,
    };
  },
  computed:{
    correctAnswer(){return _.max(this.matrix1) + _.max(this.matrix2);}
  },
  methods: {
    submit() {
      
      if (this.answer == this.correctAnswer) {
        this.correctTasks++;
        this.salary += this.fee;
      }
      this.answer=null;
      (this.matrix1 = _.map(_.range(100), () => {
        return _.random(50, 999);
      })),
        (this.matrix2 = _.map(_.range(100), () => {
          return _.random(50, 999);
        })),
        this.totalTasks++;
    },
  },
};
</script>
