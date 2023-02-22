import React from 'react';

const CustomInput = ({
  inputType,
  id,
  name,
  inputStyle,
  placeholder,
  ...props
}) => {
  return (
    <input
      {...props}
      type="text"
      name={name}
      id={id}
      placeholder={placeholder}
      className={`${inputStyle} focus:outline-none poppins transition-all ease-in-out rounded bg-[#222222] text-white py-4 px-5`}
    />
  );
};

export default CustomInput;
