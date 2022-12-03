import { GET_POKEMON, GET_POKEMONS, REMOVE_POKEMON } from "../actions/api.actions"

const initialState = {
    pokemons: [],
    pokemon: null
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_POKEMONS:

            return {
                ...state,
                pokemons: [...state.pokemons, ...action.payload]
            }

        case GET_POKEMON:

            return {
                ...state,
                pokemon: action.payload
            }

        case REMOVE_POKEMON:

            return {
                ...state,
                pokemon: null
            }

        default:
            return state
    }

}

export default reducer