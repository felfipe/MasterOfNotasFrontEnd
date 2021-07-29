<template>
  <div>
    <v-breadcrumbs class="breadcrumbs-quiz" :items="items"></v-breadcrumbs>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto card-dis-quiz">
          <v-card-title> {{discipline.nome}}</v-card-title>
          <v-card-text class="text--primary">
            <div class="mb-4">
              <b><v-icon left>mdi-tag-multiple</v-icon> Código:</b>
              {{discipline.id}}
            </div>
            <div>
              <b><v-icon left>mdi-teach</v-icon> Professor(a):</b>
              {{discipline.professor}}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        v-for="quiz in quizes"
        :key="quiz.id"
        cols="12"
        sm="12"
      >
        <v-card class="mx-auto">
          <v-card-title> {{ quiz.nome }}</v-card-title>
          <v-card-text class="text--primary">
            <div class="mb-4">
              <b><v-icon left>mdi-tag-multiple</v-icon> Código:</b>
              {{ quiz.enqueteId }}
            </div>
            <div class="mb-4" v-if="quiz.respondido">
              <b><v-icon left>mdi-graph</v-icon> Nota:</b>
              {{ quiz.nota }}
            </div>
          </v-card-text>

          <v-card-actions class="pb-4">
            <v-btn
              color="green darken-1 white--text"
              block
              :disabled="quiz.respondido"
              @click="$router.push(`/quiz/${quiz.enqueteId}/question/1`)"
            >
              <v-icon left>mdi-login-variant</v-icon> ENTRAR
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    disciplinas: null,
    discipline: {},
    quizes: [],
    items: [
      {
        text: "Disciplinas",
        disabled: false,
        href: "/aluno/disciplinas",
      },
    ],
  }),
  computed: {
    ...mapState(['currentDiscipline'])
  },
  methods: {
    ...mapActions(["getDisciplinasMatriculadas","getMyQuizesRequest"]),
  },
  async created() {
    this.disciplinas = await this.getDisciplinasMatriculadas();
    this.discipline = this.disciplinas.find(d => d.id == this.$route.params.disciplinaId)
    let response = await this.getMyQuizesRequest()
    response = response.filter(res => +res.disciplina.disciplinaId == +this.discipline.id)
    this.quizes = response;
    this.items.push({
        text: this.discipline.nome,
        disabled: true,
      });
  },
};
</script>
<style>
.breadcrumbs-quiz {
  padding-left: 0 !important;
}
.card-dis-quiz{
  border-top: 4px solid #0038a8 !important;
}
</style>