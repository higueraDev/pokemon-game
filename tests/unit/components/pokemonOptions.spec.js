import pokemonOptions from "@/components/PokemonOptions";
import { shallowMount } from "@vue/test-utils";
import { pokemons } from "../mocks/pokemons.mock";

describe("pokemonOptions component", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(pokemonOptions, {
			props: {
				pokemons,
			},
		});
	});

	test("should match snapshot", () => {
		// expect(wrapper.html()).toMatchSnapshot();
		expect(wrapper.html()).toMatchInlineSnapshot(`
      <div class="options-container">
        <ul>
          <li>bulbasaur</li>
          <li>ivysaur</li>
          <li>venusaur</li>
          <li>charmander</li>
        </ul>
      </div>
    `);
	});

	test("should show 4 options correctly", () => {
		const listItems = wrapper.findAll("li");
		expect(listItems.length).toBe(4);
		const [l1, l2, l3, l4] = listItems;
		expect(l1.text()).toBe("bulbasaur");
		expect(l2.text()).toBe("ivysaur");
		expect(l3.text()).toBe("venusaur");
		expect(l4.text()).toBe("charmander");
	});
	test("should emit 'selection' custom-event with parameters on click event", () => {
		const listItems = wrapper.findAll("li");
		const [l1, l2, l3, l4] = listItems;
		l1.trigger("click");
		l2.trigger("click");
		l3.trigger("click");
		l4.trigger("click");
		expect(wrapper.emitted("selection").length).toBe(4);
		console.log(wrapper.emitted("selection"));
		expect(wrapper.emitted("selection")).toEqual([[1], [2], [3], [4]]);
	});
});
