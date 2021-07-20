<template>
    <div class="discipline__add">
        <p>{{isEditing? "Editar Disciplina" : "Cadastrar Disciplina"}}</p>
        <v-text-field label="Nome da disciplina" v-model="discipline.name" type="text">
        </v-text-field>
        <div class="discipline__selects">
            <v-select
                :items="items"
                label="Tipo"
                prepend-icon="mdi-map"
                v-model="discipline.semester"
            ></v-select>
            <v-select
                :items="items"
                label="Tipo"
                prepend-icon="mdi-map"
                v-model="discipline.year"
            ></v-select>
        </div>
        <v-btn color="#00C853" class="white--text" block>
                Cadastrar
        </v-btn>
    </div>
</template>

<script>
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
                    name:'',
                    year: '',
                    semester: '',
                },
                items: []
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