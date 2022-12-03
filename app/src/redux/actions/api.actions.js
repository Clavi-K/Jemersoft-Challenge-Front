import axios from "axios"

export const GET_POKEMONS = "GET_POKEMONS"
export const GET_POKEMON = "GET_POKEMON"
export const REMOVE_POKEMON = "REMOVE_POKEMON"

export function getPokemons(maxIndex, length) {

    return async (dispatch) => {
        
        if (maxIndex < 10) return
        if (maxIndex <= length) return

        const { data } = await axios.get(`https://jemersoft-challenge-back-production.up.railway.app/pokemons/getTen/${maxIndex}`)
        return dispatch({ type: GET_POKEMONS, payload: data })
    }

}


export function getPokemon(id) {

    return async (dispatch) => {
        const { data } = await axios.get(`https://jemersoft-challenge-back-production.up.railway.app/pokemons/${id}`)
        return dispatch({ type: GET_POKEMON, payload: data })
    }

}

export function removePokemon() {

    return async (dispatch) => {
        return dispatch({ type: REMOVE_POKEMON, payload: null })
    }

}