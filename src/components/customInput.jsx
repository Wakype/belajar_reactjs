import React from 'react';

export default function CustomInput({
  typeInput,
  stylingLabel,
  stylingInput,
  label,
  isError,
  textError,
  ...props
}) {
  return (
    <div className="input mt-2">
      <h1>
        <label className={`${stylingLabel} label cursor-pointer poppins text-white`} htmlFor={label}>
          {label} 
        </label>
      </h1>

      <input
        {...props}
        className={`${stylingInput} focus:outline-none poppins input-text border-2 border-green-500 rounded  py-[5px] transition-all ease-in-out bg-transparent`}
        type={typeInput}
        id={label}
      />
      {isError && <p className="error">{textError}</p>}
    </div>
  );
}
