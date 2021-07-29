<template>
    <div class="discipline__add">
        <p>{{isEditing? "Editar Enquete" : "Cadastrar Enquete"}}</p>
        <v-text-field label="Nome do Questionário" v-model="quiz.name" type="text">
        </v-text-field>
        <v-text-field label="Quantidade de questões por aluno" v-model="quiz.amount" type="text">
        </v-text-field>
        <v-select
            :items="disciplines"
            item-text="nome"
            item-value="id"
            label="Disciplina"
            prepend-icon="mdi-map"
            v-model="quiz.discipline"
        ></v-select>
        <v-btn color="#00C853" class="white--text" block @click="addUpdateDiscipline()">
                {{text}}
        </v-btn>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
    export default {
        data() {
            return {
                quiz: {
                    id:null,
                    name:'',
                    amount: '',
                    discipline: null,
                    active:false
                },
                items: [],
                isEditing: false,
            }
        },
        computed: {
            ...mapState(['disciplines']),
            text() {
                return this.isEditing? 'Atualizar':'Cadastrar' 
            }
        },
        async created () {
            this.getDisciplinesRequest();
            /* const id = this.$route.params.id
            if (id) {
                this.isEditing = true
                const response = await this.getDisciplineRequest({id})
                this.discipline.id = response.id
                this.discipline.name = response.nome
                this.discipline.initials = response.sigla
            } */
        },
        methods: {
            ...mapActions(['addQuizRequest','getDisciplinesRequest']),
            async addUpdateDiscipline(){
                const disciplineName = this.disciplines.filter(dis => dis.id === this.quiz.discipline[0])
                if (this.quiz.id) await this.updateQuizRequest({...this.quiz, disciplineName})
                else this.addQuizRequest(this.quiz)
                this.$router.push({name:'quiz-menu'})
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