import React from 'react'

const CustomButton = ({typeButton, tag, label, stylingButton, stylingDiv, ...props}) => {
  return (
    <div className={`${stylingDiv} w-full`}>
        <button {...props} type={typeButton} className={`${stylingButton} focus:outline-none before:input-text border-2 border-green-500 rounded py-[5px] transition-all ease-in-out text-white poppins`}>
            {tag}
            <p>{label}</p>
        </button>
    </div>
  )
}

export default CustomButton