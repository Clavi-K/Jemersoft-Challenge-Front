import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {Link} from "react-router-dom"

import { getPokemons } from '../../redux/actions/api.actions'

const Pokemons = () => {

    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)

    useEffect(() => {
        if (!pokemons || !pokemons.length) {
            dispatch(getPokemons())
        }
    }, [])

    return (
        <section>

            <div>
                {
                    pokemons && pokemons.length ?

                        pokemonRender(pokemons)

                        :

                        null
                }
            </div>

        </section>
    )
}

function pokemonRender(pokemons) {

    return pokemons.map(p =>
        <article key={p.id}>
            <img src={p.img} alt={p.name} />
            <h1>{p.name}</h1>

            <div>
                <h2>Types:</h2>
                <ul>
                    {
                        p.types.map(t => <li key={t}>{t}</li>)
                    }
                </ul>
            </div>

            <div><h2>Weight: {p.weight}kg</h2></div>

            <div>
                <h2>Abilities:</h2>
                <ul>
                    {
                        p.abilities.map(a => <li key={a}>{a}</li>)
                    }
                </ul>
            </div>

            <Link to={`/pokemon/${p.id}`}>Details</Link>

        </article>)

}

export default Pokemons