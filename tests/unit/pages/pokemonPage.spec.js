import PokemonPage from "@/pages/PokemonPage";
import { mount, shallowMount } from "@vue/test-utils";
import { pokemons } from "../mocks/pokemons.mock";

describe("PokemonPage Page", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(PokemonPage);
	});
	test("should match snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});
	test("should call mixPokemonArray", () => {
		const mixPokemonArraySpy = jest.spyOn(
			PokemonPage.methods,
			"mixPokemonArr"
		);
		shallowMount(PokemonPage);
		expect(mixPokemonArraySpy).toHaveBeenCalled();
	});
	test("should match snapshot when data loads", () => {
		//mount() Monta los componentes con componentes hijos
		const wrapper = mount(PokemonPage, {
			data() {
				return {
					pokemonArr: pokemons,
					pokemon: pokemons[0],
					showPokemon: false,
					showAnswer: false,
					message: "",
				};
			},
		});
		expect(wrapper.html()).toMatchSnapshot();
	});

	test("should show components pokemonPicture and pokemonOptions", async () => {
		const wrapper = await mount(PokemonPage, {
			data() {
				return {
					pokemonArr: pokemons,
					pokemon: pokemons[0],
					showPokemon: false,
					showAnswer: false,
					message: "",
				};
			},
		});
		const pokemonPicture = wrapper.find("[data-testid='pokemonPicture']"),
			pokemonOptions = wrapper.find("[data-testid='pokemonOptions']");

		expect(pokemonPicture.exists()).toBeTruthy();
		expect(pokemonOptions.exists()).toBeTruthy();
		expect(pokemonPicture.attributes("pokemonid")).toBe("1");
		expect(pokemonOptions.attributes("pokemons")).toBeTruthy();
	});
});
