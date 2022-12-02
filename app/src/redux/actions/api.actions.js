import axios from "axios"

export const GET_POKEMONS = "GET_POKEMONS"
export const GET_POKEMON = "GET_POKEMON"
export const REMOVE_POKEMON = "REMOVE_POKEMON"

export function getPokemons() {

    return async (dispatch) => {
        const { data } = await axios.get("http://localhost:8082/pokemons/getAll")
        return dispatch({ type: GET_POKEMONS, payload: data })
    }

}


export function getPokemon(id) {

    return async (dispatch) => {
        const { data } = await axios.get(`http://localhost:8082/pokemons/${id}`)
        return dispatch({ type: GET_POKEMON, payload: data })
    }

}

export function removePokemon() {

    return async (dispatch) => {
        return dispatch({ type: REMOVE_POKEMON, payload: null })
    }

}