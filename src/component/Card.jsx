import React from 'react'
import Button from './Button'

const Card = ({title, body, createdAt, id, handleDelete}) => {
  return (
    <div className="border-2 p-5 h-72 w-full shadow-lg rounded-lg space-y-2 border-green-500">
        <div className="h-1/5">
            <h5 className="text-xl uppercase">{title}</h5>
            <p className="text-xs italic">{createdAt}</p>
        </div>

        <div className="text-justify h-3/5">{body}</div>

        <div className="grid grid-cols-2 gap-5">
            <Button value={id} type="button" title={"Delete"} bg="red" onClick={handleDelete}/>
            <Button value={id} title="Arsipkan" bg="blue"/>
        </div>
    </div>
  )
}

export default Card