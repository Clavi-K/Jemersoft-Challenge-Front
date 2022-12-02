import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { getPokemons } from '../../redux/actions/api.actions'

const Pokemons = () => {

    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)

    const [search, setSearch] = useState("")

    const searchOnChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        console.log(search)
        if (!pokemons || !pokemons.length) {
            dispatch(getPokemons())
        }
    }, [search])

    return (
        <section>

            <div>
                <h1>Jemersoft Pokemon App</h1>
                <input type="text" value={search.param} name="search" id="search" onChange={searchOnChange} />
            </div>
            <div>
                {
                    pokemons && pokemons.length ?

                        pokemonRender(pokemonSearch(search, pokemons))

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

function pokemonSearch(input, pokemons) {
    if (input.trim(" ") === "") return pokemons
    return pokemons.filter(p => p.name.includes(input))
}

export default Pokemons