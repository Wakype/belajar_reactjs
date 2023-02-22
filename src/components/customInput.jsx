import React from 'react';

const CustomInput = ({
  inputType,
  id,
  name,
  inputStyle,
  placeholder,
  isError,
  textError,
  ...props
}) => {
  return (
    <div className="w-full">
      <input
        {...props}
        type={inputType}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`${inputStyle} focus:outline-none poppins transition-all ease-in-out rounded bg-[#222222] text-white py-4 px-5`}
      />
      {isError && <p className="text-red-500 italic">{textError}</p>}
    </div>
  );
};

export default CustomInput;
