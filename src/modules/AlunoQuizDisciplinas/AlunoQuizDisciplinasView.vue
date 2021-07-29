<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto">
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
          </v-card-text>

          <v-card-actions class="pb-4">
            <v-btn
              color="blue darken-2"
              dark
              block
              @click="$router.push(`/aluno/disciplinas/${disciplina.id}`)"
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
    quizes: []
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
    this.quizes = response
  },
};
</script>