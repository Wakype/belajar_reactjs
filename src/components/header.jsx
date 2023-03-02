import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const CustomHeader = ({
  username = 'Namalengkap | username',
  telp = '+62 84024937258',
}) => {
  return (
    <section className="justify-between flex items-center h-full">
      <div className="flex items-center space-x-10">
        <NavLink to={'/beranda'}>
          <h1 className=" logoT cursor-pointer text-[45px] bg-clip-text text-transparent bg-gradient-to-r from-[#00c29a] to-[#e8cd70]">
            Lelang<span className="text-[25px] logoT">Pro</span>
          </h1>
        </NavLink>
        <div className="flex items-center space-x-5">
          <NavLink to={'/beranda'}>
            <h1 className="cursor-pointer hover:text-[#00c29a] ease-in-out transition-all">
              Beranda
            </h1>
          </NavLink>
          <NavLink to={'/penawaran'}>
            <h1 className="cursor-pointer hover:text-[#00c29a] ease-in-out transition-all">
              Penawaran
            </h1>
          </NavLink>
        </div>
      </div>

      <div className="flex items-center space-x-5">
        <div className="text-white flex items-center space-x-3">
          <div className="w-[35px] h-[35px] rounded-full bg-gray-800 flex items-center justify-center">
            <FaUserAlt />
          </div>
          <div>
            <p className="text-[14px]">{username}</p>
            <p className="text-[12px]">{telp}</p>
          </div>
        </div>
        <span className="w-[1px] h-[30px] bg-white"></span>
        <div className="cursor-pointer">
          <NavLink to={'/login'} replace={true}>
            <FiLogOut color="white" size={20} />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CustomHeader;
