<template>
  <div class="main">
    <header class="header">
        <div class="header__left">
            <span @click="toggleMenu()">
                <v-icon
                    large
                    color="#1E5BD7"
                >
                    mdi-menu
                </v-icon>
            </span>
            <img class="menu__logo" src="@/assets/logo.svg" alt="">
        </div>
        <div class="header__right">
            <div class="header__user-type" v-if="user">{{user.tipoUsuario}}</div>
            <v-icon
                    x-large
                    color="#1E5BD7"
                >
                    mdi-account-box
                </v-icon>
        </div>
        
    </header>
    <div class="content">
        <div class="content__sidebar" :class="{'is-expanded': isMenuExpanded}">
            <menu-item text="teste" icon="menu" active v-if="isMenuExpanded"></menu-item>
        </div>
        <div class="content__body">
            <v-breadcrumbs
                :items="items"
                divider="-"
            ></v-breadcrumbs>
            <div class="content__main">
            </div>
        </div>
    </div>
    <footer><v-card
        flat
        tile
        width="100%"
        class="text-center"
        color="#0038A8"
      >
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Master of Notas</strong>
        </v-card-text>
      </v-card></footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MenuItem from './components/MenuItem.vue'
  export default {
    components: {
        MenuItem,
    },
    data: () => ({ 
        drawer: null ,
        isMenuExpanded: false,
        items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
        
    }),
    computed:{
        ...mapState(['user'])
    },
    methods: {
        toggleMenu() {
            this.isMenuExpanded = !this.isMenuExpanded
        }
    },
  }
</script>
<style scoped>
.main{
    background: #E5E5E5;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.aux{
    display: flex;
    justify-content: center;
    align-items: center;
}
.header{
    height: 90px;
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
    background-color: white;
}
.header__right{
    height: 100%;
    display: flex;
    align-items: center;
}
.header__right .header__user-type{
    margin-right: 20px;
    color: #1E5BD7;
}
.header__left{
    height: 100%;
    display: flex;
    align-items: center;
}
.header__left span{
    padding: 10px;
    margin-right: 40px;
    cursor: pointer;
}
.menu__logo{
    max-width: 250px;
}
.content{
flex-grow:1;
display: flex;
}
.content__sidebar{
    width: 50px;
    background: #1E5BD7;;
    transition: width .7s;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
}
.content__body{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}
.content__main{
    flex-grow: 1;
    margin: 20px 40px 40px 40px;
    background-color: white;
}
.is-expanded{
    width: 300px;
}
</style>