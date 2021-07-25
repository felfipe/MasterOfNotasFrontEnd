<template>
    <div class="discipline__add">
        <p>{{isEditing? "Editar Disciplina" : "Cadastrar Disciplina"}}</p>
        <v-text-field label="Nome da disciplina" v-model="discipline.name" type="text">
        </v-text-field>
        <v-text-field label="Sigla da disciplina" v-model="discipline.initials" type="text">
        </v-text-field>
        <v-btn color="#00C853" class="white--text" block @click="addUpdateDiscipline()">
                {{text}}
        </v-btn>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                discipline: {
                    id:null,
                    name:'',
                    initials: '',
                },
                items: [],
                isEditing: false,
            }
        },
        computed: {
            text() {
                return this.isEditing? 'Atualizar':'Cadastrar' 
            }
        },
        async created () {
            const id = this.$route.params.id
            if (id) {
                this.isEditing = true
                const response = await this.getDisciplineRequest({id})
                this.discipline.id = response.id
                this.discipline.name = response.nome
                this.discipline.initials = response.sigla
            }
        },
        methods: {
            ...mapActions(['addDisciplineRequest','getDisciplineRequest']),
            async addUpdateDiscipline(){
                if (this.discipline.id) await this.updateDisciplineRequest(this.discipline)
                else this.addDisciplineRequest(this.discipline)
                this.$router.push({name:'home'})
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