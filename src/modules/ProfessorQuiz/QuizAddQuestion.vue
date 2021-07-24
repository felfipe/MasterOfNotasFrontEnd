<template>
  <div>
    <div class="discipline__add">
      <p>Adicionar Questão</p>
      <v-text-field label="Enunciado da questão" v-model="question.title" type="text">
      </v-text-field>
    </div>
    <div class="discipline__add">
      <v-radio-group v-model="question.correctIndex">
      <div style="display:flex;" v-for="i in 5" :key="i">
        <v-radio
          hide-details
          :value="i-1"
        ></v-radio>
        <v-text-field label="Enunciado" v-model="question.alternatives[i-1].enunciado" type="text">
        </v-text-field>
      </div>
    </v-radio-group>
    </div>
    <div class="discipline__add">
        <v-btn block color="#00C853" class="white--text" @click="addQuestion">
            Adicionar Questão
        </v-btn>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        question: {
          correctIndex: 0,
          title: '',
          alternatives:[{
            enunciado:'',
            correta: true
          },
          {
            enunciado:'',
            correta: false
          },
          {
            enunciado:'',
            correta: false
          },
          {
            enunciado:'',
            correta: false
          },
          {
            enunciado:'',
            correta: false
          }
          ]
        }
      }
    },
    methods: {
      ...mapActions(['addQuestionToQuizRequest']),
      async addQuestion() {
        this.question.alternatives[0].correta = false
        this.question.alternatives[this.question.correctIndex].correta = true
        await this.addQuestionToQuizRequest({id: this.$route.params.id,...this.question})
        this.$router.push({name: 'questions-quiz-professor',params: {id: this.$route.params.id}})
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
</style>