<template>
  <div>
    <div v-if="questions_load" class="load-page-quiz">
      <v-progress-circular
        :size="50"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
    <v-navigation-drawer
      v-model="controle_aux"
      color="grey lighten-2"
      width="300"
      app
    >
      <v-list-item>
        <v-list-item-content class="title-number-content">
          <v-list-item-title class="text-h6"> Quiz </v-list-item-title>
          <v-list-item-subtitle> {{ info_quiz.nome }} </v-list-item-subtitle>
          <div class="question-quiz">
            <v-btn
              color="white"
              tile
              v-for="n in num_question"
              :class="{ 'btn-num-active': ifResponse(n) }"
              @click="question_open(n)"
              v-bind:key="n"
              >{{ n }}</v-btn
            >
            
          </div>

          <v-dialog v-model="success" max-width="290" persistent>
            <v-card>
              <v-card-title class="text-h5"> Sucesso! </v-card-title>

              <v-card-text> Quiz enviado com sucesso! </v-card-text>

              <v-card-actions class="btns-action-alert">
                <v-spacer></v-spacer>

                <v-btn
                  color="green accent-4"
                  class="btn-ok"
                  block
                  @click="voltar_disciplina()"
                >
                  <v-icon left color="white">mdi-arrow-right</v-icon>Ok
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="erro" max-width="290">
            <v-card>
              <v-card-title class="text-h5"> Erro! </v-card-title>

              <v-card-text>
                {{ text_erro }}
              </v-card-text>

              <v-card-actions class="btns-action-alert">
                <v-spacer></v-spacer>

                <v-btn color="red darken-1" text @click="erro = false">
                  Ok
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="green accent-4"
                x-large
                class="btn-finalizar"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon left color="white"> mdi-check </v-icon>
                Finalizar
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5"> Finalizar </v-card-title>
              <v-card-text
                >Tem certeza que deseja finalizar este quiz?</v-card-text
              >
              <v-card-actions class="btns-action-alert">
                <v-spacer></v-spacer>
                <v-btn
                  color="green accent-4"
                  class="btn-ok"
                  @click="finalizaQuiz()"
                >
                  Confirmar
                </v-btn>
                <v-btn color="green darken-1" text @click="dialog = false">
                  Cancelar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    drawer: null,
    dialog: false,
    erro: false,
    success: false,
    text_erro: "",
    questions_load: false,
    controle_aux: false
  }),
  props: {
    controle: {
      required: true,
      default: false,
    },
    num_question: {
      required: true,
      default: 0,
    },
    info_quiz: {
      require: true,
      default: null,
    },
  },
  created(){
    this.controle_aux = this.controle;
  },
  watch: {
    controle_aux(newValue, oldValue) {
      this.$emit("toggleMenu",newValue)
    },
    controle(){
      this.controle_aux = this.controle
    }
  },
  methods: {
    ...mapActions(["addResponseQuiz"]),
    question_open(n) {
      if (n != this.$route.params.questionid) {
        const id_quiz = this.$route.params.quizid;
        this.$router.push(`/quiz/${id_quiz}/question/${n}`);
      }
    },
    voltar_disciplina() {
      this.$router.push({name:'quiz-disciplinas-aluno',params:{disciplinaId: this.info_quiz.disciplinaId}});
    },
    ifResponse(questaoNum) {
      const enqueteId = this.$route.params.quizid;
      let responses = JSON.parse(localStorage.getItem("responseQuiz")) || [];
      let index = responses.findIndex(
        (response) =>
          response.enqueteId === enqueteId &&
          parseInt(response.questaoNum) === questaoNum
      );
      if (index === -1) {
        return false;
      } else {
        return true;
      }
    },
    async finalizaQuiz() {
      this.questions_load = true;
      const enqueteId = parseInt(this.$route.params.quizid);
      let responses = JSON.parse(localStorage.getItem("responseQuiz")) || [];
      let responseQuiz = responses
        .filter((response) => response.enqueteId == enqueteId)
        .map((response) => ({
          questaoId: response.questaoId,
          respostaId: response.respostaId,
        }));
      if (responseQuiz.length !== this.num_question) {
        this.dialog = false;
        this.text_erro =
          "Não foram respondidas todas as perguntas do quiz. Verifique e tente novamente!";
        this.erro = true;
      } else {
        this.dialog = false;
        const status = await this.addResponseQuiz({ enqueteId, responseQuiz });
        this.questions_load = false;
        if (status === 200) {
          this.success = true;
        } else {
          this.text_erro =
            "Erro ao enviar o questionário. Verifique e tente novamente!";
          this.erro = true;
        }
      }
    },
  },
};
</script>
<style scoped>
.btn-finalizar {
  color: #fff;
  font-size: 0.9rem;
}
.question-quiz {
  margin: 10px 0;
  width: 102%;
}
.question-quiz button {
  width: 15%;
  min-width: 15% !important;
  margin: 5px 1%;
}
.question-quiz button:nth-child(6n + 0) {
  margin-right: 0;
}
.question-quiz button:nth-child(6n + 1) {
  margin-left: 0;
}
.title-number-content {
  padding-top: 30px;
}
.btn-ok {
  color: #fff;
}
.btns-action-alert {
  padding-bottom: 20px !important;
}
.btn-num-active {
  color: #fff;
  background-color: #1976d2 !important;
}
nav {
  padding-top: 64px !important;
}
.load-page-quiz{
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
  background-color: rgb(255 255 255 / 80%)
}
.load-page-quiz > div{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -25px;
}
</style>