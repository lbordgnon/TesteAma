<template>
    <div class="Home">
           <div class="starships" >
                <Starships v-for="item in this.starships" :key="item.name" :starshipsName="item.name" :starshipsUrl="item.url.substring(31,32)"/>
           </div>
    </div>
</template>


<script>
import Starships from '../Cards/CardsStarship'
import axios from 'axios'



export default {
  name: 'Home',
  components: {Starships},
    created(){
        this.getStarships()
        
    },
    data: function(){
        return {
            starships: {},
        }
    },
    methods:{
        getStarships(){
            axios.get('https://swapi.dev/api/starships/').then(
            res => this.starships = res.data.results)
          
        },
    },
}
</script>

<style>
   .starships {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;  
   }
</style>