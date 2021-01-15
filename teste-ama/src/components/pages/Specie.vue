<template>
  <div id="filme">
    <div class="container">
        <span class="Specie-description"> Nome                  :{{spceie.name}}</span>
        <span class="Specie-description"> Peso                  :{{spceie.language}}</span>
        <span class="Specie-description"> Cor de Pele           :{{spceie.skin_colors}}</span>
        <span class="Specie-description"> Cor do Cabelo         :{{spceie.hair_colors}}</span>
        <span class="Specie-description"> Cor dos olhos         :{{spceie.eye_colors}}</span>
        <span class="Specie-description"> Designação            :{{spceie.designation}}</span>
        <span class="Specie-description"> Classificação         :{{spceie.classification}}</span>
        <span class="Specie-description"> Vida Media            :{{spceie.average_lifespan}}</span>
        <span class="Specie-description"> Altura Media          :{{spceie.average_height}}</span>
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
        this.getSpecie();
        
 },
 data: function(){
    return{
      spceie: {},
    }
  },
   methods:{
        getSpecie(){
           axios.get('https://swapi.dev/api/species/' + `${this.id}`).then(
            res => this.spceie = res.data)
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

    .Specie-description{
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

