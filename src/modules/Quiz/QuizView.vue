<template>
  <v-app id="inspire">
    <MenuQuiz v-if="questions_load" :controle="drawer" :num_question=quiz.quantidade :info_quiz=quiz></MenuQuiz>
    <v-app-bar color="blue darken-2" absolute>
      <v-app-bar-nav-icon
        color="white"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-img
        :src="require('@/assets/logo-w.png')"
        max-height="30"
        max-width="200"
      ></v-img>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-breadcrumbs v-if="questions_load" class="breadcrumbs-quiz" :items="items"></v-breadcrumbs>
        <router-view v-if="questions_load"></router-view>
        <div class="btns-nav-quiz">
          <v-btn v-bind:class="{ depressed: isFirst }" color="primary" x-large disabled>
              <v-icon dark large> mdi-chevron-left </v-icon>
          </v-btn>
          <v-btn color="primary" x-large>
              <v-icon dark large> mdi-chevron-right </v-icon>
          </v-btn>
      </div>
      </v-container>
    </v-main>

    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>MasterOfNotas</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import MenuQuiz from "./components/MenuQuiz.vue";
import { mapActions } from 'vuex';
export default {
  components: {
    MenuQuiz,
  },
  data: () => ({
    questions_load: false,
    quiz: null,
    drawer: true,
    items: null,
    questionid: 0,
    isFirst: true
  }),
  async created(){
    this.quiz = await this.getQuizbyId(this.$route.params.quizid);
    this.items = [
      {
        text: "Dashboard",
        disabled: false,
        href: "/",
      },
      {
        text: this.quiz.disciplina.nome,
        disabled: false,
        href: `/disciplina/${this.quiz.disciplina.id}`,
      },
      {
        text: this.quiz.nome,
        disabled: true,
        href: "",
      },
    ],
    await this.getQuestionsRequest(this.$route.params.quizid);
    this.questions_load = true;
  },
  methods: {
    ...mapActions(['getQuestionsRequest', 'getQuizbyId'])
  },
  watch: {
    "$route.params.questionid": function () {
      if(this.$route.params.questionid == 1){
        this.isFirst = true;
      }
      else{
        this.isFirst = false;
      }
      // this.questionid = this.$route.params.questionid
    },
  },
};
</script>
<style scoped>
header {
  top: 0 !important;
  left: 0 !important;
  z-index: 99999 !important;
}
nav,
main {
  margin-top: 4rem !important;
}
nav {
  max-height: calc(100% - 7rem) !important;
  border-color: transparent !important;
  border: 0 !important;
  position: absolute !important;
}
main {
  padding: 2rem;
  background-color: #eee;
}
footer {
  background-color: #0038a8 !important;
  color: #fff !important;
}
.breadcrumbs-quiz {
  padding-left: 2%;
}
.card-question {
  width: 96%;
  margin: 10px 2%;
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
</style>