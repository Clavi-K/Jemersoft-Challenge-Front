/* ----- REQUIRED IMPORTS ----- */

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

import { getPokemons } from '../../redux/actions/api.actions'
import s from "./style.module.css"

/* ---------- */

const Landing = () => {

    /* ----- REDUX ----- */

    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)

    /* ---------- */

    /* ----- STATE DISPTACH ----- */

    useEffect(() => {
        if (!pokemons || pokemons.length) dispatch(getPokemons(10, pokemons ? pokemons.length : 0))
    }, [])

    /* ---------- */

    /* ----- COMPONENT ----- */

    return (
        <section>
            <div className={`${s.title}`} >Jemersoft Pokemon App</div>
            <Link className={`${s.button}`} to="/pokemons">Click Me</Link>
        </section>
    )

    /* ---------- */

}

/* ----- COMPONENT EXPORT ----- */

export default Landing

/* ---------- */