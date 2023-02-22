import React from 'react';

const SosmedLog = ({ icon, label, stylingP, stylingDiv, ...props }) => {
  return (
    <div
      className={`${stylingDiv} flex items-center py-4 px-5 transition-all ease-in-out border rounded cursor-pointer`}
    >
      <div className={`changeColor`}>{icon}</div>
      <p
        className={`${stylingP} transition-all ease-in-out text-white poppins hover:text-black`}
      >
        {label}
      </p>
    </div>
  );
};

export default SosmedLog;
