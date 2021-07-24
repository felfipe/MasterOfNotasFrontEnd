<template>
  <div class="main">
    <header class="header">
        <div class="header__left">
            <v-app-bar-nav-icon
                color="#1E5BD7"
                @click="toggleMenu()"
                class="btnToggleMenu"
            ></v-app-bar-nav-icon>
            <div class="menu__logo__wrapper">
                <v-img
                    :src="require('@/assets/logo-2.svg')"
                    max-height="30"
                    max-width="200"
                ></v-img>
            </div>
        </div>
        <div class="header__right">
            <div class="header__user-type" v-if="user">{{user.tipo}}</div>
            <v-icon
                color="#1E5BD7"
            >
                mdi-account-box
            </v-icon>
        </div>
        
    </header>
    <div class="content">
        <v-navigation-drawer v-model="isMenuExpanded" width="300" color="#1E5BD7" app>
            <MenuItem ></MenuItem>
        </v-navigation-drawer>

        <v-main>
            <v-container>
                <div class="content__body">
                    <router-view/>
                </div>
            </v-container>
        </v-main>
        
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
        isMenuExpanded: true,
    }),
    computed:{
        ...mapState(['user'])
    },
    methods: {
        toggleMenu() {
            this.isMenuExpanded = !this.isMenuExpanded
        },
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
    height: 64px;
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
    background-color: white;
    max-width: 100vw;
    overflow: hidden;
    z-index: 9;
    position: fixed;
    width: 100%;
    box-shadow: 0px 2px 4px 6px rgb(0 0 0 / 1%), 0px 4px 5px 0px rgb(0 0 0 / 2%), 0px 1px 10px 0px rgb(0 0 0 / 4%);
}
.header__right{
    height: 100%;
    display: flex;
    align-items: center;
}
.header__right .header__user-type{
    margin-right: 10px;
    color: #1E5BD7;
    font-size: 0.8rem;
    font-weight: 500;
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
    max-width: 100%;
}
.menu__logo__wrapper{
    max-width: 250px;
}
.content{
    flex-grow:1;
    display: flex;
}
.content__sidebar{
    width: 0px;
    background: #1E5BD7;;
    transition: width .7s;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.content__body{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 20px 40px;
}
.is-expanded{
    width: 380px;
    padding: 10px;
}
.btnToggleMenu{
    margin-right: 10px;
}
nav{
    padding-top: 70px;
}
footer{
    z-index: 9;
}
.v-main{
    margin-top: 64px;
}
</style>