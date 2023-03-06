import React from 'react';

const CustomTextArea = ({
  inputType,
  id,
  cols = 30,
  rows = 10,
  name,
  inputStyle,
  placeholder,
  isError,
  textError,
  maxLength,
  ...props
}) => {
  return (
    <div className="w-full">
      <textarea
        {...props}
        name={name}
        id={id}
        maxLength={maxLength}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        className={`${inputStyle} focus:outline-none poppins transition-all ease-in-out rounded bg-[#222222] text-white py-4 px-5`}
      ></textarea>
      {isError && <p className="text-red-500 italic">{textError}</p>}
    </div>
  );
};

export default CustomTextArea;
