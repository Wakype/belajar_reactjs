import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components';
import { getBarang } from '../../api/barangApi';
import * as dayjs from 'dayjs';
import rupiahFormat from 'rupiah-format';
import { useQuery, useQueryClient } from 'react-query';

const ListBarang = () => {
  const [page, setPage] = useState(1);
  const convertRupiah = require('rupiah-format');
  let navigate = useNavigate();
  let location = useLocation();
  let path1 = location.pathname.split('/')[1];
  let path2 = location.pathname.split('/')[2];
  let path3 = location.pathname.split('/')[3];

  const queryClient = useQueryClient();
  let { isLoading, data, isError } = useQuery('barang', () => getBarang());
  return (
    <section className="w-full h-screen bg-[#092742] py-[50px] px-[50px]">
      <div className="mb-[70px]">
        <h1 className="text-[25px] font-semibold">Pendataan Barang</h1>
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center mb-5">
          <div>
            <p>
              {path1} &gt; {path2} &gt;{' '}
              <span className="text-[#00c29f]">{path3}</span>
            </p>
          </div>
          <div>
            <NavLink to={`/${path1}/${path2}/${path3}/tambah-barang`}>
              <CustomButton
                label={'Tambah barang'}
                stylingButton={'border-[#00c29f] hover:bg-[#00c29f]'}
              />
            </NavLink>
          </div>
        </div>

        <table class="table-auto w-full border border-[#00c29a] rounded">
          <thead className="">
            <tr className="border border-[#00c29a] h-[50px] rounded bg-[#00c29a]">
              <th className="w-[50px]">#</th>
              <th className="text-left">Gambar</th>
              <th className="text-left">Nama Barang</th>
              <th className="text-left">Tanggal Lelang</th>
              <th className="text-left">Harga Awal</th>
              <th className="text-left">Deskripsi Barang</th>
              <th className="text-left">Aksi</th>
            </tr>
          </thead>
          {isLoading ? (
            'loading'
          ) : (
            <tbody className="">
              {data?.data?.data?.rows?.map((item, index) => {
                return (
                  <tr key={index} className="mb-5">
                    <td className="text-center">{item.id}</td>
                    <td>No image</td>
                    <td>{item.namaBarang}</td>
                    <td>{dayjs(item.tanggal).format('DD MMM YYYY')}</td>
                    <td>{convertRupiah.convert(item.hargaAwal)}</td>
                    <td className="line-clamp-2 w-[300px] flex items-center ">
                      <p className="pt-3">{item.deskripsiBarang}</p>
                    </td>
                    <td className="mb-5 ">
                      <div className="flex pr-5 py-5 w-full justify-center space-x-3">
                        <CustomButton
                          label={'hapus'}
                          stylingButton={
                            'w-full border-red-500 hover:bg-red-500'
                          }
                        />
                        <CustomButton
                          label={'Edit'}
                          stylingButton={
                            'w-full border-yellow-500 hover:bg-yellow-500'
                          }
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
    </section>
  );
};

export default ListBarang;
