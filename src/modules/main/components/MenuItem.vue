<template>
    <div class="item" :class="{'item--active': active}">
        <v-icon
            large
            :color="iconColor"
            class="item__icon"
        >
            mdi-{{icon}}
        </v-icon>
        <span class="item__text" :class="{'item__text--active': active}">{{text}}</span>
    </div>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                required: true 
            },
            active: {
                type: Boolean,
                default: false
            },
            text:{
                type: String,
                required: true
            }
        },
        computed: {
            iconColor() {
                return this.active ? '#1E5BD7' : '#ffffff'  
            }
        },
    }
</script>

<style scoped>
.item{
    width: 100%;
    border-radius: 30px;
    display: flex;
    align-items: center;
    cursor:pointer;
    margin: 10px 20px;
    padding: 0px 20px;
    
}
.item--active{
    background: white;
}
.item.item--active:hover{
    background: white;
}
.item:hover{
    background: #0038A8;
}
.item__text{
    color: white;
    margin-left: 10px;
}
.item__text--active{
    color: #0038A8;
}

</style>