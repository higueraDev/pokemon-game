<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
	components: { PokemonPicture, PokemonOptions },
	data() {
		return {
			pokemonArr: [],
			pokemon: null,
			showPokemon: false,
			showAnswer: false,
			message: "",
		};
	},
	mounted() {
		this.mixPokemonArr();
	},
	methods: {
		async mixPokemonArr() {
			this.pokemonArr = await getPokemonOptions();
			const randomInteger = Math.floor(Math.random() * 4);
			this.pokemon = this.pokemonArr[randomInteger];
		},
		checkAnswer(id) {
			this.showPokemon = true;
			if (id == this.pokemon.id) {
				this.message = `Correcto, es ${this.pokemon.name}`;
			} else {
				this.message = `Oops!, era ${this.pokemon.name}...`;
			}
			this.showAnswer = true;
		},
		newGame() {
			this.mixPokemonArr();
			this.pokemon = null;
			this.showPokemon = false;
			this.showAnswer = false;
		},
	},
};
</script>

<template>
	<h1 v-if="!pokemon">Espere por favor...</h1>
	<div v-else>
		<h1>¿Quien es este pokemón?</h1>
		<PokemonPicture
			:showPokemon="showPokemon"
			:pokemonId="pokemon.id"
		></PokemonPicture>
		<PokemonOptions
			@selection="checkAnswer"
			:pokemons="pokemonArr"
		></PokemonOptions>
		<template v-if="showAnswer" class="fade-in">
			<h2>
				{{ message }}
			</h2>
			<button @click="newGame">Nuevo Juego</button>
		</template>
	</div>
</template>
<style></style>
