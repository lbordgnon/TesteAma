<template>
  <div id="filme">
    <div class="container">
        <span class="Film-description"> Nome                  :{{film.title}}</span>
        <span class="Film-description"> Diretor               :{{film.director}}</span>
        <span class="Film-description"> produtor              :{{film.producer}}</span>
        <span class="Film-description"> Ep                    :{{film.episode_id}}</span>
        <span class="Film-description"> Sinopse               :{{film.opening_crawl}}</span>
        <span class="Film-description"> Data de Lançamento    :{{film.release_date}}</span>
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
        this.getFilm()
        
 },
 data: function(){
    return{
      film: {},
    }
  },
   methods:{
        getFilm(){
           axios.get('https://swapi.dev/api/films/' + `${this.id}`).then(
            res => this.film = res.data)
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

    .Film-description{
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

