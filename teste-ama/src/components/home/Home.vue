<template>
    <div class="Home">
            <h3 class="home-description"> Esse é o guia oficial de Star Wars</h3>
         
            <h3 class="home-description"> Para saber mais informação escolha uma opção da barra acima</h3>
    </div>
</template>


<script>



export default {
  name: 'Home',
  components: {},
    data: function(){
        return {
        
        }
    },
}
</script>

<style>

    .home-description{
      color: #f2c31a;
      margin-bottom: 0px;
      padding: 15px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

</style>