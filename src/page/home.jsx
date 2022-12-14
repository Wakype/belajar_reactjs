import React from 'react';
import logo from '../assets/images/logo.png';
import { FaFilter, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { TiArrowSortedDown } from 'react-icons/ti';
import { CardProduct, CustomInput } from '../components';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { GetProduct, GetKategori } from '../api/homeAPI';
import rupiahFormat from 'rupiah-format';
import { BsClockHistory } from 'react-icons/bs';

const Home = () => {
  // let [status, setStatus] = React.useState(false);
  const author = useSelector((state) => state.auth);
  // const navigate = useNavigate();

  const [listProduct, setListProduct] = React.useState([]);
  const [kategori, setKategori] = React.useState([]);
  const [kategoriStatus, setKategoriStatus] = React.useState(false);
  const [ratingStatus, setRatingStatus] = React.useState(false);
  const [hargaStatus, setHargaStatus] = React.useState(false);
  const [rupiah, setRupiah] = React.useState({
    angka: '',
  });
  const [payload, setPayload] = React.useState({
    kategori: '',
    keyword: '',
    hargaTerendah: '',
    hargaTertinggi: '',
  });
  const [fetchProduct, setFetchProduct] = React.useState(false);
  const handleChange = async (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  //require library
  const convertRupiah = require('rupiah-format');

  const getKategoriHandle = async (e) => {
    try {
      const response = await GetKategori();
      console.log('responseKategori =>', response);
      setKategori(response.data.data);
    } catch (err) {
      console.log('kategoriError =>', err);
    }
  };

  const getProductHandle = async (e) => {
    // e.preventDefault()
    try {
      setFetchProduct(true);
      const response = await GetProduct(
        payload.kategori,
        payload.keyword,
        payload.hargaTerendah,
        payload.hargaTertinggi
      );
      console.log('responseProduk =>', response);
      console.log('product =>', response.data.data.rows);
      setListProduct(response.data.data.rows);
      // setPayload(response.data.data.rows)
    } catch (err) {
      console.log('err =>', err);
    } finally {
      setFetchProduct(false);
    }
  };
  React.useEffect(() => {
    getProductHandle();
    getKategoriHandle();
    // handleChange();
  }, [
    payload.kategori,
    payload.hargaTerendah,
    payload.hargaTertinggi,
    payload.keyword,
  ]);

  console.log('listProduct =>', listProduct);
  console.log('listKategori =>', kategori);
  console.log('payload =>', payload);
  return (
    <section className="">
      <header className="sticky top-0 z-50 w-full h-[80px] bg-[#395144] border-b-2 border-b-black drop-shadow-xl px-[50px] flex justify-between items-center">
        <section className="flex items-center space-x-5 ">
          <NavLink to={'/home'}>
            <img src={logo} alt="" className="w-[40px] " />
          </NavLink>
          <CustomInput
            onChange={handleChange}
            name="keyword"
            value={payload.keyword}
            typeInput="search"
            placeholder="GIGABYTE GeForce RTX™ 3060..."
            stylingInput={
              'px-3 border-white text-white focus:w-[600px]   focus:px-5 transition-all ease-in-out inputAnimate w-[200px]'
            }
          />
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

      <body className="px-[50px] flex justify-between my-[30px] relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-5">
          {listProduct.map((item, index) => {
            const json = item?.gambarProduk;
            const obj = JSON.parse(json);
            // console.log('obj =>', obj);
            return (
              <NavLink to={`/product/detail/${item?.uuid}`}>
                <div key={index}>
                  <CardProduct
                    barang={item?.namaProduk}
                    harga={convertRupiah.convert(item?.harga)}
                    stok={item?.stok}
                    image={obj[0]?.gambar1}
                    rating={item?.rating}
                  />
                </div>
              </NavLink>
            );
          })}
        </div>

        <div className="fixed right-[50px] w-[250px] h-[500px] rounded-[10px] border-2 border-black bg-[#395144] p-[30px]">
          <div className="flex items-center space-x-2 text-[18px]">
            <FaFilter color="ffffff" />
            <p className="text-white poppins">Filter</p>
          </div>

          <div className="mt-[20px] ml-[10px] space-y-2">
            <div className="kategori">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  setKategoriStatus(!kategoriStatus);
                }}
              >
                <div
                  className={`${
                    kategoriStatus ? 'rotate-0' : '-rotate-90'
                  } flex items-center justify-center`}
                >
                  <TiArrowSortedDown color="#ffffff" size={20} />
                </div>
                <h1 className="text-white">Kategori</h1>
              </div>
              <div className={`${kategoriStatus ? 'block' : 'hidden'}`}>
                <select
                  name="kategori"
                  onChange={handleChange}
                  // value={pilihKategori.tulisKategori}
                  id=""
                  className="w-full focus:outline-none poppins input-text border-2 rounded py-[10px] mt-3 transition-all ease-in-out bg-transparent border-white text-white px-2"
                >
                  <option value="" className="text-black">
                    Semua
                  </option>
                  {kategori.map((item, index) => {
                    return (
                      <option
                        key={index}
                        value={item?.kategori}
                        className="text-black"
                      >
                        {item?.kategori}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="rating">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  setRatingStatus(!ratingStatus);
                }}
              >
                <div
                  className={`${
                    ratingStatus ? 'rotate-0' : '-rotate-90'
                  } flex items-center justify-center`}
                >
                  <TiArrowSortedDown color="#ffffff" size={20} />
                </div>
                <h1 className="text-white">Rating</h1>
              </div>
              <div className={`${ratingStatus ? 'block' : 'hidden'}`}></div>
            </div>

            <div className="harga">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  setHargaStatus(!hargaStatus);
                }}
              >
                <div
                  className={`${
                    hargaStatus ? 'rotate-0' : '-rotate-90'
                  } flex items-center justify-center`}
                >
                  <TiArrowSortedDown color="#ffffff" size={20} />
                </div>
                <h1 className="text-white">Harga</h1>
              </div>
              <div className={`${hargaStatus ? 'block' : 'hidden'}`}>
                <CustomInput
                  name="hargaTertinggi"
                  onChange={handleChange}
                  label={'Harga Tertinggi'}
                  stylingInput={`border-white w-full px-3 text-white`}
                  placeholder="Tulis harga"
                  typeInput={'number'}
                />
                <CustomInput
                  name="hargaTerendah"
                  onChange={handleChange}
                  label={'Harga Terendah'}
                  stylingInput={`border-white w-full px-3 text-white`}
                  placeholder="Tulis harga"
                  typeInput={'number'}
                />
              </div>
            </div>
          </div>
        </div>
      </body>
    </section>
  );
};

export default Home;
