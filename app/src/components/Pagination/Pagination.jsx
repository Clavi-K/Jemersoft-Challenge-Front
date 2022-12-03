/* ----- REQUIRED IMPORTS ----- */

import React from 'react'

import s from "./style.module.css"

/* ---------- */

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {

    let pages = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }

    /* ----- COMPONENT ----- */

    return (
        <section className={`${s.container}`}>
            <button className={`${s.button} ${s.arrow}`} onClick={() => setCurrentPage((curr) => { return curr > 1 ? curr - 1 : curr })}>⬅</button>
            {
                pages.map((p, index) => {
                    return <button className={`${s.button} ${s.number}`} key={index} onClick={() => setCurrentPage(p)}>{p}</button>
                })
            }
            <button className={`${s.button} ${s.arrow}`} onClick={() => setCurrentPage((curr) => { return curr < pages.length ? curr + 1 : curr })}>➡</button>
        </section>
    )

    /* ---------- */
}

/* ----- COMPONENT EXPORT ----- */

export default Pagination

/* ---------- */