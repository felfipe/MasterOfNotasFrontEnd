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
                        color="primary"
                        @click="item.id"
                    >
                        <v-icon dark>
                            mdi-cloud-upload
                        </v-icon>
                    </v-btn>
                    <v-btn
                      color="warning"
                      dark
                    >
                        <v-icon dark>
                            mdi-cloud-upload
                        </v-icon>
                    </v-btn>
                    <v-btn
                          color="error"
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
          { text: 'Actions', value: 'actions' },
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
      ...mapActions(['getDisciplinesRequest']),
      navigate(to){
        this.$router.push(to)  
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