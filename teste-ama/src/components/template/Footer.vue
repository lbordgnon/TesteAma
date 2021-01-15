<template>
    <footer class="footer">
        <span>Teste de desenvolvimento Ama Front-end</span>
    </footer>
</template>


<script>
export default {
    name:'Footer'
}
</script>

<style>
    .footer{
        grid-area: footer;
        background: linear-gradient(to right, #1c1e22, #272b30);
        color: #f2c31a;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
        
    }
</style>