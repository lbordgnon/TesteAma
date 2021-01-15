<template>
  <div id="filme">
    <div class="container">
        <span class="Planet-description"> Nome                  :{{vehicle.name}}</span>
        <span class="Planet-description"> Modelo                :{{vehicle.model}}</span>
        <span class="Planet-description"> Fabricante            :{{vehicle.manufacturer}}</span>
        <span class="Planet-description"> classe                :{{vehicle.vehicle_class}}</span>
        <span class="Planet-description"> Velocidade Maxima     :{{vehicle.max_atmosphering_speed}}</span>
        <span class="Planet-description"> Maxima de passageiros :{{vehicle.passengers}}</span>
        <span class="Planet-description"> Capacidade de carga   :{{vehicle.cargo_capacity}}</span>
        <span class="Planet-description"> Valor estimado        :{{vehicle.cost_in_credits}}</span>
        <span class="Planet-description"> Comprimento           :{{vehicle.length}}</span>
        <span class="Planet-description"> consumíveis           :{{vehicle.consumables}}</span>
        <span class="Planet-description"> Equipe Tecnica        :{{vehicle.crew}}</span>
     </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  components:{
    
  },
  created(){
        this.getVehicle()
        
 },
 data: function(){
    return{
      vehicle: {},
    }
  },
   methods:{
        getVehicle(){
           axios.get('https://swapi.dev/api/vehicles/' + `${this.id}`).then(
            res => this.vehicle = res.data)
        },
    },
}
</script>

<style scoped>

  .container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        max-width: 900px;
    }

    .Planet-description{
      color: #f2c31a;
      margin-bottom: 0px;
      padding: 15px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    .container img{
        width: 100%;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    button{
      margin-right: 5px;
      border-radius: 5px;
      margin-top: 15px;
      cursor: pointer;
      border:0;
      padding: 12px;
      font-size: 20px;
      transition: all 0.5s;
      outline: none;
    }
    button:hover{
      background: brown;
      color: #FFF;
    }

    a{
      text-decoration: none;
      color: #000;
      transition: all 0.5s;
    }

    a:hover{
      color: #FFF;
    }

</style>

