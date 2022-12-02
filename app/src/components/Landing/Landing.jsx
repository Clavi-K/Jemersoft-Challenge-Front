import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

import { getPokemons } from '../../redux/actions/api.actions'
import s from "./style.module.css"

const Landing = () => {

    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)

    useEffect(() => {
        if(!pokemons || pokemons.length) dispatch(getPokemons())
    }, [])

    console.log(pokemons)

    return (
        <section>
            <div className={`${s.title}`} >Pokemon App Landing</div>
            <Link className={`${s.button}`} to="/pokemons">Press Me</Link>
        </section>
    )
}

export default Landing