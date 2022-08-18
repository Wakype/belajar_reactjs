import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Detail() {
    let {id, nama} = useParams()

    return(
        <React.Fragment>
            <section className="space-x-10">
                <Link to={'/about/:id/:nama'}>Waky</Link>
                <Link to={'/about/:id/:nama'}>Hilmi</Link>
                <Link to={'/about/:id/:nama'}>Siapa</Link>
            </section>
            <p>Ini detail ke {id}</p>
        </React.Fragment>
    )
}   