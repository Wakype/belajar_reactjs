import React from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink, useNavigate, useParams } from 'react-router-dom';
import { GetDetailProduct, TambahKeranjang } from '../api/homeAPI';
import logo from '../assets/images/logo.png';
import { FaStar } from 'react-icons/fa';
import { BsClockHistory } from 'react-icons/bs';
import { CustomButton } from '../components';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { actionKeranjang } from '../redux/action/keranjangAction';
import Swal from 'sweetalert2';
import { actionBeli } from '../redux/action/beliAction';

const DetailProduct = () => {
  let dispatch = useDispatch();
  const convertRupiah = require('rupiah-format');
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const author = useSelector((state) => state.auth);
  let { uuid } = useParams();
  const [product, setProduct] = React.useState([]);
  const [gambar, setGambar] = React.useState();
  const [gambarLoad, setGambarLoad] = React.useState(false);
  const [payload, setPayload] = React.useState({
    produkId: '',
  });
  const [payloadBeli, setPayloadBeli] = React.useState({
    data: [
      {
        id: '',
        produkId: '',
        jumlah: 1,
        userId: 1,
        createdAt: '',
        updatedAt: '',
        produk: {
          namaProduk: '',
          harga: '',
          stok: '',
          rating: '',
          gambarProduk: '',
        },
      },
    ],
  });

  const getDetailProductHandle = async (e) => {
    try {
      setGambarLoad(true);
      const response = await GetDetailProduct(uuid);
      console.log('response =>', response);
      setPayload({ produkId: response.data.data.id });
      setPayloadBeli({
        data: [
          {
            id: response.data.data.id,
            jumlah: 1,
            userId: 1,
            produkId: response.data.data.id,
            createdAt: response.data.data.createdAt,
            updatedAt: response.data.data.updatedAt,
            produk: {
              namaProduk: response.data.data.namaProduk,
              harga: response.data.data.harga,
              stok: response.data.data.stok,
              rating: response.data.data.rating,
              gambarProduk: response.data.data.gambarProduk,
            },
          },
        ],
      });
      setProduct(response.data.data);
      const json = response?.data?.data?.gambarProduk;
      const obj = JSON?.parse(json);
      setGambar(obj[0]?.gambar1);
      console.log('obj =>', obj);
    } catch (err) {
      console.log('err =>', err);
    } finally {
      setGambarLoad(false);
    }
  };

  const beliHandle = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(actionBeli(payloadBeli));
      console.log('responseBeli =>', response);

      if (
        response.data.status === 'Berhasil menambah 1 data dan gagal 0 data'
      ) {
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
          title: response?.data?.msg,
        });
      }
    } catch (err) {
      console.log('handleBeli err =>', err);
    } finally {
    }
  };

  const addToCart = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(actionKeranjang(payload));
      console.log('responseKeranjang =>', response);
      // return;
      if (response.data.status === 'Success') {
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
          title: response?.data?.msg,
        });
      }
    } catch (error) {
      console.log('addToCart', error);
    }
  };

  React.useEffect(() => {
    getDetailProductHandle();
  }, []);

  console.log('Product =>', product);
  console.log('payload =>', payload);
  console.log('payloadBeli =>', payloadBeli);
  console.log('gambar =>', gambar);
  // console.log('payload =>', payload);
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

      <body className="w-full px-[50px] my-[45px] flex justify-between overflow-hidden relative">
        <div className="w-[400px] h-[400px] border-black border-2 rounded-[10px] overflow-hidden ">
          {gambarLoad ? (
            <div className="w-full h-full flex justify-center items-center">
              <ScaleLoader color="#36d7b7" height={50} width={10} />
            </div>
          ) : (
            <img src={gambar} alt="" className="w-full h-full rounded-[10px]" />
          )}
        </div>

        <div className="w-[500px] overflow-auto">
          <h1 className="text-[#393D43] text-[25px] font-semibold mb-[30px]">
            {product?.namaProduk}
          </h1>
          <h2 className="text-[30px] font-bold text-black mb-[50px]">
            {convertRupiah.convert(product?.harga)}
          </h2>

          <div className="space-y-5">
            <div>
              <p className="text-[30px] font-bold text-black">Deskripsi</p>
              <div className="w-[50px] h-[5px] bg-black"></div>
            </div>
            <div className="">
              <p className="text-[20px]">{product?.deskripsi}</p>
            </div>
          </div>
        </div>

        <div className=" overflow-hidden w-[320px] h-[255px] border-2 border-black rounded-[10px] bg-[#395144] flex flex-col justify-between px-[30px] py-[20px]">
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-white text-[18px] font-medium">Rating</p>
              <div className="flex justify-center items-center">
                <FaStar color="#FFD233" />
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-white text-[18px] font-medium">Stok</p>
              <p className="text-white text-[18px] font-medium">
                {product?.stok}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <CustomButton
              onClick={beliHandle}
              label={'Beli Langsung'}
              stylingButton={`border-black bg-white rounded-lg w-full hover:border-white hover:bg-[#395144]`}
              stylingText={`text-[#395144] font-medium text-[18px] hover:text-white`}
            />
            <CustomButton
              onClick={addToCart}
              label={'Keranjang'}
              stylingButton={`border-black bg-white rounded-lg w-full hover:border-white hover:bg-[#395144]`}
              stylingText={`text-[#395144] font-medium text-[18px] hover:text-white`}
            />
          </div>
        </div>
      </body>
    </section>
  );
};

export default DetailProduct;
