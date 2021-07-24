<template>
  <v-navigation-drawer
    v-model="controle"
    color="grey lighten-2"
    width="300"
    app
  >
    <v-list-item>
      <v-list-item-content class="title-number-content">
        <v-list-item-title class="text-h6"> Quiz </v-list-item-title>
        <v-list-item-subtitle> {{info_quiz.nome}} </v-list-item-subtitle>
        <div class="question-quiz">
          <v-btn color="white" tile v-for="n in num_question" :class="{ 'btn-num-active' : ifResponse(n)}" @click="question_open(n)" v-bind:key="n">{{ n }}</v-btn>
        </div> 

        <v-dialog
          v-model="dialog"
          persistent
          max-width="290"
        >  
          <template v-slot:activator="{ on, attrs }">
          <v-btn color="green accent-4" x-large class="btn-finalizar" v-bind="attrs"
            v-on="on">
            <v-icon left color="white"> mdi-check </v-icon>
              Finalizar
          </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5">
              Finalizar
            </v-card-title>
            <v-card-text>Tem certeza que deseja finalizar este quiz?</v-card-text>
            <v-card-actions class="btns-action-alert">
              <v-spacer></v-spacer>
              <v-btn
                color="green accent-4"
                class="btn-ok"
                @click="dialog = false"
              >
                Confirmar
              </v-btn>
              <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
              >
                Cancelar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-list-item-content>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({ 
    drawer: null,
    dialog: false,
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
    info_quiz:{
      require: true,
      default: null
    }
  },
  methods:{
    question_open(n){
      if(n != this.$route.params.questionid){
        const id_quiz = this.$route.params.quizid
        this.$router.push(`/quiz/${id_quiz}/question/${n}`)
      }
    },
    ifResponse(questaoNum) {
      const enqueteId = this.$route.params.quizid;
      let responses = JSON.parse(localStorage.getItem("responseQuiz")) || [];
      let index = responses.findIndex((response) =>response.enqueteId === enqueteId && parseInt(response.questaoNum) === questaoNum);
      if (index === -1) {
        return false;
      } else {
        return true;
      }
    },
  }
};
</script>
<style scoped>
.btn-finalizar {
  color: #fff;
  font-size: 0.9rem;
}
.question-quiz{
  margin: 10px 0;
  width: 102%;
}
.question-quiz button{
  width: 15%;
  min-width: 15% !important;
  margin: 5px 1%;
}
.question-quiz button:nth-child(6n+0){
  margin-right: 0;
}
.question-quiz button:nth-child(6n+1){
  margin-left: 0;
}
.title-number-content{
  padding-top: 30px;
}
.btn-ok{
  color: #fff;
}
.btns-action-alert{
  padding-bottom: 20px !important;
}
.btn-num-active{
  color: #fff;
  background-color: #1976D2 !important;
}
</style>