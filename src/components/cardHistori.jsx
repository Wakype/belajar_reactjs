import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

const CardHistori = ({
  gambar,
  nama,
  jumlah,
  stok,
  rating,
  harga,
  total,
  key,
}) => {
  return (
    <section
      className="w-full h-[200px] rounded-[10px] border-2 border-black bg-[#395144] p-5 mb-5"
      key={key}
    >
      <div className="flex h-full w-full">
        <div className="w-[220px] h-full mr-5 border-2 border-black rounded-[10px] flex items-center">
          <img src={gambar} alt="" className="rounded-[10px] w-full h-full" />
        </div>

        <div className="flex flex-col h-full justify-between w-full">
          <div>
            <h1 className="text-white font-semibold text-[20px]">{nama}</h1>
            <div className="flex  justify-between">
              <p className="text-white">{harga}</p>
              <div>
                <p className="text-white">Rating: {rating}</p>
                <p className="text-white">Jumlah: {jumlah}</p>
              </div>
            </div>
          </div>
          <div className="text-white flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-white">Total Harga:</p>
              <p className="text-white font-semibold text-[20px]">{total}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardHistori;
