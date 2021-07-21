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
            <div class="menu__logo__wrapper">
                <img class="menu__logo" src="@/assets/logo.svg" alt="">
            </div>
        </div>
        <div class="header__right">
            <div class="header__user-type" v-if="user">{{user.tipo}}</div>
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
            <p v-if="isMenuExpanded" style="width:100%;font-size:18px;color:white;margin-top:20px">Dashboard</p>
            <menu-item @click.native="navigate({name:'disciplines'})" text="teste" icon="menu" active v-if="isMenuExpanded"></menu-item>
            <menu-item @click.native="logout()" text="Logout" icon="leave" active v-if="isMenuExpanded"></menu-item>
        </div>
        <div class="content__body">
            <router-view/>
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
        },
        navigate(to){
            this.$router.push(to)
        },
        logout(){
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            this.navigate({name:'login'})
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
    max-width: 100vw;
    overflow: hidden;
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
    width: 300px;
    padding: 10px;
}
</style>