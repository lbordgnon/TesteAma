<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>


<script>
export default {
    name:'Content'
}
</script>

<style>
    .content{
        grid-area: content;
        background: linear-gradient(to right, #1c1e22, #272b30);
        padding: 20px;
    }
</style>