/* ----- REQUIRED IMPORTS ----- */

import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BallTriangle } from "react-loader-spinner"

import { getPokemon, removePokemon } from "../../redux/actions/api.actions"
import s from "./style.module.css"
import { capitalize } from '../../utils'

/* ---------- */

const Details = () => {

    const { id } = useParams()

    /* ----- REDUX ----- */

    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.pokemon)

    /* ---------- */

    /* ----- DISPATCH STATE ----- */

    useEffect(() => {
        dispatch(getPokemon(id))
        return () => dispatch(removePokemon())
    }, [])

    /* ---------- */


    /* ----- COMPONENT ----- */

    return (
        <section>

            {
                pokemon ?

                    <article>
                        <div className={`${s.container}`}>
                            <Link className={`${s.backButton}`} to="/pokemons">⬅</Link>
                            <img className={`${s.image}`} src={pokemon.img} alt={pokemon.name} />

                            <div className={`${s.text}`}>
                                <h1 className={`${s.title}`}>{capitalize(pokemon.name)}</h1>
                                <div>
                                    <h2>Description [ES]:</h2>
                                    <p>{pokemon.description}</p>
                                </div>
                                <div className={`${s.weight}`}><h2>Weight: {pokemon.weight}kg</h2></div>
                            </div>
                        </div>

                        <hr />

                        <div className={`${s.stats}`}>
                            <div className={`${s.statCard}`}>
                                <h2 className={`${s.statTitle}`}>Types:</h2>
                                <ul className={`${s.list}`}>
                                    {
                                        pokemon.types.map(t => <li className={`${s.element}`} key={t}>{capitalize(t)}</li>)
                                    }
                                </ul>
                            </div>


                            <div className={`${s.statCard}`}>
                                <h2 className={`${s.statTitle}`}>Abilities:</h2>
                                <ul className={`${s.list}`}>
                                    {
                                        pokemon.abilities.map(a => <li className={`${s.element}`} key={a}>{capitalize(a)}</li>)
                                    }
                                </ul>
                            </div>

                        </div>

                        <div className={`${s.statCard}`}>
                            <h2 className={`${s.statTitle}`}>Moves:</h2>
                            <ul className={`${s.list}`}>
                                {
                                    pokemon.moves.map(m => <li className={`${s.element}`} key={m}>{capitalize(m)}</li>)
                                }
                            </ul>
                        </div>

                    </article>

                    :
                    <div className={`${s.loader}`}>
                        <BallTriangle color="#d4b500" />
                    </div>
            }
        </section>
    )
}

/* ---------- */

/* ----- COMPONENT EXPORT ----- */

export default Details

/* ---------- */