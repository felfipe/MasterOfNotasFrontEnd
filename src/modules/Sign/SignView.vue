<template>
    <div class="page">
        <div class="page-container"> 
        <form class="login__box" @submit.prevent="sign">
            <img style="max-width:100%" src="../../assets/logo.png"/>
            <v-text-field label="E-mail" v-model="user.email" type="email" :rules="rules">
                <v-icon slot="prepend" color="grey" >
                  @
                </v-icon>
            </v-text-field>
            <v-text-field v-if="!isSignIn" label="Username" v-model="user.username" :rules="rules">
                <v-icon slot="prepend" color="grey" >
                  @
                </v-icon>
            </v-text-field>
            <v-text-field :rules="rules" label="Senha" v-model="user.password" type="password">
                <v-icon slot="prepend" color="grey" >
                  mdi-key
                </v-icon>
            </v-text-field>
            <v-text-field v-if="!isSignIn" :rules="rules" label="Confirmar Senha" v-model="user.confirmPassword" type="password">
                <v-icon slot="prepend" color="grey" >
                  mdi-key
                </v-icon>
            </v-text-field>
            <v-select
                :items="items"
                label="Tipo"
                v-if="!isSignIn"
                prepend-icon="mdi-map"
                v-model="user.type"
            ></v-select>
            <p v-if="error" class="login__error">Erro ao {{actionText.toLowerCase()}}, tente novamente</p>
            <v-btn block depressed color="#00C853" class="white--text" type="submit">
                {{actionText}}
            </v-btn>
            <p v-if="isSignIn" class="login__forgot-password">Esqueceu sua senha? <span>Clique aqui</span></p>
        </form>
        <div class="signUp__box">
            <v-btn block depressed color="#1976D2" class="white--text" @click="isSignIn = !isSignIn">
                {{changeActionText}}
            </v-btn>
        </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                user: {
                    email: '',
                    username: '',
                    password: '',
                    confirmPassword: '',
                    type: '',
                },
                rules: [
                    value => !!value || 'Obrigatório',
                    value => (value && value.length >= 6) || 'Mínimo de 3 caracteres',
                ],
                items: ['aluno', 'professor',],
                isSignIn: true,
                error: ''
            }
        },
        computed:{
            actionText(){
                return this.isSignIn ? 'Entrar' : 'Cadastrar-se'
            },
            changeActionText(){
                return this.isSignIn ? 'Cadastrar-se' : 'Entrar'
            }
        },
        methods: {
            ...mapActions(['loginRequest','signUpRequest']),
            navigate(to) {
                this.$router.push({name:to})
            },
            async sign(){
                let response = null;
                try {
                    if (this.isSignIn){
                        response = await this.loginRequest(this.user)
                    }
                    else {
                        if(this.confirmPassword == this.password)
                        response =await this.signUpRequest(this.user)
                        else
                        this.error = 'Senha e Confirmação possuem valores diferentes'
                    }
                    if(response.tipo == 'ALUNO'){
                        this.$router.push({name:'disciplinas-aluno'}) 
                    }else{
                        this.$router.push({name:'home'}) 
                    }
                    
                } catch (error) {
                    this.error = `Erro ao ${this.actionText}`
                }
            }
        },
    }
</script>

<style scoped>
.page{
    width:100%;
    height:100%;
    background: linear-gradient(180deg, #0038A8 0%, #1E5BD7 100%);
    display: flex;
    justify-content:center;
}
.page-container{
    height:100%;
    width: 768px;
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items:center;
}
.login__box{
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    max-width: 768px;
    background-color: white;
    padding: 10px;
}
.login__forgot-password{
    align-self: center;
    margin-top: 20px;
}
.login__forgot-password span{
    color: #3366ff;
    cursor:pointer;
}
.login__forgot-password span:hover{
    text-decoration: underline;
}
.login__error{
    color: red;
}
.signUp__box{
    margin-top: 40px;
    width: 100%;
    background-color: white;
    padding:20px;
    border-radius: 5px;
}
@media only screen and (max-width: 768px) {
  .page-container{
      width: calc(100% - 40px)
  }
}
</style>