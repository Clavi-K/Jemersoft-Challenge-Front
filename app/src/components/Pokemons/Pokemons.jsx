/* ----- REQUIRED IMPORTS ----- */

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { BallTriangle } from "react-loader-spinner"

import s from "./style.module.css"
import { capitalize } from '../../utils'
import { getPokemons } from '../../redux/actions/api.actions'

/* ---------- */

const Pokemons = () => {

    /* ----- REDUX ----- */

    const dispatch = useDispatch()
    let pokemons = useSelector(state => state.pokemons)

    /* ---------- */


    /* ----- LOCAL STATES ----- */

    const [search, setSearch] = useState("")
    const [maxIndex, setMaxIndex] = useState(10)

    /* ---------- */


    /* ----- DISPATCH STATE ----- */

    useEffect(() => {
        console.log(maxIndex, pokemons.length)
        dispatch(getPokemons(maxIndex, pokemons.length))
    }, [maxIndex])

    /* ---------- */

    /* ----- SEARCH BAR LISTENER ----- */

    const searchOnChange = (e) => {
        setSearch(e.target.value)
    }

    /* ---------- */

    /* ----- SEARCH BAR FILTER ----- */

    if (pokemons && pokemons.length) {
        pokemons = pokemonSearch(search, pokemons)
    }

    /* ---------- */

    /* ----- PAGINATION LISTENER ----- */

    const paginationOnClick = e => {

        if (e.target.name === "+") {
            if (maxIndex < 1144) setMaxIndex((curr) => { return curr + 10 })
        } else {
            if (maxIndex > 10) setMaxIndex((curr) => { return curr - 10 })
        }
    }

    /* ---------- */

    /* ----- PAGINATION FILTER ----- */

    const upperLimit = maxIndex <= pokemons.length ? maxIndex : pokemons.length
    const lowerLimit = upperLimit - 10 > 0 ? upperLimit - 10 : 0

    const currentPokemons = pokemons && pokemons.length ? pokemons.slice(lowerLimit, upperLimit) : null

    /* ---------- */

    console.log(pokemons)

    return (
        <section>

            <div className={`${s.navbar}`}>
                <h1>Jemersoft Pokemon App</h1>
                <input className={`${s.searchbar}`} type="text" value={search.param} name="search" id="search" onChange={searchOnChange} placeholder="🔎 Search for pokemons here" />
            </div>

            <hr />

            <div className={`${s.container}`}>
                {
                    currentPokemons && currentPokemons.length ?

                        pokemonRender(currentPokemons)

                        :

                        <div className={`${s.loader}`}>
                            <BallTriangle color="#d4b500" />
                        </div>
                }

            </div>

            <div>
                <button name='-' onClick={paginationOnClick}>⬅</button>
                <button name='+' onClick={paginationOnClick}>➡</button>
            </div>

        </section>
    )
}

/* ----- LOCAL FUNCTIONS ----- */

function pokemonRender(pokemons) {

    return pokemons.map(p =>
        <article className={`${s.card}`} key={p.id}>
            <img className={`${s.image}`} src={p.img} alt={p.name} />
            <h1 className={`${s.title}`}>{capitalize(p.name)}</h1>

            <div className={`${s.info}`}>
                <h2>Types:</h2>
                <ul>
                    {
                        p.types.map(t => <li key={t}>{capitalize(t)}</li>)
                    }
                </ul>
            </div>

            <div className={`${s.info}`}>
                <h2>Abilities:</h2>
                <ul>
                    {
                        p.abilities.map(a => <li key={a}>{capitalize(a)}</li>)
                    }
                </ul>
            </div>

            <div className={`${s.info}`}><h2>Weight: {p.weight}kg</h2></div>

            <Link className={`${s.button}`} to={`/pokemon/${p.id}`}>Details</Link>

        </article>)

}

function pokemonSearch(input, pokemons) {
    if (input.trim(" ") === "") return pokemons
    return pokemons.filter(p => p.name.includes(input))
}

/* ---------- */

/* ----- COMPONENT EXPORT ----- */

export default Pokemons

/* ---------- */