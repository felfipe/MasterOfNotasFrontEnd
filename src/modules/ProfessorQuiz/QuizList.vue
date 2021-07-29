<template>
    <div>
        <div class="discipline__add">
            <v-btn block color="#00C853" class="white--text" @click="navigate({path:`add-quiz`})">
                Adicionar Quiz
            </v-btn>
        </div>
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
import { mapActions, mapState } from 'vuex'
    export default {
    data () {
      return {
        headers: [
          { text: 'Questões por Aluno', value: 'quantidade' },
          { text: 'Nome', value: 'nome' },
          { text: 'Ativo', value: 'ativo' },
          { text: 'Nome Da Disciplina', value: 'disciplina' },
          { text: 'Actions', value: 'actions',align:'right' },
        ],
      }
    },
    computed: {
      ...mapState(['quizs']),
      quizData(){
        if (!this.quizs) return []
        return this.quizs.map(item => {
        return {
          id: item.id,
          nome: item.nome,
          ativo: item.ativo,
          disciplina: item.disciplina.nome,
          quantidade: item.quantidade,
          actions: ''
        }
      })
      }
    },
    async created () {
      await this.getQuizsRequest();
    },
    methods: {
      ...mapActions(['getQuizsRequest','removeDisciplineRequest', 'startQuizRequest', 'finishQuizRequest']),
      navigate(to){
        this.$router.push(to)  
      },
      async toggleQuiz(id,ativo){
         if (!ativo) await this.startQuizRequest({quizId:id})
         else await this.finishQuizRequest({quizId: id})
      }
    },
    }
</script>

<style lang="scss" scoped>
.discipline__add{
    width: 100%;
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;
}
.discipline__action{
  margin:0 10px;
}
</style>