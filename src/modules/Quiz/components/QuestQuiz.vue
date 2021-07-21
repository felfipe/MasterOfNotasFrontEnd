<template>
    <v-card class="card-question">
        <v-card-text>
            <div class="num-label-quest-quiz">Questão {{ num_question }}</div>
            <p>{{ question.enunciado }}</p>
            <v-radio-group v-model="radioGroup">
                <v-radio
                    v-for="alternativa in question.alternativas"
                    :key="alternativa.alternativaId"
                    :label="`${alternativa.enunciado}`"
                    color="blue darken-2"
                    class="blue--text"
                    >
                </v-radio>
            </v-radio-group>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      num_question: this.$route.params.questionid,
      num_quiz: this.$route.params.quizid,
      question: "",
    };
  },
  computed: {
    ...mapState(["questions"]),
  },
  watch: {
    "$route.params.questionid": function () {
      this.num_question = this.$route.params.questionid;
      this.question = this.questions[this.num_question - 1];
    },
  },
  methods: {},
  created() {
    this.question = this.questions[1];
  },
};
</script>

<style scoped>
.num-label-quest-quiz {
  background-color: #1976d2;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
  width: auto;
  display: table;
  border-radius: 2px;
  margin-bottom: 16px;
  margin-top: 10px;
}
.blue--text {
  color: #1976d2;
}
</style>