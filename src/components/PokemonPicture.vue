<script>
export default {
	props: {
		pokemonId: {
			type: Number,
			required: true,
		},
		showPokemon: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	computed: {
		imgSrc() {
			return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
		},
	},
};
</script>

<template>
	<div class="pokemon-container">
		<img
			v-if="!showPokemon"
			class="hidden-pokemon"
			:src="imgSrc"
			alt="pokemón"
		/>
		<img v-else class="fade-in" :src="imgSrc" alt="pokemón" />
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
