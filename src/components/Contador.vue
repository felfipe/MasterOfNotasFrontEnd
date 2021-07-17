<template>
    <div>
        <p>{{ titulo }}</p>
        <button @click="adicionarUm()">Clique em mim</button>
        {{contagem}}
        <button @click="diminuirUm()">Diminuir um</button>
        <p v-if="contagem == 10">A contagem é igual a 10</p>
        <p v-else> Contagem diferente de 10</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                contagem: 0
            }
        },
        props: {
            titulo: {
                type: String,
                default: "Sem titulo"
            },
        },
        methods: {
            adicionarUm() {
                this.contagem++
            },
            diminuirUm(){
                this.contagem--
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>