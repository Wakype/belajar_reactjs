import React from 'react';
import { NavLink } from 'react-router-dom';
import { CustomHeader } from '../../components';

const Penawaran = () => {
  return (
    <section>
      <header className="px-[30px] h-[85px] bg-black sticky top-0 z-50">
        <CustomHeader />
      </header>

      <body className=" bg-[#092742] h-screen"></body>
    </section>
  );
};

export default Penawaran;
