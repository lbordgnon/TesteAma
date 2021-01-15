<template>
    <header class="header">      
            <router-link to="/" exact class="title"> {{title}}</router-link>
            <router-link tag="button" to="/planets" exact class="button">Planetas</router-link>
            <router-link tag="button" to="/starships" exact class="button">Naves espaciais</router-link>
            <router-link tag="button" to="/Vehicles" exact class="button">Veículos</router-link>
            <router-link tag="button" to="/Peoples" exact class="button">Pessoas</router-link>
            <router-link tag="button" to="/films" exact class="button">Filmes</router-link>
            <router-link tag="button" to="/Species" exact class="button">Espécies</router-link> 
    </header>
</template>


<script>
export default {
    props:{
        title:String,
    },
    data: function() {
        return {
        }
    },
    methods:{
    }
}
</script>

<style>
    .header {
        grid-area: header;
        background: linear-gradient(to right, #1c1e22, #272b30);
        padding: 20px;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title{
        font-size: 1.2rem;
        color: #fade01;
        font-weight: 100;
        flex-grow: 1;
    }
    
    .button{
        cursor: pointer;
        border:0;
        background: #f2c31a;
        padding: 5px 15px;
        outline: none;
        border-radius: 5px;
        font-weight: bold;
        margin-left: 13px
    }
   

</style>