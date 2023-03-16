import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const redux = useSelector((state) => state.auth);
  let navigate = useNavigate();
  let location = useLocation();
  let path1 = location.pathname.split('/')[1];
  let path2 = location.pathname.split('/')[2];
  let path3 = location.pathname.split('/')[3];

  return (
    <section className="flex">
      <header className="h-screen w-[15%] bg-black py-[50px] border-r border-r-[#00c29a] flex flex-col justify-between">
        <div className="flex flex-col items-center px-5">
          <div className="mb-10 logoT cursor-pointer text-[45px] bg-clip-text text-transparent bg-gradient-to-r from-[#00c29a] to-[#e8cd70]">
            Lelang<span className="text-[25px] logoT">Pro</span>
          </div>
          <h1 className="w-full mb-10 text-center text-black rounded py-1 px-3 bg-gradient-to-r from-[#00c29a] to-[#e8cd70]">
            Dashboard
          </h1>

          <div className="w-full flex flex-col space-y-3">
            <NavLink to={`/${path1}/${path2}/barang`}>
              <p
                className={`hover:text-black py-2 px-5 cursor-pointer hover:bg-[#00c29a] rounded ${
                  path3 === 'barang' ? 'text-black bg-[#00c29a]' : undefined
                }`}
              >
                Data Barang
              </p>
            </NavLink>
            <NavLink to={`/${path1}/${path2}/petugas`}>
              <p
                className={`hover:text-black py-2 px-5 cursor-pointer hover:bg-[#00c29a] rounded ${
                  path3 === 'petugas' ? 'text-black bg-[#00c29a]' : undefined
                }`}
              >
                Data Petugas
              </p>
            </NavLink>
            <NavLink to={`/${path1}/${path2}/laporan`}>
              <p
                className={`hover:text-black py-2 px-5 cursor-pointer hover:bg-[#00c29a] rounded ${
                  path3 === 'laporan' ? 'text-black bg-[#00c29a]' : undefined
                }`}
              >
                Laporan
              </p>
            </NavLink>
            <NavLink to={`/${path1}/${path2}/pelelangan`}>
              <p
                className={`hover:text-black py-2 px-5 cursor-pointer hover:bg-[#00c29a] rounded ${
                  path3 === 'pelelangan' ? 'text-black bg-[#00c29a]' : undefined
                }`}
              >
                Pelelangan
              </p>
            </NavLink>
          </div>
        </div>

        <div className="px-5">
          <div className='flex items-center space-x-3 rounded border border-[#00c29a] p-3 mb-[50px]'>
            <div className="w-[35px] h-[35px] rounded-full bg-[#00c29a] flex items-center justify-center">
              <FaUserAlt />
            </div>
            <div className='w-full'>
              <p>{redux?.username}</p>
              <div className='w-full h-[2px] bg-[#00c29a]'></div>
              <p>{redux?.role}</p>
            </div>
          </div>
          <NavLink to={'/login'} replace={true} className={'cursor-pointer'}>
            <div className="flex items-center space-x-2 border border-red-500 rounded py-1 justify-center transition-all ease-in-out hover:bg-red-500 hover:border-red-500">
              <FiLogOut color="white" size={20} />
              <p className="transition-all ease-in-out">Logout</p>
            </div>
          </NavLink>
        </div>
      </header>

      <body className="w-[85%]">
        <Outlet />
      </body>
    </section>
  );
};

export default AdminDashboard;
