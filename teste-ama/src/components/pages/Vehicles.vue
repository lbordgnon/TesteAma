<template>
    <div class="Home">
           <div class="vehicles" >
                <Vehicles v-for="item in this.vehicles" :key="item.name" :vehiclesName="item.name" :vehiclesUrl="item.url.substring(30)"/>
           </div>
    </div>
</template>


<script>
import Vehicles from '../Cards/CardsVehicles'
import axios from 'axios'

export default {
  name: 'Home',
  components: {Vehicles},
    created(){
        this.getVehicles()
        
    },
    data: function(){
        return {
            vehicles: {},
        }
    },
    methods:{
        getVehicles(){
            axios.get('https://swapi.dev/api/vehicles/').then(
            res => this.vehicles = res.data.results)
          
        },
    },
}
</script>

<style>
   .vehicles {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;  
   }
</style>