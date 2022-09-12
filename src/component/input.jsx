import React from 'react'

const Input = ({label, ...props}) => {
  return (
    <section className="my-2">
      <h1 className="">{label}</h1>
      <input {...props} type="text" className="border-2 w-[300px] border-green-500 rounded py-[5px]"/>
    </section>
  )
}

export default Input