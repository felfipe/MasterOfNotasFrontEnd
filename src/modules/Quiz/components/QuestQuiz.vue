<template>
  <v-card class="card-question">
    <v-card-text>
      <div class="num-label-quest-quiz">Questão 1</div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas, amet omnis libero maxime exercitationem consectetur voluptatem dicta molestias ab nulla magni atque! Cupiditate corporis magni molestias illo officia?</p>
      <v-radio-group v-model="radioGroup">
        <v-radio
          v-for="n in 5"
          :key="n"
          label="Alternativa"
          color="blue darken-2"
          class="blue--text"
        ></v-radio>
      </v-radio-group>
    </v-card-text>
  </v-card>
</template>
<script>
// import axios from '@/configs/axios'
export default{
    data(){
        return {}
    },
    watch:{
        '$route.params.questionid':function(){
            this.get_question()
        },
    },
    methods:{
        get_question(){
            console.log('E AII')
        }
    },
    created(){
        this.get_question()
    }

}
</script>

<style scoped>
.num-label-quest-quiz{
  background-color: #1976D2;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
  width: auto;
  display: table;
  border-radius: 2px;
  margin-bottom: 16px;
  margin-top: 10px;
}
.blue--text{
    color: #1976D2;
}
</style>