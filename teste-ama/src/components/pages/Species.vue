<template>
    <div class="Home">
           <div class="species" >
                <Species v-for="item in this.species" :key="item.name" :speciesName="item.name" :speciesUrl="item.url.substring(29)"/>
           </div>
    </div>
</template>


<script>
import Species from '../Cards/CardsSpecies'
import axios from 'axios'



export default {
  name: 'Home',
  components: {Species},
    created(){
        this.getSpecies()
     
    },
    data: function(){
        return {
            species: {},
        }
    },
    methods:{
        getSpecies(){
            axios.get('https://swapi.dev/api/species/').then(
            res => this.species = res.data.results)
          
        },
    },
}
</script>

<style>
   .species {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;  
   }
</style>