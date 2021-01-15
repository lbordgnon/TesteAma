<template>
      <div class="Planets">
        <div class="Planets-info">
            <router-link :to="`/Planet/${planetIndex}`" exact class="Planets-name"> 
            <span class="Planet-name"> {{planetName}}</span>
            </router-link>
        </div>
    </div>
</template>


<script>


export default {
  name: 'Planets',
  props: ['planetName','planetIndex'],
}
</script>

<style>
    .Planets{
        flex: 2;
        display: flex;
        width: auto;
        border-radius: 8px;
        margin-right: 20px;
        margin-bottom: 20px;
        background-color: #f2c31a;
        padding: 20px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    }

    .Planets-info {
        flex: 1;
        display: grid;
        flex-direction: column;
      
    }

    .Planets-name {
        font-size: 0.8rem;
        cursor: pointer;
        border:0;   
        outline: none;
        border-radius: 5px;
        font-weight: bold;
        margin-left: 13px;
        color: #1c1e22;
    }
</style>