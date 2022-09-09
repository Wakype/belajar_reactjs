import React from "react";

const CardQuran = ({ nomor, nama, namaLatin, tempatTurun, arti }) => {
  return (
    <section className="flex justify-center">
      <div className="w-[700px] my-7 bg-[#30304D] rounded-tr-2xl rounded-bl-2xl ">
        <div className="flex text-xl text-[#502FEC] border-b-[0.2px] border-white py-3">
          <h1 className="mr-2 pl-5">{nomor}.</h1>
          <h1 className="">{namaLatin}</h1>
        </div>
        <div className="text-right text-4xl text-[#502FEC] my-5 px-5 py-2">
          <h1 className="">{nama}</h1>
        </div>
        <div className="flex justify-end text-white px-5 py-2">
          <p>{tempatTurun}</p>
          <p className="mx-2">•</p>
          <p>{arti}</p>
        </div>
      </div>
    </section>
  );
};

export default CardQuran;
