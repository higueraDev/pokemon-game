import pokemonApi from "@/api/pokemonApi";

describe("pokemonApi", () => {
	test("axios should have setted pokemon API", () => {
		expect(pokemonApi.defaults.baseURL).toBe(
			"https://pokeapi.co/api/v2/pokemon"
		);
	});
});
