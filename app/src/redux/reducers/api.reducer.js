import { GET_POKEMONS } from "../actions/api.actions"

const initialState = {
    pokemons: null,
    pokemon: null
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_POKEMONS:

            return {
                ...state,
                pokemons: action.payload
            }


        default:
            return state
    }

}

export default reducer