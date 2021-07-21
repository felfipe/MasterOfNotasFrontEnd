<template>
    <div>
        <div class="discipline__add">
            <v-btn block color="#00C853" class="white--text" @click="navigate({name:'add-discipline'})">
                Adicionar Disciplina
            </v-btn>
        </div>
        <div>
            <v-data-table
                :headers="headers"
                :items="disciplines || []"
                class="elevation-1"
            >
                <template v-slot:item.actions="{ item }">
                    <v-btn
                        class="discipline__action"
                        color="primary"
                        @click="navigate({path:`/student-discipline/${item.id}`})"
                    >
                        <v-icon dark>
                            mdi-cloud-upload
                        </v-icon>
                    </v-btn>
                    <v-btn
                      class="discipline__action"
                      color="warning"
                      dark
                      @click="navigate({path:`/update-discipline/${item.id}`})"
                    >
                        <v-icon dark>
                            mdi-cloud-upload
                        </v-icon>
                    </v-btn>
                    <v-btn
                        class="discipline__action"
                        color="error"
                        @click="removeDiscipline(item.id)"
                    >
                    <v-icon dark>
                        mdi-cloud-upload
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
          { text: 'Sigla', value: 'sigla' },
          { text: 'Nome Da Disciplina', value: 'nome' },
          { text: 'Actions', value: 'actions',align:'right' },
        ],
        desserts: [
          {
            sigla: 159,
            nome: 'Frozen Yogurt',
            actions: '',
          },
        ],
      }
    },
    computed: {
      ...mapState(['disciplines'])
    },
    created () {
      this.getDisciplinesRequest();
    },
    methods: {
      ...mapActions(['getDisciplinesRequest','removeDisciplineRequest']),
      navigate(to){
        this.$router.push(to)  
      },
      async removeDiscipline(disciplineID){
        await this.removeDisciplineRequest({disciplineID})
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