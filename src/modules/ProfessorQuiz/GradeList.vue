<template>
    <div>
        <!-- <div class="discipline__add">
            <v-btn block color="#00C853" class="white--text" @click="navigate({path:`add-quiz`})">
                Adicionar Quiz
            </v-btn>
        </div> -->
        <div>
            <v-data-table
                :headers="headers"
                :items="quizData || []"
                class="elevation-1"
            >
                <template v-slot:item.actions="{ item }">
                  <v-btn
                        class="discipline__action"
                        :color="!item.ativo? 'success': 'error'"
                        @click="toggleQuiz(item.id, item.ativo)"
                    >
                      {{!item.ativo? 'Iniciar Enquete': 'Encerrar Quiz'}}
                    </v-btn>
                    <v-btn
                        class="discipline__action"
                        color="primary"
                        @click="navigate({path:`/questions-quiz-professor/${item.id}`})"
                    >
                        <v-icon dark>
                            mdi-pen
                        </v-icon>
                    </v-btn>
                    <v-btn
                      class="discipline__action"
                      color="warning"
                      dark
                      @click="navigate({path:`/question-quiz-professor/${item.id}`})"
                    >
                        <v-icon dark>
                            mdi-plus
                        </v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </div>
    </div>
</template>

<script>
// import { mapActions, mapState } from 'vuex'
export default {
    data () {
      return {
        headers: [
          { text: 'Aluno', value: 'nome' },
          { text: 'Nota', value: 'nome' },
        ],
      }
    },
    computed: {
    //   ...mapState(['quizs']),
    //   quizData(){
    //     if (!this.quizs) return []
    //     return this.quizs.map(item => {
    //     return {
    //       id: item.id,
    //       nome: item.nome,
    //       ativo: item.ativo,
    //       disciplina: item.disciplina.nome,
    //       quantidade: item.quantidade,
    //       actions: ''
    //     }
    //   })
    //   }
    },
    async created () {
      await this.getQuizsRequest();
    },
    methods: {
    //   ...mapActions(['getNoteRequest']),
    //   navigate(to){
    //     this.$router.push(to)  
    //   },
    },
}
</script>