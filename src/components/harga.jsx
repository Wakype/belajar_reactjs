import React from 'react';

const HargaBarang = ({ harga, style }) => {
  return (
    <div className="">
      <p className={`${style} text-white font-semibold text-[20px] items-center`}>{harga}</p>
    </div>
  );
};

export default HargaBarang;
