import React from 'react'
import { Link } from 'react-router-dom'

import s from "./style.module.css"

const Landing = () => {
    return (
        <section>
            <div className={`${s.title}`} >Pokemon App Landing</div>
            <Link className={`${s.button}`} to="/pokemons">Press Me</Link>
        </section>
    )
}

export default Landing