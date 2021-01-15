<template>
    <div class="Home">
           <div class="peoples" >
                <Peoples v-for="item in this.peoples" :key="item.name" :peoplesName="item.name" :peoplesIndex="item.url.substring(28)"/>
           </div>
    </div>
</template>


<script>
import Peoples from '../Cards/CardPeoples'
import axios from 'axios'



export default {
  name: 'Home',
  components: {Peoples},
    created(){
        this.getPeoples();
    },
    data: function(){
        return {
            peoples: {},
            filter: '',
        }
    },
    methods:{
        getPeoples(){
            axios.get('https://swapi.dev/api/people/').then(
            res => this.peoples = res.data.results)
          
        },
    },
}
</script>

<style>
   .peoples {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      
   }
</style>