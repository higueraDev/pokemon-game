<script>
export default {};
</script>

<template>
	<div class="pokemon-container">
		<img
			class="hidden-pokemon"
			src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
			alt="pokemón"
		/>
		<!-- <img
			class="fade-in"
			src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
			alt="pokemón"
		/> -->
	</div>
</template>

<style scoped>
/* Pokemon Picture */
.pokemon-container {
	height: 200px;
}
img {
	height: 200px;
	position: absolute;
	width: 100vw;
	margin-left: -50vw;
	user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-webkit-user-drag: none;
	-webkit-user-select: none;
}
.hidden-pokemon {
	filter: brightness(0);
}
</style>
