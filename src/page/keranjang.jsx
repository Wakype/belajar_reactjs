import React from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Navigate, NavLink, useNavigate, useParams } from 'react-router-dom';
import { GetDetailProduct, GetKeranjang, PostBeli } from '../api/homeAPI';
import logo from '../assets/images/logo.png';
import { FaRegTrashAlt } from 'react-icons/fa';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { DeleteKeranjang } from '../api/homeAPI';
import { FaStar } from 'react-icons/fa';
import { BsClockHistory } from 'react-icons/bs';
import {
  CardKeranjang,
  CustomButton,
  CustomInput,
  HargaBarang,
} from '../components';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { actionUbahItem } from '../redux/action/keranjangAction';

const Keranjang = () => {
  const convertRupiah = require('rupiah-format');
  const navigate = useNavigate();
  const author = useSelector((state) => state.auth);
  let dispatch = useDispatch();

  const [product, setProduct] = React.useState([]);
  const [fetchProduct, setFetchProduct] = React.useState(false);
  const [status, setStatus] = React.useState(false);
  const [payload, setPayload] = React.useState({
    data: '',
  });
  const [payloadTambah, setPayloadTambah] = React.useState({});
  const getKeranjang = async () => {
    try {
      let response = await GetKeranjang();
      console.log('responseKeranjang =>', response);
      setProduct(response.data.data);
      setPayload(response.data);
    } catch (err) {
      console.log('errGetKeranjang =>', err);
    } finally {
    }
  };

  const buyHandle = async () => {
    try {
      setFetchProduct(true);
      if (product.length === 0) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        return Toast.fire({
          icon: 'info',
          title: 'Tidak ada barang dikeranjang',
        });
      } else {
        const response = await PostBeli(payload);
        console.log('Beli =>', response);
        getKeranjang();
        if (response.status === 201) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: 'success',
            title: response.data.msg,
          });
        }
      }
    } catch (err) {
    } finally {
      setFetchProduct(false);
    }
  };

  const hapusKeranjanghandle = async (id) => {
    // e.preventDefault();
    try {
      let response = await DeleteKeranjang(id);
      console.log('hapusKeranjanghandle =>', response);
      getKeranjang();
    } catch (err) {
      console.log('hapusKeranjanghandle err =>', err);
    }
  };

  const tambahItem = async (id, jumlah) => {
    try {
      getKeranjang();
      const response = await dispatch(actionUbahItem(payloadTambah));
      setPayloadTambah({ id: id, jumlah: jumlah });
      console.log('itemTambah =>', response);
    } catch (err) {
    } finally {
    }
  };

  React.useEffect(() => {
    getKeranjang();
  }, []);
  console.log('product', product);
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

      <body className="px-[50px] w-full flex justify-between my-[30px] relative">
        <div className="w-[55%]">
          <h1 className="text-black font-semibold text-[30px]">Keranjang</h1>
          <div className="w-full bg-black h-[3px] mb-5"></div>

          <div>
            {product.map((item, index) => {
              const json = item?.produk?.gambarProduk;
              const obj = JSON.parse(json);

              const increment = () => {
                tambahItem(item?.id, item?.jumlah + 1);

                getKeranjang();
              };
              const decrement = () => {
                tambahItem(item?.id, item?.jumlah - 1);
                getKeranjang();
              };
              return (
                <section
                  className={`w-full h-[200px] rounded-[10px] border-2 border-black bg-[#395144] p-5 mb-5`}
                  key={index}
                >
                  <div className="flex h-full w-full">
                    <div className="w-[220px] h-full mr-5 border-2 border-black rounded-[10px] flex items-center">
                      <img
                        src={obj[0]?.gambar1}
                        alt=""
                        className="rounded-[10px] w-full h-full"
                      />
                    </div>

                    <div className="flex flex-col h-full justify-between w-full">
                      <div>
                        <h1 className="text-white font-semibold text-[20px]">
                          {item.produk.namaProduk}
                        </h1>
                        <div className="flex  justify-between">
                          <div className="flex flex-col">
                            <p className="text-white">
                              Stok tersisa: {item.produk.stok}
                            </p>
                            <p className="text-white font-semibold text-[16px]">
                              {convertRupiah.convert(item.produk.harga)} ×{' '}
                              {item.jumlah}
                            </p>
                          </div>
                          <p className="text-white">
                            Rating: {item.produk.rating}
                          </p>
                        </div>
                      </div>
                      <div className="text-white flex justify-between">
                        <div className="flex flex-col">
                          <p className="italic">Total Harga:</p>
                          <HargaBarang
                            harga={convertRupiah.convert(
                              item?.produk?.harga * item?.jumlah
                            )}
                          />
                        </div>
                        <div className="flex items-center space-x-3">
                          <div
                            className="flex items-center rounded-full border-2 border-[#e91e63] p-[5px] cursor-pointer"
                            onClick={() => {
                              hapusKeranjanghandle(item.id);
                              setStatus(!status);
                            }}
                          >
                            <FaRegTrashAlt color="#e91e63" size={15} />
                          </div>
                          <div className="h-[25px] w-[2px] bg-white"></div>
                          <div className="flex items-center space-x-2">
                            <AiOutlineMinusCircle
                              className="cursor-pointer"
                              color="#ffffff"
                              size={30}
                              onClick={() => {
                                return decrement();
                              }}
                            />
                            <p className="text-white">{item.jumlah}</p>
                            <AiOutlinePlusCircle
                              className="cursor-pointer"
                              color="#ffffff"
                              size={30}
                              onClick={() => {
                                return increment();
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>

        <div className="w-[40%]">
          <div className="w-full rounded-[10px] border-2 border-black bg-[#395144] p-5 mb-5 mt-[68px] space-y-5">
            <div className="space-y-3">
              {product.map((item, index) => {
                return (
                  <div key={index} className="flex">
                    <div className="text-white flex items-center justify-center mr-3 border-2 rounded-[5px] px-[5px]">
                      <h1 className="font-semibold font-mono">{index + 1}</h1>
                    </div>
                    <div>
                      <h1 className="text-white font-semibold text-][18px]">
                        {item.produk.namaProduk}
                      </h1>
                      <p className="text-white  font-semibold text-][18px]">
                        {
                          <HargaBarang
                            style={'text-[18px]'}
                            harga={convertRupiah.convert(
                              item?.produk?.harga * item?.jumlah
                            )}
                          />
                        }
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <CustomButton
                onClick={buyHandle}
                label={'BELI SEKARANG'}
                stylingButton={'w-full hover:bg-white hover:border-white'}
                stylingText={
                  'font-mono font-semibold tracking-widest text-[18px] hover:text-[#395144]'
                }
              />
            </div>
          </div>
        </div>
      </body>
    </section>
  );
};

export default Keranjang;
