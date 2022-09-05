import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

export default function Detail() {
    let {id, fullname} = useParams()
    let navigate = useNavigate()

    return(
        <React.Fragment>
            <section className="space-x-10">
                <Link to={'/about/2/waky'}>Waky</Link>
                <Link to={'/about/:id/:nama'}>Hilmi</Link>
                <Link to={'/about/:id/:nama'}>Siapa</Link>
            </section>
            <button className="border border-green-500 rounded py-2 px-4 mt-3" onClick={() => {return navigate("/home")}}>Home</button>
            <p>Ini detail ke {id} & {fullname}</p>
        </React.Fragment>
    )
}   