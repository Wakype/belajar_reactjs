import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  CustomButton,
  CustomInput,
  CustomSelect,
  SearchButton,
} from '../../components';
import * as Yup from 'yup';
import * as dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { getLelang } from '../../api/lelangApi';
import { actionUpdateStatus } from '../../redux/action/lelangActioon';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const Pelelangan = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  const redux = useSelector((state) => state.auth);
  const convertRupiah = require('rupiah-format');
  const [lelang, setLelang] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [checkPage, setCheckPage] = useState('');
  const [showModal, setShowModal] = React.useState(false);

  const [path1, path2, path3] = location.pathname.split('/').slice(1);

  const getLelangHandle = async () => {
    try {
      setIsLoading(true);

      let response = await getLelang(
        formikFilter.values.keyword,
        formikFilter.values.hargaMinimal,
        formikFilter.values.hargaMaximum,
        formikFilter.values.isMine,
        formikFilter.values.page,
        formikFilter.values.pageSize
      );

      console.log('lelang', response);
      setLelang(response?.data?.data?.rows);
      setCheckPage(response?.data?.pagination?.totalData);
    } catch (err) {
      console.log('lelangerr', err);
    } finally {
      setIsLoading(false);
    }
  };

  const formikFilter = useFormik({
    initialValues: {
      isMine: '',
      hargaMaximum: '',
      hargaMinimal: '',
      keyword: '',
      page: 1,
      pageSize: 7,
    },
  });

  const formik = useFormik({
    initialValues: {
      id: '',
      status: '',
    },
    validationSchema: Yup.object().shape({
      status: Yup.string()
        .notOneOf(['Pilih Status'], 'Pilih status dengan benar')
        .required('Status wajib diisi'),
    }),
    onSubmit: (values) => {
      const handleSubmit = async (e) => {
        try {
          const response = await dispatch(actionUpdateStatus(values));
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
            setShowModal(false);
            return getLelangHandle();
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
    getLelangHandle();
  }, [formikFilter.values.page]);
  return (
    <section className="w-full h-screen bg-[#092742] py-[50px] px-[50px]">
      <div className="mb-[70px]">
        <h1 className="text-[25px] font-semibold">Pendataan Barang</h1>
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center mb-5">
          <div>
            <p>
              {path1} &gt; {path2} &gt;{' '}
              <span className="text-[#00c29f]">{path3}</span>
            </p>
          </div>

          <div className="flex">
            <SearchButton />
          </div>
        </div>
        <table class="table-auto w-full border border-[#00c29a] rounded">
          <tr className="border border-[#00c29a] h-[50px] rounded bg-[#00c29a]">
            <th className="w-[50px]">#</th>
            <th className="w-[100px]">ID Barang</th>
            <th className="text-left">Gambar</th>
            <th className="text-center">Petugas</th>
            <th className="text-left ">Nama Barang</th>
            <th className="text-left">Tanggal Lelang</th>
            <th className="text-left">Harga Akhir</th>
            <th className="text-left">Status</th>
            <th className="text-center">Aksi</th>
          </tr>

          {isLoading ? (
            <td
              colSpan={7}
              rowSpan={7}
              className="w-full py-10 pl-10 flex justify-center"
            >
              <div>
                <ScaleLoader color="#00c29a" height={30} width={800} />
              </div>
            </td>
          ) : (
            <>
              {lelang?.map((item, index) => {
                return (
                  <>
                    {showModal ? (
                      <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                          <div className="relative w-[30%] my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                              <div className="flex items-start justify-between p-5 ">
                                <h1 className="text-2xl font-semibold bg-[#00c29a] rounded py-2 px-5 text-black">
                                  Edit Barang
                                </h1>
                                <button
                                  className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                  onClick={() => setShowModal(false)}
                                >
                                  <p className=" text-white h-6 w-6 text-2xl block outline-none focus:outline-none hover:text-red-500 transition-all ease-in-out">
                                    &times;
                                  </p>
                                </button>
                              </div>

                              <div className="relative p-6 flex-auto">
                                <form
                                  action=""
                                  className="space-y-10 w-full"
                                  onSubmit={formik.handleSubmit}
                                >
                                  <CustomSelect
                                    id={'status'}
                                    name={'status'}
                                    value={formik.values.status}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    selectStyle={
                                      'w-full border-[#00c29a] border bg-black'
                                    }
                                  >
                                    <option value="">Pilih Status</option>
                                    <option value="dibuka">Dibuka</option>
                                    <option value="ditutup">Ditutup</option>
                                  </CustomSelect>
                                  <div className="flex space-x-10">
                                    <CustomButton
                                      onClick={() => setShowModal(false)}
                                      type={'button'}
                                      label={'Batal'}
                                      stylingP={'hover:text-black'}
                                      stylingButton={
                                        'border border-red-500 py-3 hover:bg-red-500 w-full'
                                      }
                                    />
                                    <CustomButton
                                      type={'submit'}
                                      label={'Update Barang'}
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
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                      </>
                    ) : null}
                    <tr key={index} className="mb-5">
                      <td className="text-center">{item.id}</td>
                      <td className="text-center">{item.barang.id}</td>
                      <td className="w-[80px]">
                        <img
                          src="https://www.thewindowsclub.com/wp-content/uploads/2018/06/Broken-image-icon-in-Chrome.gif"
                          alt=""
                          width={20}
                          className="ml-5"
                        />
                      </td>
                      <td className="text-center w-[120px]">
                        {item.petugas.namaPetugas}
                      </td>
                      <td>
                        <p className="line-clamp-2 w-[200px]">
                          {item.barang.namaBarang}
                        </p>
                      </td>
                      <td>{dayjs(item.tanggal).format('DD MMM YYYY')}</td>
                      <td>{convertRupiah.convert(item.hargaAkhir)}</td>
                      <td className="">
                        <p
                          className={`${
                            item.status === 'dibuka'
                              ? 'bg-green-500'
                              : 'bg-red-500'
                          } line-clamp-2 text-white rounded w-fit px-3`}
                        >
                          {item.status}
                        </p>
                      </td>
                      <td className="mb-5 ">
                        <div className="flex pr-5 py-5 w-full justify-center space-x-3">
                          {redux?.role === 'petugas' ? (
                            <CustomButton
                              onClick={() => {
                                formik.setValues({
                                  id: item?.id,
                                });

                                return setShowModal(true);
                              }}
                              label={'Edit Status'}
                              stylingButton={
                                'w-full border-yellow-500 hover:bg-yellow-500'
                              }
                            />
                          ) : (
                            <CustomButton
                              onClick={() => {
                                toast.error(
                                  'Anda tidak bisa mengedit status karena anda bukan petugas',
                                  {
                                    position: 'top-right',
                                    autoClose: 2000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: 'colored',
                                  }
                                );
                              }}
                              type={'button'}
                              label={'Khusus Petugas'}
                              stylingButton={
                                'w-[50%] border-red-500 hover:bg-red-500 cursor-not-allowed'
                              }
                            />
                          )}
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </>
          )}
        </table>
      </div>

      <div className="w-full mt-[20px]">
        <div className="flex space-x-3 items-center">
          <>
            {formikFilter.values.page > 1 ? (
              <div
                className="cursor-pointer"
                onClick={() =>
                  formikFilter.setValues({
                    page: formikFilter.values.page - 1,
                  })
                }
              >
                <BiLeftArrow color="#00c29a" size={22} />
              </div>
            ) : (
              <div className="cursor-not-allowed">
                <BiLeftArrow color="grey" size={22} />
              </div>
            )}
          </>
          <div className="text-white font-bold text-[18px]">
            {checkPage > 7 ? (
              <input
                type="number"
                value={formikFilter.values.page}
                onChange={formikFilter.handleChange}
                name="page"
                id="page"
                className="w-[50px] bg-black text-center border-[#00c29a] rounded"
              />
            ) : (
              <div
                onClick={() =>
                  toast.info(`Total data hanya ada ${checkPage}`, {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                  })
                }
              >
                <input
                  type="number"
                  disabled
                  value={formikFilter.values.page}
                  onChange={formikFilter.handleChange}
                  name="page"
                  id="page"
                  className="w-[50px] cursor-not-allowed bg-black text-center border-[#00c29a] rounded"
                />
              </div>
            )}
          </div>
          <div
            className="cursor-pointer"
            onClick={() =>
              formikFilter.setValues({ page: formikFilter.values.page + 1 })
            }
          >
            <BiRightArrow color="#00c29a" size={22} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pelelangan;
