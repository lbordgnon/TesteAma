<template>
      <div class="Films">
        <div class="Films-info">
            <router-link :to="`/Film/${filmsUrl}`" exact class="Films-name"> 
            <span class="Films-name"> {{filmsName}}</span>
            </router-link>
        </div>
    </div>
</template>


<script>


export default {
  name: 'Films',
  props: ['filmsName','filmsUrl'],
   created(){
        console.log(this.filmsUrl)
    },
}
</script>

<style>
    .Films{
        flex: auto;
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

    .Films-info {
        flex: 1;
        display: block;
        flex-direction: column;
        align-items: flex-end;
    }

    .Films-name {
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