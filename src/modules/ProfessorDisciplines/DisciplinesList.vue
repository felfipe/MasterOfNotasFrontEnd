<template>
    <div>
        <div class="discipline__add">
            <v-btn block>
                Adicionar Disciplina
            </v-btn>
        </div>
        <div>
            <v-data-table
                :headers="headers"
                :items="desserts"
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
    export default {
    data () {
      return {
        headers: [
          { text: 'Codigo', value: 'id' },
          { text: 'Nome Da Disciplina', value: 'name' },
          { text: 'Semestre/ano', value: 'semesterYear' },
          { text: 'Actions', value: 'actions' },
        ],
        desserts: [
          {
            id: 159,
            name: 'Frozen Yogurt',
            semesterYear: '2/2020',
            actions: '1%',
          },
        ],
      }
    },
    methods: {
      getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
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