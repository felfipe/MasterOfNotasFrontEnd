<template>
  <div>
    <v-row>
      <v-col v-for="disciplina in disciplinas" :key="disciplina.id" cols="12" sm="6">
        <v-card class="mx-auto">
          <v-card-title> {{disciplina.nome}}</v-card-title>
          <v-card-text class="text--primary">
            <div class="mb-4">
              <b><v-icon left>mdi-tag-multiple</v-icon> Código:</b> {{disciplina.id}}
            </div>
            <div>
              <b><v-icon left>mdi-teach</v-icon> Professor(a):</b> {{disciplina.professor}}
            </div>
          </v-card-text>

          <v-card-actions class="pb-4">
            <v-btn color="blue darken-2" dark block @click="$router.push(`/aluno/disciplinas/${disciplina.id}`);">
              <v-icon left>mdi-login-variant</v-icon> ENTRAR
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data: () => ({
    disciplinas: null,
  }),
  methods: {
    ...mapActions(['getDisciplinasMatriculadas'])
  },
  async created() {
    this.disciplinas = await this.getDisciplinasMatriculadas();
  },
};
</script>