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
          title="Total earnings from work"
          :value="salary"
          img="https://www.flaticon.com/svg/static/icons/svg/3135/3135706.svg"
        ></info-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12" md="6">
        <v-card>
          <v-card-text>
            {{ taskText }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="12" md="6">
        <v-card>
          <v-card-title
            class="d-flex "
            :style="{ 'justify-content': 'center' }"
          >
            Based on the text, what is best definition of the word &nbsp;
            <span class="font-weight-bold font-italic ml-3">
              &nbsp; {{ q }}</span
            >?
          </v-card-title>
        </v-card>
        <v-card-text>
          <v-radio-group v-model="answer" column>
            <v-radio
              v-for="i in choices"
              :label="i"
              :value="i"
              :key="i"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-card-actions>
          <v-btn v-if="answer" @click="newTask">Submit</v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import _ from "lodash";
import { LoremIpsum } from "lorem-ipsum";
import infoCard from "work/InfoCard";
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});
export default {
  name: "Home",
  components: { infoCard },
  data() {
    const sentences = _.map(_.range(5), () => lorem.generateSentences(1));

    return {
      totalTasks: 0,
      correctTasks: 0,
      salary: 0,
      fee: 150,
      answer: null,
      q: lorem.generateWords(1),
      taskText: lorem.generateParagraphs(2),
      choices: sentences,
    };
  },
  methods: {
    newTask() {
      this.taskText = lorem.generateParagraphs(2);
      this.choices = _.map(_.range(5), () => lorem.generateSentences(1));
      this.q = lorem.generateWords(1);
      this.totalTasks++;
      this.correctTasks+=_.sample([0,1]);
      this.salary+=this.fee
    },
  },
};
</script>
