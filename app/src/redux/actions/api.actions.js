import axios from "axios"

export const GET_POKEMONS = "GET_POKEMONS"

export function getPokemons() {

    return async (dispatch) => {
        const { data } = await axios.get("http://localhost:8082/pokemons/getAll")
        return dispatch({ type: GET_POKEMONS, payload: data })
    }

}