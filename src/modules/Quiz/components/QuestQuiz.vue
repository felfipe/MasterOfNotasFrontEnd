<template>
  <div>
    <v-card class="card-question">
      <v-card-text>
        <div class="num-label-quest-quiz">Questão {{ num_question }}</div>
        <p>{{ question.enunciado }}</p>
        <v-radio-group v-model="radioGroup">
          <v-radio
            v-for="alternativa in question.alternativas"
            :key="alternativa.alternativaId"
            :label="`${alternativa.enunciado}`"
            :value="alternativa.alternativaId"
            @change="
              saveResponseQuiz(
                num_quiz,
                question.questaoId,
                alternativa.alternativaId
              )
            "
            color="blue darken-2"
            class="blue--text"
          >
          </v-radio>
        </v-radio-group>
      </v-card-text>
    </v-card>
    <div class="btns-nav-quiz">
      <v-btn :disabled="num_question == 1" color="primary" @click="question_prev()" x-large>
        <v-icon dark large> mdi-chevron-left </v-icon>
      </v-btn>
      <v-btn :disabled="num_question == q_questions" color="primary" @click="question_next()" x-large>
        <v-icon dark large> mdi-chevron-right </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      num_question: this.$route.params.questionid,
      num_quiz: this.$route.params.quizid,
      question: "",
      radioGroup: 0,
      q_questions: 0
    };
  },
  computed: {
    ...mapState(["questions", "addResponseQuiz"]),
  },
  watch: {
    "$route.params.questionid": function () {
      this.num_question = this.$route.params.questionid;
      this.question = this.questions[this.num_question - 1];

      this.radioGroup = this.ifChecked(this.num_quiz, this.question.questaoId);
    },
  },
  methods: {
    ifChecked(enqueteId, questaoId) {
      let responses = JSON.parse(localStorage.getItem("responseQuiz")) || [];
      let index = responses.findIndex(
        (response) =>
          response.enqueteId === enqueteId && response.questaoId === questaoId
      );
      if (index === -1) {
        return null;
      } else {
        return responses[index].respostaId;
      }
    },
    saveResponseQuiz(enqueteId, questaoId, respostaId) {
      let questaoNum = this.num_question;
      let responses = JSON.parse(localStorage.getItem("responseQuiz")) || [];
      let index = responses.findIndex(
        (response) =>
          response.enqueteId === enqueteId && response.questaoId === questaoId
      );
      if (index === -1) {
        responses.push({ enqueteId, questaoId, questaoNum , respostaId });
      } else {
        responses[index].respostaId = respostaId;
      }
      localStorage.setItem("responseQuiz", JSON.stringify(responses));
    },
    question_next(){
      if (this.num_question < this.questions.length) {
        this.$router.push(`/quiz/${this.num_quiz}/question/${parseInt(this.num_question)+1}`)
      }
    },
    question_prev(){
      if (this.num_question > 1) {
        this.$router.push(`/quiz/${this.num_quiz}/question/${parseInt(this.num_question)-1}`)
      }
    }
  },
  created() {
    let num_q = this.$route.params.questionid;
    if ( num_q === undefined || num_q === "" || num_q < 1 || num_q > this.questions.length ) {
      this.$router.push(`/quiz/${this.num_quiz}/question/1`);
    } else {
      this.question = this.questions[num_q - 1];
    }
    this.radioGroup = this.ifChecked(this.num_quiz, this.question.questaoId);
    this.q_questions = this.questions.length;
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
.btns-nav-quiz {
  width: 96%;
  margin: 30px 2%;
}
.btns-nav-quiz button {
  width: 48%;
  font-size: 20px;
}
.btns-nav-quiz button:nth-child(1) {
  background-color: #1976d2 !important;
  margin-right: 2%;
}
.btns-nav-quiz button:nth-child(2) {
  background-color: #0038a8 !important;
  margin-left: 2%;
}
.card-question {
  width: 96%;
  margin: 10px 2%;
}
</style>