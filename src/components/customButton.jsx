import React from 'react';

const CustomButton = ({
  label,
  stylingButton,
  stylingDiv,
  stylingP,
  ...props
}) => {
  return (
      <button
        {...props}
        className={`${stylingButton}  transition-all ease-in-out poppins border  rounded py-1 px-3`}
      >
        <p className={`${stylingP} transition-all ease-in-out `}>{label}</p>
      </button>
  );
};

export default CustomButton;
