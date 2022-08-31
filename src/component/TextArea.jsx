import React from 'react'

const TextArea = ({title, error = false, ...props}) => {
  return (
    <div className="flex flex-col">
      <textarea cols="50" rows="10" {...props} id={title} className={`${ error ? "border-red-500 border-2" : ""} border w-full rounded-md px-2 py-1 border-green-700 bg-transparent`}></textarea>

      {error && <p className="text-red-500 text-sm italic">Wajib diisi</p>}
    </div>
  )
}

export default TextArea
