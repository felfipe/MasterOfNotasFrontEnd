<template>
    <div>
        <div class="discipline__add">
            <v-btn block color="#00C853" class="white--text" @click="navigate({path:`/question-quiz-professor/${$route.params.id}`})">
                Adicionar Questão
            </v-btn>
        </div>
        <div>
            <v-data-table
                :headers="headers"
                :items="questions || []"
                class="elevation-1"
            >
                <template v-slot:item.actions="{ item }">
                    <v-btn
                      class="discipline__action"
                      color="error"
                      dark
                      @click="deleteQuestion(item.questaoId)"
                    >
                        <v-icon dark>
                            mdi-delete
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
          { text: 'Enunciado', value: 'enunciado' },
          { text: 'Actions', value: 'actions',align:'right' },
        ],
        questions: []
      }
    },
    computed: {
      ...mapState(['quizs']),
    },
    async created () {
      this.questions = await this.getQuizQuestionsRequest(this.$route.params.id);
    },
    methods: {
      ...mapActions(['getQuizQuestionsRequest','removeQuizQuestionRequest']),
      navigate(to){
        this.$router.push(to)  
      },
      deleteQuestion(questionId){
        this.removeQuizQuestionRequest({quizId: this.$route.params.id, questionId})
        this.questions = this.questions.filter(q => q.questaoId != questionId)
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