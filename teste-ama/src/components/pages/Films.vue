<template>
    <div class="Home">
           <div class="films" >
                <Films v-for="item in this.films" :key="item.name" :filmsName="item.title" :filmsUrl="item.url.substring(27)"/>
           </div>
    </div>
</template>


<script>
import Films from '../Cards/CardsFilms'
import axios from 'axios'



export default {
  name: 'Home',
  components: {Films},
    created(){
        this.getFilms()
     
    },
    data: function(){
        return {
            films: {},
        }
    },
    methods:{
        getFilms(){
            axios.get('https://swapi.dev/api/films/').then(
            res => this.films = res.data.results)
          
        },
    },
}
</script>

<style>
   .films {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;  
   }
</style>