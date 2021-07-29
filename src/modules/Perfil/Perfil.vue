<template>
  <v-card>
    <v-list-item two-line>
      <v-list-item-avatar>
          <span><v-icon large slot="prepend" color="grey"> mdi-account </v-icon></span>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{dadosUser.nome}}</v-list-item-title>
        <v-list-item-subtitle>{{dadosUser.tipo}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-container id="input-usage" fluid>
      <v-row>
        <v-col cols="12">
          <form class="login__box" @submit.prevent="sign">
            <v-text-field
              label="Nome Completo"
              :value="name"
              type="name"
              :rules="rules"
            >
              <v-icon slot="prepend" color="grey"> mdi-face </v-icon>
            </v-text-field>
            <v-text-field label="E-mail" :value="email" type="email" :rules="rules">
              <v-icon slot="prepend" color="grey"> @ </v-icon>
            </v-text-field>
            <!-- <v-text-field label="Nova Senha" type="password" :rules="rules">
              <v-icon slot="prepend" color="grey">mdi-key</v-icon>
            </v-text-field>
            <v-text-field
              label="Confirmação da senha"
              type="password"
              :rules="rules"
            >
              <v-icon slot="prepend" color="grey">mdi-key</v-icon>
            </v-text-field> -->
            <!-- <v-btn
              color="#00C853"
              class="white--text"
              block
              @click="addUpdatePerfil()"
            >
              Salvar
            </v-btn> -->
          </form>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      dadosUser: null
    };
  },
  async created() {
    this.dadosUser = JSON.parse(localStorage.getItem("user")) || [];
  },
};
</script>
