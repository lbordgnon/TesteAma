<template>
	<div id="app" class="hide-menu">
		<Header title="Teste de desenvolvimento Ama Front-end"/>
		<Content />
		<Footer />
	</div>
</template>

<script>
import Header from "./components/template/Header"
import Content from "./components/template/Content"
import Footer from "./components/template/Footer"

export default {
	name: "App",
	components: {Header,Content,Footer},
}
</script>

<style>
		*{
			font-family: "Lato", sans-serif;
		}

		body{
			margin: 0;
		}

		#app{
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;

			height: 100vh;
			display: grid;
			background-color: violet;
			grid-template-rows: 60px 1fr 40px;
			grid-template-columns: 300px 1fr;
			grid-template-areas: 
				"header header"
				"content content"
				"footer footer"
		}
</style>