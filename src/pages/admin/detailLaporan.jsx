import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { SearchButton } from '../../components';

const DetailLaporan = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  const [path1, path2, path3, path4] = location.pathname.split('/').slice(1);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <section className="w-full h-screen bg-[#092742] py-[50px] px-[50px]">
      <div className="mb-[70px]">
        <h1 className="text-[25px] font-semibold">Detail Laporan</h1>
      </div>

      <div className='w-full'>
        <div className="flex justify-between items-center mb-5">
          <div>
            <p>
              {path1} &gt; {path2} &gt; {path3} &gt;{' '}
              <span className="text-[#00c29f]">{path4}</span>
            </p>
          </div>

          <div className="flex">
            <SearchButton />
          </div>
        </div>

        <div>
          <h1 className='logoT tracking-wider text-black text-[25px] px-5 rounded bg-[#00c29a] w-fit uppercase'>Penawaran Tertinggi</h1>
          <table className='table-fixed w-full px-10'>
            <tr>
              <th></th>
            </tr>
            <tr>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DetailLaporan;
