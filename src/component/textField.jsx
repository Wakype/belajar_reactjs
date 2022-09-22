import React from 'react'

const TextArea = ({label, styling, error = false, errorText, ...props}) => {
  return (
    <section className="my-2 w-auto">
      <h1 className="">{label}</h1>
      <textarea {...props} className={`${styling} border-2 border-[#A084CA] rounded py-[5px]`}/>
      {error && <p className="text-red-500 text-sm italic">{errorText}</p>}
    </section>
  )
}

export default TextArea