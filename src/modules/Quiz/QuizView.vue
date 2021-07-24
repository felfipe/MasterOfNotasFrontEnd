<template>
  <v-app id="inspire">
    <div v-if="!questions_load" class="load-page-quiz">
      <v-progress-circular
      :size="50"
      :width="7"
      color="primary"
      indeterminate
      ></v-progress-circular>
    </div>
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
header {
  top: 0 !important;
  left: 0 !important;
  z-index: 10 !important;
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
  padding-top: 64px !important;
}
main {
  padding: 2rem;
  background-color: #eee;
}
footer {
  background-color: #0038a8 !important;
  color: #fff !important;
  z-index: 99;
}
.breadcrumbs-quiz {
  padding-left: 2%;
}
</style>