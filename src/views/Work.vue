<template>
    <v-container>
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
                    <v-card-title>Based on the text, what is best definition of the word
                        <span class='font-weight-bold'>{{q}}</span>?
                    </v-card-title>
                </v-card>
                <v-card-text>
                    <v-radio-group v-model="answer" column>
                        <v-radio label="red" color="red" value="red"></v-radio>
                        <v-radio label="red darken-3" color="red darken-3" value="red darken-3"></v-radio>
                        <v-radio label="indigo" color="indigo" value="indigo"></v-radio>
                        <v-radio label="indigo darken-3" color="indigo darken-3" value="indigo darken-3"></v-radio>
                        <v-radio label="orange" color="orange" value="orange"></v-radio>
                        <v-radio label="orange darken-3" color="orange darken-3" value="orange darken-3"></v-radio>
                    </v-radio-group>
                </v-card-text>
                <v-card-actions>
                    <v-btn v-if='answer'>Submit</v-btn>
                    </v-card-actions>
                    </v-col>
    
        </v-row>
    
    </v-container>
</template>

<script>
import { LoremIpsum } from "lorem-ipsum";
export default {
    name: "Home",
    components: {},
    data() {
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
        
        return {
            answer: null,
            q: lorem.generateWords(1),
            taskText: lorem.generateParagraphs(2),
        };
    },
};
</script>
