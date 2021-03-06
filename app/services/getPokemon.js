import request from "axios";
const getPokemon = {
    withAbility: (ability) => {
        const baseUrl = "https://pokeapi.co/api/v2/ability";
        return request.get(`${baseUrl}/${ability}`);
    }
};

export default getPokemon;