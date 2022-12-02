import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getPokemon, removePokemon } from "../../redux/actions/api.actions"

const Details = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const pokemon = useSelector(state => state.pokemon)

    useEffect(() => {
        dispatch(getPokemon(id))
        return () => dispatch(removePokemon())
    }, [])


    return (
        <section>
            <Link to="/pokemons">⬅</Link>

            {
                pokemon ?

                    <article>
                        <img src={pokemon.img} alt={pokemon.name} />
                        <h1>{pokemon.name}</h1>

                        <div>
                            <h2>Description [ES]:</h2>
                            <p>{pokemon.description}</p>
                        </div>

                        <div>
                            <h2>Types:</h2>
                            <ul>
                                {
                                    pokemon.types.map(t => <li key={t}>{t}</li>)
                                }
                            </ul>
                        </div>

                        <div><h2>Weight: {pokemon.weight}kg</h2></div>

                        <div>
                            <h2>Abilities:</h2>
                            <ul>
                                {
                                    pokemon.abilities.map(a => <li key={a}>{a}</li>)
                                }
                            </ul>
                        </div>

                        <div>
                            <h2>Moves:</h2>
                            <ul>
                                {
                                    pokemon.moves.map(m => <li key={m}>{m}</li>)
                                }
                            </ul>
                        </div>

                    </article>

                    :
                    null
            }
        </section>
    )
}

export default Details