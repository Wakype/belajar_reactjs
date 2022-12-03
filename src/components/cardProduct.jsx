import React from 'react';
import { FaStar } from 'react-icons/fa';

const CardProduct = ({ image, barang, harga, rating, ...props }) => {
  return (
    <section className="hover:scale-105 flex flex-col justify-between cursor-pointer w-[280px] h-[300px] rounded-[10px] bg-[#395144] border-2 border-black px-[10px] py-[7px] transition-all ease-in-out duration-[300ms]">
      <div className="bg-white w-full h-[180px] border-black border-2 rounded-[10px] overflow-hidden flex justify-center items-center">
        <img src={image} alt="" className="w-fit h-fit"/>
      </div>

      <div className="text-white">
        <p className="poppins line-clamp-2 text-[14px] ">{barang}</p>
        <h1 className="poppins text-[18px] font-semibold">{harga}</h1>

        <div className="flex items-center space-x-2">
          <FaStar />
          <p className="poppins">{rating}</p>
        </div>
      </div>
    </section>
  );
};

export default CardProduct;
