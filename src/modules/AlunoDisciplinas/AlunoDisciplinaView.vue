<template>
  <div> 
    <v-breadcrumbs class="breadcrumbs-quiz" :items="items"></v-breadcrumbs>
    <v-row >
      <v-col v-for="disciplina in disciplinas" :key="disciplina.id" cols="12" sm="6">
        <v-card class="mx-auto">
          <v-card-title> {{disciplina.nome}}</v-card-title>
          <v-card-text class="text--primary">
            <div class="mb-4">
              <b><v-icon left>mdi-tag-multiple</v-icon> Código:</b> {{disciplina.sigla}}
            </div>
            <div>
              <b><v-icon left>mdi-teach</v-icon> Professor(a):</b> {{disciplina.professor}}
            </div>
          </v-card-text>

          <v-card-actions class="pb-4">
            <v-btn color="green darken-1" dark block @click="disciplineOpen(disciplina)">
              <v-icon left>mdi-login-variant</v-icon> ENTRAR
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col v-if="disciplinas.length == 0 && load" >
        <h2 style="width:100%;text-align:center">Você não possui disciplinas matriculadas</h2>
      </v-col>

      <v-col v-if="!load" >
        <div class="text-center">
          <v-progress-circular
            indeterminate
            :size="40"
            :width="5"
            color="primary"
          ></v-progress-circular>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex';
export default {
  data: () => ({
    disciplinas: [],
    load: false,
    items: [
      {
        text: "Disciplinas",
        disabled: true,
        href: "/aluno/disciplinas",
      },
    ],
  }),
  methods: {
    ...mapActions(['getDisciplinasMatriculadas']),
    ...mapMutations(['setCurrentDiscipline']),

    disciplineOpen(disciplina){
      this.setCurrentDiscipline(disciplina)
      this.$router.push(`/aluno/disciplinas/${disciplina.id}`)
    }
  },
  async created() {
    this.disciplinas = await this.getDisciplinasMatriculadas();
    this.load = true;
  },
};
</script>
<style>
.breadcrumbs-quiz {
  padding-left: 0 !important;
}
</style>