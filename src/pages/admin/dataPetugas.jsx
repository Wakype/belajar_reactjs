import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components';
import { getPetugsas } from '../../api/userApi';
import { useQuery, useQueryClient } from 'react-query';

const DataPetugas = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let path1 = location.pathname.split('/')[1];
  let path2 = location.pathname.split('/')[2];
  let path3 = location.pathname.split('/')[3];

  const queryClient = useQueryClient();
  let { isLoading, data, isError } = useQuery('petugas', () => getPetugsas());
  return (
    <section className="w-full h-screen bg-[#092742] py-[50px] px-[50px]">
      <div className="mb-[70px]">
        <h1 className="text-[25px] font-semibold">Pendataan Petugas</h1>
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center mb-5">
          <div>
            <p>
              {path1} &gt; {path2} &gt;{' '}
              <span className="text-[#00c29f]">{path3}</span>
            </p>
          </div>
        </div>

        <table class="table-auto w-full border border-[#00c29a] rounded">
          <thead className="">
            <tr className="border border-[#00c29a] h-[50px] rounded bg-[#00c29a]">
              <th className="w-[50px]">#</th>
              <th className="text-left">Nama Petugas</th>
              <th className="text-left">Username</th>
              <th className="text-left">Role</th>
              <th className="text-left">Aksi</th>
            </tr>
          </thead>
          {isLoading ? (
            'loading'
          ) : (
            <tbody className="">
              {data?.data?.data?.rows?.map((item, index) => {
                return (
                  <tr className="mb-5" key={index}>
                    <td className="text-center">{item.id}</td>
                    <td>{item.namaPetugas}</td>
                    <td>{item.username}</td>
                    <td>{item.role.level}</td>
                    <td className="mb-5 ">
                      <div className="flex pr-5 py-5 w-full justify-center space-x-3">
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

export default DataPetugas;
