import React, { useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { NavLink, useParams } from 'react-router-dom';
import rupiahFormat from 'rupiah-format';
import { Field, useFormik } from 'formik';
import * as Yup from 'yup';
import * as dayjs from 'dayjs';

import {
  CustomButton,
  CustomHeader,
  CustomInput,
  CustomSelect,
} from '../../components';
import { getDetailBarang } from '../../api/barangApi';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { actionCreatePenawaranBarang } from '../../redux/action/lelangActioon';
import { getLelangHistoriLelangById } from '../../api/lelangApi';

const DetailLelang = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [detailBarang, setDetailBarang] = useState({});
  const [historiLelang, setHistoriLelang] = useState([]);
  let { id, id_lelang } = useParams();
  const handleGetDetailBarang = async (id) => {
    try {
      setIsLoading(true);
      let response = await getDetailBarang(id);

      setDetailBarang(response?.data?.data);
      formik.setValues({
        id_barang: response.data.data.id,
        id_lelang: response.data.data.lelang.id,
      });

      console.log('responnya', response);
    } catch (err) {
      console.log('barangerr', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetHistoriLelangById = async (id_lelang) => {
    try {
      setIsLoading(true);
      let response = await getLelangHistoriLelangById(
        formikFilter.values.isMine,
        formikFilter.values.page,
        formikFilter.values.pageSize,
        id_lelang
      );
      setHistoriLelang(response.data.data.rows);
    } catch (err) {
      console.log('historierr', err);
    } finally {
      setIsLoading(false);
    }
  };

  const formikFilter = useFormik({
    initialValues: {
      isMine: '',
      page: 1,
      pageSize: 100,
      orderBy: 'DESC',
    },
  });

  const formik = useFormik({
    initialValues: {
      id_barang: '',
      id_lelang: '',
      penawaranHarga: '',
      checkbox: false,
    },
    validationSchema: Yup.object().shape({
      checkbox: Yup.boolean().oneOf([true], 'Syarat & Ketentuan harus diisi'),
      penawaranHarga: Yup.number()
        .moreThan(
          detailBarang?.lelang?.hargaAkhir,
          `Harga harus lebih dari ${rupiahFormat.convert(
            detailBarang?.lelang?.hargaAkhir
          )}`
        )
        .required('Penawaran harga wajib diisi'),
    }),
    onSubmit: (values) => {
      const handleSubmit = async (e) => {
        try {
          const response = await dispatch(actionCreatePenawaranBarang(values));
          console.log('responnya', response);
          if (response?.data?.status === 'Success') {
            toast.success(response?.data?.msg, {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });
            setShowModal2(false);
            handleGetHistoriLelangById(id_lelang);
            return handleGetDetailBarang(id);
          }
          if (response?.response?.data?.status === 'Fail') {
            toast.error(response?.response?.data?.msg, {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });
          }
        } catch (err) {
          console.log('authregisterErr =>', err);
        } finally {
        }
      };
      handleSubmit();
    },
  });

  useEffect(() => {
    handleGetDetailBarang(id);
    handleGetHistoriLelangById(id_lelang);
  }, []);
  return (
    <section>
      {showModal2 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[50%] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 ">
                  <h1 className="text-2xl font-semibold bg-[#00c29a] rounded py-2 px-5 text-black">
                    Tawar Barang
                  </h1>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal2(false)}
                  >
                    <p className=" text-white h-6 w-6 text-2xl block outline-none focus:outline-none hover:text-red-500 transition-all ease-in-out">
                      &times;
                    </p>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form
                    action=""
                    className="space-y-10 w-full"
                    onSubmit={formik.handleSubmit}
                  >
                    <div className="w-full flex space-x-3">
                      <div className="border border-[#00c29a] px-5 rounded bg-black flex items-center">
                        <p className="font-bold">Rp</p>
                      </div>
                      <CustomInput
                        placeholder={'Harga yang ditawar'}
                        inputStyle={'w-full border-[#00c29a] border bg-black'}
                        inputType={'number'}
                        id={'penawaranHarga'}
                        name={'penawaranHarga'}
                        value={formik.values.penawaranHarga}
                        onChange={formik.handleChange}
                        isError={
                          formik.touched.penawaranHarga &&
                          formik.errors.penawaranHarga
                        }
                        textError={formik.errors.penawaranHarga}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    <div>
                      <p>
                        <input
                          name="checkbox"
                          id="checkbox"
                          type="checkbox"
                          value={formik.values.checkbox}
                          checked={formik.values.checkbox}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />{' '}
                        Saya telah membaca dan setuju dengan{' '}
                        <span className="text-[#00c29a] underline italic cursor-pointer">
                          Syarat
                        </span>{' '}
                        &{' '}
                        <span className="text-[#00c29a] underline italic cursor-pointer">
                          Ketentuan
                        </span>{' '}
                        ini
                      </p>
                      {formik.touched.checkbox && formik.errors.checkbox && (
                        <p className="text-red-500 italic">
                          {formik.errors.checkbox}
                        </p>
                      )}
                    </div>
                    <div className="flex space-x-10">
                      <CustomButton
                        onClick={() => setShowModal2(false)}
                        type={'button'}
                        label={'Batal'}
                        stylingP={'hover:text-black'}
                        stylingButton={
                          'border border-red-500 py-3 hover:bg-red-500 w-full'
                        }
                      />
                      <CustomButton
                        type={'submit'}
                        label={'Mulai Menawar'}
                        stylingP={'hover:text-black'}
                        stylingButton={
                          'border border-[#00c29a]  py-3 bg-[#00c29a] w-full'
                        }
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <header className="px-[30px] h-[85px] bg-black sticky top-0 z-50">
        <CustomHeader />
      </header>

      <body className=" bg-[#092742]">
        <section className="px-[100px] flex space-x-[100px] pt-[100px]">
          <div className=" h-fit  w-[700px]">
            <img
              src="https://i.pinimg.com/736x/72/09/21/720921d9b99bdc03ea02e28d770fdfbc--coelho-the-box.jpg"
              alt=""
              className="rounded border-[5px] border-[#00c29a]"
            />
            <div className="mt-10">
              <h1 className="logoT bg-[#00c29a] rounded px-5 w-fit text-[25px] uppercase tracking-wider mb-2 text-black">
                Deskripsi Barang
              </h1>
              <p>{detailBarang.deskripsiBarang}</p>
            </div>
          </div>

          <div className="w-full">
            <h1 className="logoT text-[50px] w-[900px]">
              {detailBarang.namaBarang}
            </h1>

            <div className="w-full h-[1px] bg-[#00c29a] my-5"></div>

            <div className="mb-10">
              <p className="text-white rounded bg-red-500 w-fit px-3 ">
                Harga Akhir:
              </p>
              <h1 className="logoT text-[50px] text-[#00c29a]">
                {rupiahFormat.convert(detailBarang?.lelang?.hargaAkhir)}
              </h1>
            </div>

            <div className="w-full border border-[#00c29a] rounded ">
              <table className="table-auto w-full px-10">
                <tr>
                  <th className="text-left py-5 pl-7">Tanggal Lelang</th>
                  <td>{dayjs(detailBarang.tanggal).format('DD MMM YYYY')}</td>
                </tr>
                <tr>
                  <th className="text-left py-5 pl-7">Harga Awal</th>
                  <td>{rupiahFormat.convert(detailBarang.hargaAwal)}</td>
                </tr>
                <tr>
                  <th className="text-left py-5 pl-7">Penyelenggara</th>
                  <td>{detailBarang?.barangMilik?.namaPetugas}</td>
                </tr>
              </table>
            </div>

            <div className="w-full mt-10">
              <CustomButton
                onClick={() => setShowModal2(true)}
                label={'Tawar Barang'}
                stylingButton={
                  'w-full py-2 border-[#00c29a] hover:bg-[#00c29a]'
                }
                stylingP={
                  'logoT text-[25px] uppercase tracking-wider hover:text-black'
                }
              />
            </div>
          </div>
        </section>

        <section className="px-[100px] py-[50px]">
          <h1 className="logoT mb-3 tracking-wider text-[25px] uppercase bg-[#00c29a] rounded px-5 w-fit text-black">
            Histori Lelang
          </h1>
          <div className="w-full border border-[#00c29a] rounded overflow-hidden overflow-y-auto bg-[#00c29b2f]">
            <table className="table-fixed w-full px-10">
              <tr>
                <th>ID User</th>
                <th className="text-left py-5">Nama Lengkap</th>
                <th className="text-left py-5">Username</th>
                <th className="text-left py-5">Harga Tawaran</th>
                <th className="text-left py-5">Waktu Menawar</th>
              </tr>
            </table>
          </div>
          <div className="w-full border border-t-transparent border-[#00c29a] rounded overflow-hidden overflow-y-auto h-[300px]">
            <table
              className={`${
                historiLelang.length === 0 ? 'h-full' : null
              } table-fixed w-full px-10`}
            >
              {historiLelang.length === 0 ? (
                <div className="flex justify-center items-center h-full flex-col space-y-5">
                  <h1 className="logoT tracking-wider uppercase text-[40px] rounded px-5 bg-blue-400 w-fit">
                    Belum ada yang menawar.
                  </h1>
                  <p className="logoT tracking-wider uppercase text-[20px] text-black rounded px-5 bg-[#00c29a] w-fit">
                    Jadilah yang pertama menawar!
                  </p>
                </div>
              ) : (
                <>
                  {historiLelang.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-center py-5">{item.id_user}</td>
                        <td className="text-left py-5">
                          {item.penawar.namaLengkap}
                        </td>
                        <td className="text-left py-5">
                          {item.penawar.username}
                        </td>
                        <td className="text-left py-5">
                          {rupiahFormat.convert(item.penawaranHarga)}
                        </td>
                        <td className="text-left py-5">
                          {dayjs(item.createdAt).format('DD MMMM YYYY')} -{' '}
                          {dayjs(item.createdAt).format('HH')}:
                          {dayjs(item.createdAt).format('mm')} WIB
                        </td>
                      </tr>
                    );
                  })}
                </>
              )}
            </table>
          </div>
        </section>
      </body>
    </section>
  );
};

export default DetailLelang;
