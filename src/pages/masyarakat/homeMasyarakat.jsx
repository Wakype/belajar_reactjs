import React from 'react';
import { CardLelang, CustomButton, CustomHeader } from '../../components';
import { NavLink } from 'react-router-dom';

const HomeMasyarakat = () => {
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

          <div className="grid grid-cols-4 justify-items-center gap-x-[50px] gap-y-[20px]">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
              return (
                <div key={index}>
                  <CardLelang />
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
