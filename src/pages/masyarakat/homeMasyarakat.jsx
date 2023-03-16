import React, { useEffect, useState } from 'react';
import { CardLelang, CustomButton, CustomHeader } from '../../components';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as dayjs from 'dayjs';
import { getBarang } from '../../api/barangApi';
import { getLelang } from '../../api/lelangApi';
const convertRupiah = require('rupiah-format');

const HomeMasyarakat = () => {
  const dispatch = useDispatch();
  const redux = useSelector((state) => state.auth);
  const [page, setPage] = useState(1);
  const [barang, setBarang] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetBarang = async () => {
    try {
      setIsLoading(true);
      let response = await getLelang(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        8
      );

      setBarang(response?.data?.data?.rows);
    } catch (err) {
      console.log('barangerr', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetBarang();
  }, []);
  return (
    <section className="">
      <header className="px-[30px] h-[85px] bg-black sticky top-0 z-50">
        <CustomHeader />
      </header>

      <body className=" bg-[#092742]">
        <section className='w-screen h-[700px] mb-[50px] flex justify-around items-center px-[30px] bg-cover bg-[url("https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80")]'>
          <div>
            <div>
              <h1 className="text-[40px] font-semibold w-[600px]">
                Jelajahi dan Tawar barang yang anda inginkan
              </h1>
              <p className="w-[600px] text-[#C9D1D9]">
                Dengan menawar barang yang anda pilih anda dapat berkesempatan
                untuk mengikuti serta memenangkan lelang!
              </p>
              <p className="text-red-800 italic">
                # Syarat dan Ketentuan berlaku.
              </p>
            </div>

            <div>
              <NavLink to={'/penawaran'}>
                <CustomButton
                  label={'Lihat Penawaran'}
                  stylingP={'text-black'}
                  stylingButton={
                    'w-[250px] mt-10 py-3 border-none bg-gradient-to-r from-[#00c29a] to-[#e8cd70] hover:to-[#00c29a] hover:from-[#e8cd70] hover:translate-x-1'
                  }
                />
              </NavLink>
            </div>
          </div>

          <div>
            <img
              src="http://media.kemenkeu.go.id/getmedia/41d22bd3-d976-452f-9afc-6a6f98ead43a/logo-kementerian-keuangan-356.png?width=356&height=332&ext=.png"
              alt=""
              className="w-[300px]"
            />
          </div>
        </section>

        <section className="flex flex-col px-[80px] space-y-10">
          <div className="flex justify-between items-center">
            <h1 className="text-[35px] font-semibold">
              Lelang{' '}
              <span className="text-[17px] font-normal rounded bg-red-500 px-3">
                Sedang berlangsung
              </span>
            </h1>
            <NavLink to={'/penawaran'}>
              <p className="italic underline cursor-pointer hover:text-[#00c29a] ease-in-out transition-all">
                Lihat semua
              </p>
            </NavLink>
          </div>

          <div className="grid grid-cols-4 justify-items-center gap-x-[50px] gap-y-[50px]">
            {barang.map((item, index) => {
              return (
                <div key={index}>
                  <CardLelang
                    id_lelang={item.id}
                    id={item.barang.id}
                    hargaAwal={convertRupiah.convert(item.barang.hargaAwal)}
                    namaBarang={item.barang.namaBarang}
                    status={
                      item.status === 'dibuka' ? (
                        <p className="text-white rounded bg-green-500 w-fit px-3 text-[14px] absolute right-3 top-3">{item.status}</p>
                      ) : (
                        <p className="text-white rounded bg-red-500 w-fit px-3 text-[14px] absolute right-3 top-3">{item.status}</p>
                      )
                    }
                    tanggalLelang={dayjs(item.barang.tanggal).format(
                      'DD MMM YYYY'
                    )}
                    namaUser={item.petugas.namaPetugas}
                    hargaAkhir={convertRupiah.convert(item.hargaAkhir)}
                  />
                </div>
              );
            })}
          </div>

          <div>
            <NavLink to={'/penawaran'}>
              <CustomButton
                label={'Lihat selebihnya'}
                stylingP={'hover:text-white'}
                stylingButton={
                  ' border-[#00c29a] w-full hover:bg-[#00c29a] cursor-pointer py-2 mb-[100px]'
                }
              />
            </NavLink>
          </div>
        </section>
      </body>

      <footer className="bg-black h-[500px] border-t-[3px] border-[#00c29a]"></footer>
    </section>
  );
};

export default HomeMasyarakat;
