<template>
  <div>
    <div>
      <p>Adicionar Questão</p>
      <v-text-field label="Quantidade de questões por aluno" v-model="question.title" type="text">
      </v-text-field>
    </div>
    <div>
      <v-radio-group v-model="question.correctIndex">
      <div style="display:flex;">
        <v-radio
          hide-details
          :value="0"
        ></v-radio>
        <v-text-field label="Quantidade de questões por aluno" v-model="question.alternatives[0].title" type="text">
        </v-text-field>
      </div>
      <div style="display:flex;">
        <v-radio
          hide-details
          :value="1"
        ></v-radio>
        <v-text-field label="Quantidade de questões por aluno" v-model="question.alternatives[1].title" type="text">
        </v-text-field>
      </div>
      <div style="display:flex;">
        <v-radio
          hide-details
          :value="2"
        ></v-radio>
        <v-text-field label="Quantidade de questões por aluno" v-model="question.alternatives[2].title" type="text">
        </v-text-field>
      </div>
      <div style="display:flex;">
        <v-radio
          hide-details
          :value="3"
        ></v-radio>
        <v-text-field label="Quantidade de questões por aluno" v-model="question.alternatives[3].title" type="text">
        </v-text-field>
      </div>
      <div style="display:flex;">
        <v-radio
          hide-details
          :value="4"
        ></v-radio>
        <v-text-field label="Quantidade de questões por aluno" v-model="question.alternatives[4].title" type="text">
        </v-text-field>
      </div>
    </v-radio-group>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        question: {
          correctIndex: 0,
          title: '',
          alternativas:[{
            title:'',
            correct: true
          },
          {
            title:'',
            correct: false
          },
          {
            title:'',
            correct: false
          },
          {
            title:'',
            correct: false
          },
          {
            title:'',
            correct: false
          }
          ]
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>