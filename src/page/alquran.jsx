import React from "react";
import axios from "axios";
import CardQuran from "./cardQuran";

const Alquran = () => {
  const [quran, setQuran] = React.useState([]);

  const getUserHandle = async () => {
    try {
      const response = await axios.get(`https://equran.id/api/surat`);
      console.log("Response =>", response.data);

      setQuran(response.data);
      //   setPage(response.data.page);
    } catch (err) {}
  };

  React.useEffect(() => {
    getUserHandle();
  }, []);

  return (
    <section className="bg-[#22223D] flex items-center flex-col">
        <div className="flex items-center text-white flex-row w-full bg-[#30304D] border-b border-b-[#45455F] h-[60px] text-3xl px-10 justify-between">
            <h1>EQuran.id</h1>
            <h1>Daftar Surat</h1>
        </div>

      <div className="grid grid-cols-3 w-[80%] gap-5">
        {quran.map((item, index) => {
          return (
            <div key={index}>
              <CardQuran
                nomor={item.nomor}
                nama={item.nama}
                namaLatin={item.nama_latin}
                tempatTurun={item.tempat_turun}
                arti={item.arti}
              />
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center py-3"> 
        <div className="border border-white w-[50px]"></div>
        <p className="text-white">Made with Love from Indonesia © 2022 All Right Reserved.</p>
      </div>
    </section>
  );
};

export default Alquran;
