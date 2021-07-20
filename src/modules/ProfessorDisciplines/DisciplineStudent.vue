<template>
    <div>
        <div class="title">
            <span>
            #{{disciplineData.id}} - {{disciplineData.name}}
            </span> - 
            <span>
                {{disciplineData.semester}}º semestre {{disciplineData.year}}
            </span>
        </div>
        <div class="students">
            <v-data-table
                :headers="headers"
                :items="desserts"
                class="elevation-1"
            >
                <template v-slot:item.carbs="{ item }">
                    <v-btn
                        color="primary"
                        @click="item.id"
                    >
                        <v-icon dark>
                            mdi-cloud-upload
                        </v-icon>
                    </v-btn>
                </template>
            </v-data-table>
            <v-btn color="#00C853" class="white--text" block>
                Salvar
            </v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            disciplineData: {
                type: Object,
                default: () => {return {}}
            },
        },
        data () {
      return {
        headers: [
            { text: 'Semestre/ano', value: 'carbs' },
            { text: 'Nome Da Disciplina', value: 'fat' },
            { text: 'Codigo', value: 'id' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
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