<template>
    <div class="Home">
           <div class="planets" >a
                <Planets v-for="(item, index) in this.planets" :key="item.name" :planetName="item.name" :planetIndex="index + 1"/>
           </div>
    </div>
</template>


<script>
import Planets from '../Cards/CardsPlanets'
import axios from 'axios'



export default {
  name: 'Home',
  components: {Planets},
    created(){
        this.getPlanets()
        
    },
    data: function(){
        return {
            planets: {},
            filter: '',
        }
    },
    methods:{
        getPlanets(){
            axios.get('https://swapi.dev/api/planets/').then(
            res => this.planets = res.data.results)
          
        },
    },
}
</script>

<style>
   .planets {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      
   }
</style>