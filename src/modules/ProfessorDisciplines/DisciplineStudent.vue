<template>
    <div>
        <div class="title">
            <span>
            #{{discipline.sigla}} - {{discipline.nome}}
            </span>
        </div>
        <div class="students">
            <v-data-table
                :headers="headers"
                :items="students || []"
                class="elevation-1"
            >
                <template v-slot:item.check="{ item }">
                    <v-checkbox
                    @change="studentRegister($event,item.id)"
                      v-model="item.check"
                    ></v-checkbox>
                </template>
            </v-data-table>
            <v-btn color="#00C853" class="white--text" block @click="addStudentToDiscipline()">
                Salvar
            </v-btn>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
    export default {
        props: {
            disciplineData: {
                type: Object,
                default: () => {return {}}
            },
        },
        data () {
      return {
        discipline: {},
        headers: [
            { text: '', value: 'check' },
            { text: 'Nome do Aluno', value: 'name' },
            { text: 'email', value: 'email' },
        ],
        studentsToAdd: []
      }
    },
    computed: {
      ...mapState(['students'])
    },
    async created () {
      await this.getStudentsRequest();
      this.discipline = await this.getDisciplineRequest({id:this.$route.params.id})
    },
    methods: {
      ...mapActions(['getStudentsRequest','addStudentToDisciplineRequest','getDisciplineRequest']),
      studentRegister(value,id){
        if(value){
          this.studentsToAdd.push(id)
        }else{
          this.studentsToAdd.splice(this.studentsToAdd.indexOf(id),1)
        }
      },
      async addStudentToDiscipline(){
        await this.addStudentToDisciplineRequest({disciplineID: +this.$route.params.id, studentsID: this.studentsToAdd})
        this.$router.push({name:'home'})
      }
    },
    }
</script>

<style scoped>
.title{
    width: 100%;
    background-color: White;
    margin-bottom: 20px;
    padding: 15px 10px;
}
.students{
    background-color: white;
    padding: 10px 10px 20px 10px;
}
</style>