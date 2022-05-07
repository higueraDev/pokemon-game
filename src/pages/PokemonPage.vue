<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

console.log(getPokemonOptions());

export default {
	components: { PokemonPicture, PokemonOptions },
};
</script>

<template>
	<h1>¿Quien es este pokemón?</h1>
	<PokemonPicture :showPokemon="false" :pokemonId="10"></PokemonPicture>
	<PokemonOptions></PokemonOptions>
</template>
<style></style>
