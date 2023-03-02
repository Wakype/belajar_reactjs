import React from 'react';

const CustomSelect = ({
  id,
  name,
  selectStyle,
  isError,
  textError,
  value,
  children,
  ...props
}) => {
  return (
    <div className="w-full">
      <select
        {...props}
        name={name}
        value={value}
        id={id}
        className={`${selectStyle} focus:outline-none poppins transition-all ease-in-out rounded bg-[#222222] text-white py-4 px-5`}
      >
        {children}
      </select>
      {isError && <p className="text-red-500 italic">{textError}</p>}
    </div>
  );
};

export default CustomSelect;
