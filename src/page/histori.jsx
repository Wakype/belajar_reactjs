import React from 'react';
import logo from '../assets/images/logo.png';
import { FaFilter, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { TiArrowSortedDown } from 'react-icons/ti';
import { CardHistori, CardProduct, CustomInput } from '../components';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { GetProduct, GetKategori, GetHistory } from '../api/homeAPI';
import rupiahFormat from 'rupiah-format';
import { BsClockHistory } from 'react-icons/bs';

const Histori = () => {
  const convertRupiah = require('rupiah-format');
  const author = useSelector((state) => state.auth);
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const historiHandle = async (e) => {
    // e.preventDefault();
    try {
      let response = await GetHistory();
      console.log('responseHistori', response);
      setProduct(response.data.data);
    } catch (err) {
      console.log('responseErr =>', err);
    } finally {
      setLoading(true);
    }
  };

  React.useEffect(() => {
    historiHandle();
  }, []);
  return (
    <section className="w-full">
      <header className="sticky top-0 z-50 w-full h-[80px] bg-[#395144] border-b-2 border-b-black drop-shadow-xl px-[50px] flex justify-between items-center">
        <section className="flex items-center">
          <NavLink to={'/home'}>
            <img src={logo} alt="" className="w-[40px] " />
          </NavLink>
        </section>

        <section className="flex justify-between items-center space-x-7">
          <div className="flex items-center space-x-5">
            <NavLink to={'/keranjang'}>
              <FaShoppingCart
                color="ffffff"
                size={20}
                className="cursor-pointer"
              />
            </NavLink>
            <NavLink to={'/histori-pembelian'}>
              <BsClockHistory
                color="ffffff"
                size={20}
                className="cursor-pointer"
              />
            </NavLink>
          </div>

          <div className="w-[2px] h-[30px] bg-white"></div>

          <div className="cursor-pointer flex items-center space-x-[15px]">
            <div className="flex flex-col">
              <p className="text-white poppins font-light">{author?.name}</p>
              <p className="text-white poppins font-light">{author?.email}</p>
            </div>
            <FaUserCircle color="ffffff" size={30} />
          </div>
        </section>
      </header>

      <body className="w-full px-[50px] my-[45px] overflow-hidden relative">
        <div className="w-full">
          <h1 className="text-black font-semibold text-[30px]">
            Histori Pembelian
          </h1>
          <div className="w-full bg-black h-[3px] mb-5"></div>

          <div>
            {product.map((item, index) => {
              const json = item?.produk?.gambarProduk;
              const obj = JSON.parse(json);
              return (
                <CardHistori
                  gambar={obj[0]?.gambar1}
                  key={index}
                  harga={convertRupiah.convert(item.produk.harga)}
                  nama={item.produk.namaProduk}
                  rating={item.produk.rating}
                  stok={item.produk.stok}
                  total={convertRupiah.convert(item.total)}
                  jumlah={item.jumlah}
                />
              );
            })}
          </div>
        </div>
      </body>
    </section>
  );
};

export default Histori;
