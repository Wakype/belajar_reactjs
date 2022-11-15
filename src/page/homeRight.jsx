import React from 'react';
import wa from '../assets/images/wa.png';

const HomeRight = () => {
  return (
    <section className=" h-full w-[70%]  bg-[#222e35]">
      <div className="w-full h-full flex flex-col justify-between">
      <div className="w-full bg-[#008069]"></div>
        <img src={wa} alt="" className="" />
        <div className="w-full h-2 bg-[#008069]"></div>
      </div>
    </section>
  );
};

export default HomeRight;
