import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Detail2() {
    let {id, nama} = useParams()

    return(
        <React.Fragment>
            <p>halo {nama}</p>
            <p>Ini detail ke {id}</p>
        </React.Fragment>
    )
}   