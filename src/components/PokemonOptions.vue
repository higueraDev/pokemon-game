<script>
export default {
	props: {
		pokemons: {
			type: Array,
			required: true,
		},
	},
};
</script>

<template>
	<div class="options-container">
		<ul>
			<li
				@click="$emit('selection', id)"
				v-for="{ name, id } in pokemons"
				:key="id"
			>
				{{ name }}
			</li>
		</ul>
	</div>
</template>

<style scoped>
/* Pokemon Options */
ul {
	list-style-type: none;
	padding: 0;
}
li {
	background-color: white;
	border-radius: 5px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	cursor: pointer;
	margin-bottom: 10px;
	width: 250px;
}

li:hover {
	background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
	display: flex;
	justify-content: center;
}
</style>
