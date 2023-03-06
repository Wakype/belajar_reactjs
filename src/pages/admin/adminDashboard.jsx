import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
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
                Pendataan Barang
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
          </div>
        </div>

        <div className="px-5 cursor-pointer">
          <NavLink to={'/login'} replace={true}>
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
