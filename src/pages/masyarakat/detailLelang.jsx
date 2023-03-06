import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { CustomHeader } from '../../components';

const DetailLelang = () => {
  return (
    <section>
      <header className="px-[30px] h-[85px] bg-black sticky top-0 z-50">
        <CustomHeader />
      </header>

      <body className=" bg-[#092742] h-screen"></body>
    </section>
  );
};

export default DetailLelang;
