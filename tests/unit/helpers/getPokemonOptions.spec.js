import getPokemonsOptions, {
	getPokemons,
	getPokemonsNames,
} from "@/helpers/getPokemonOptions";

describe("getPokemonOptions helpers", () => {
	test("should return an array of numbers", () => {
		const pokemons = getPokemons();
		expect(pokemons.length).toBe(650);
		expect(pokemons.at(0)).toBe(1);
		expect(pokemons.at(pokemons.length - 1)).toBe(650);
	});
	test("should return array with 4 pokemons names and ids objects", async () => {
		const [p1, p2, p3, p4] = [1, 2, 3, 4];
		const getNames = await getPokemonsNames([p1, p2, p3, p4]);
		expect(getNames).toEqual([
			{ name: "bulbasaur", id: p1 },
			{ name: "ivysaur", id: p2 },
			{ name: "venusaur", id: p3 },
			{ name: "charmander", id: p4 },
		]);
	});

	test("should return a mixed array of 4 pokemons", async () => {
		const pokemons = await getPokemonsOptions();
		expect(pokemons.length).toBe(4);
		expect(pokemons).toEqual([
			{
				name: expect.any(String),
				id: expect.any(Number),
			},
			{
				name: expect.any(String),
				id: expect.any(Number),
			},
			{
				name: expect.any(String),
				id: expect.any(Number),
			},
			{
				name: expect.any(String),
				id: expect.any(Number),
			},
		]);
	});
});
