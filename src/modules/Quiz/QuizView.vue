<template>
  <v-app id="inspire">
    <MenuQuiz :controle="drawer" :num_question='10'></MenuQuiz>
    <v-app-bar
      color="blue darken-2" 
      absolute
    >
      <v-app-bar-nav-icon color='white' @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img
        :src="require('@/assets/logo-w.png')"
        max-height="30"
        max-width="200"
      ></v-img>
    </v-app-bar>

    <v-main >
      <v-container>
        <v-breadcrumbs class="breadcrumbs-quiz" :items="items"></v-breadcrumbs>
        <!-- <QuestQuiz></QuestQuiz> -->
        <router-view></router-view>
        <div class="btns-nav-quiz">
          <v-btn
            depressed
            color="primary"
            x-large
            disabled
          >
            <v-icon dark large>
              mdi-chevron-left
            </v-icon>  
          </v-btn>
          <v-btn
            depressed
            color="primary"
            x-large
          >
            <v-icon dark large>
              mdi-chevron-right
            </v-icon>  
          </v-btn>
        </div>
        
      </v-container>
    </v-main>

    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>MasterOfNotas</strong>
      </v-col>
    </v-footer>

  </v-app>
</template>

<script>
import MenuQuiz from './components/MenuQuiz.vue'
// import QuestQuiz from './components/QuestQuiz.vue'
  export default {
    components: {
        MenuQuiz
    },
    data: () => ({ 
      drawer: true,
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/',
        },
        {
          text: 'Disciplina X',
          disabled: false,
          href: 'disciplina',
        },
        {
          text: 'Quiz funções',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    }),
  }
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
footer{
  background-color: #0038A8 !important;
  color: #fff !important;
}
.breadcrumbs-quiz{
  padding-left: 2%;
}
.card-question{
  width: 96%;
  margin: 10px 2%;
}
.btns-nav-quiz{
  width: 96%;
  margin: 30px 2%;
}
.btns-nav-quiz button{
  width: 48%;
  font-size: 20px;
}
.btns-nav-quiz button:nth-child(1){
  background-color: #1976D2 !important;
  margin-right: 2%;
}
.btns-nav-quiz button:nth-child(2){
  background-color: #0038A8 !important;
  margin-left: 2%;
}
</style>