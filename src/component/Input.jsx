import React from 'react'

const Input = ({title, error = false, ...props}) => {
  return (
    <div className="flex flex-col relative">
      <input {...props} id={title} className={`${error ? "border-red-500 border-2" : ""} border w-full rounded-md px-2 py-1 border-green-700`}/>

      {error && <p className="text-red-500 text-sm italic">Isi Input tidak sesuai</p>}
    </div>
  )
}

export default Input
