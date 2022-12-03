import React from 'react';
import logo from '../assets/images/logo.png';
import {
  FaArrowUp,
  FaFilter,
  FaShoppingCart,
  FaUserCircle,
} from 'react-icons/fa';
import { CardProduct } from '../components';
import { useSelector } from 'react-redux';

const Home = () => {
  let [status, setStatus] = React.useState(false);
  const author = useSelector((state) => state.auth);
  return (
    <section className="">
      <header className="sticky top-0 z-50 w-full h-[80px] bg-[#395144] border-b-2 border-b-black drop-shadow-xl px-[50px] flex justify-between items-center">
        <section>
          <img src={logo} alt="" className="w-[40px]" />
        </section>

        <section className="flex justify-between items-center space-x-7">
          <div>
            <FaShoppingCart color="ffffff" size={20} />
          </div>

          <div className="w-[2px] h-[30px] bg-white"></div>

          <div className="flex items-center space-x-[15px]">
            <p className="text-white poppins font-light">{author?.name}</p>
            <FaUserCircle color="ffffff" size={25} />
          </div>
        </section>
      </header>

      <body className="px-[50px] flex justify-between my-[30px] relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return (
              <div key={index}>
                <CardProduct
                  barang={
                    'Gigabyte VGA GeForce RTX™ 3080 Ti EAGLE OC (GV-N308TEAGLE OC-12GD)'
                  }
                  harga={'Rp11.790.000'}
                  image={
                    'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/11/24/3bbfa1df-5026-457c-acc0-d62f9052ae00.jpg.webp?ect=3g'
                  }
                  rating={'5.0'}
                />
              </div>
            );
          })}
        </div>

        <div className="w-[250px] h-[885px] rounded-[10px] border-2 border-black bg-[#395144] p-[30px]">
          <div className="flex items-center space-x-2 text-[18px]">
            <FaFilter color="ffffff" />
            <p className="text-white poppins">Filter</p>
          </div>
        </div>
      </body>
    </section>
  );
};

export default Home;
