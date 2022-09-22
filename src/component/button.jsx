import React from 'react'

const Button = ({label, styling, ...props}) => {
  return (
    <button {...props} className={`${styling} button border border-[#A084CA] rounded w-[80px] text-center py-1 my-1 transition-all ease-in-out`}>{label}</button>
  )
}

export default Button