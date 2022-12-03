/* ----- REQUIRED IMPORTS ----- */

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { BallTriangle } from "react-loader-spinner"

import s from "./style.module.css"
import { capitalize } from '../../utils'
import { getPokemons } from '../../redux/actions/api.actions'
import Pagination from '../Pagination/Pagination'

/* ---------- */

const Pokemons = () => {

    /* ----- REDUX ----- */

    const dispatch = useDispatch()
    let pokemons = useSelector(state => state.pokemons)

    /* ---------- */

    /* ----- LOCAL STATES ----- */

    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    /* ---------- */


    const postsPerPage = 10

    /* ----- DISPATCH STATE ----- */

    useEffect(() => {
        if (!pokemons || !pokemons.length) {
            dispatch(getPokemons())
        }
    }, [search])

    /* ---------- */

    /* ----- SEARCH BAR LISTENER ----- */

    const searchOnChange = (e) => {
        setSearch(e.target.value)
        setCurrentPage(1)
    }

    /* ---------- */

    /* ----- SEARCH BAR FILTER ----- */

    if (pokemons && pokemons.length) {
        pokemons = pokemonSearch(search, pokemons)
    }

    /* ---------- */

    /* ----- PAGINATION FILTER ----- */

    const lasPostIndex = currentPage * postsPerPage
    const firstPostIndex = lasPostIndex - postsPerPage

    const currentPokemons = pokemons && pokemons.length ? pokemons.slice(firstPostIndex, lasPostIndex) : null

    /* ---------- */

    return (
        <section>

            <div className={`${s.navbar}`}>
                <h1>Jemersoft Pokemon App</h1>
                <input className={`${s.searchbar}`} type="text" value={search.param} name="search" id="search" onChange={searchOnChange} placeholder="🔎 Search for pokemons here" />
            </div>

            <hr />

            <div className={`${s.container}`}>
                {
                    pokemons && pokemons.length ?

                        pokemonRender(currentPokemons)

                        :

                    <div className={`${s.loader}`}>
                        <BallTriangle color="#d4b500"/>
                    </div>
                }

            </div>

            <Pagination totalPosts={pokemons ? pokemons.length : 0} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />

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