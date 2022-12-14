import React from 'react'

const CustomButton = ({typeButton, tag, label, stylingButton, stylingDiv, stylingText, ...props}) => {
  return (
    <div className={`${stylingDiv} w-full`}>
        <button {...props} type={typeButton} className={`${stylingButton} focus:outline-none before:input-text border-2 rounded py-[5px] transition-all ease-in-out text-white poppins`}>
            {tag}
            <p className={`${stylingText}`}>{label}</p>
        </button>
    </div>
  )
}

export default CustomButton