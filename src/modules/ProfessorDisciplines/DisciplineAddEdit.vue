<template>
    <div class="discipline__add">
        <p>{{isEditing? "Editar Disciplina" : "Cadastrar Disciplina"}}</p>
        <v-text-field label="Nome da disciplina" v-model="discipline.name" type="text">
        </v-text-field>
        <v-text-field label="Sigla da disciplina" v-model="discipline.initials" type="text">
        </v-text-field>
        <v-btn color="#00C853" class="white--text" block @click="addDiscipline()">
                Cadastrar
        </v-btn>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        props: {
            isEditing: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
                discipline: {
                    id:null,
                    name:'',
                    initials: '',
                },
                items: []
            }
        },
        created () {
            const id = this.$route.params.id
            if (id) {
                this.discipline = this.getDisciplineRequest()
            }
        },
        methods: {
            ...mapActions(['addDisciplineRequest']),
            async addUpdateDiscipline(){
                if (this.discipline.id) await this.updateDisciplineRequest(this.discipline)
                else this.addDisciplineRequest(this.discipline)
            }
        },
    }
</script>

<style lang="scss" scoped>
.discipline__add{
    width: 100%;
    background-color: white;
    padding: 20px;
}
.discipline__selects{
    display: flex;
}
</style>