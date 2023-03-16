import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  CustomButton,
  CustomInput,
  CustomSelect,
  SearchButton,
  SosmedLog,
} from '../../components';
import { getPetugasById, getPetugsas, updatePetugas } from '../../api/userApi';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { updatePetugasAction } from '../../redux/action/userActioon';

const DataPetugas = () => {
  const redux = useSelector((state) => state.auth);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const { pathname } = useLocation();
  const [_, path1, path2, path3] = pathname.split('/');

  const [showModal2, setShowModal2] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [petugas, setPetugas] = useState([]);
  const [page, setPage] = useState(1);

  const getPetugasHandle = async () => {
    try {
      setIsLoading(true);
      let response = await getPetugsas(
        formikFilter.values.role,
        formikFilter.values.username,
        formikFilter.values.namaPetugas,
        formikFilter.values.page,
        formikFilter.values.pageSize
      );
      setPetugas(response.data.data.rows);
      console.log('resnya', response);
    } catch (err) {
      console.log('getpetugaserr', err);
    } finally {
      setIsLoading(false);
    }
  };

  // const queryClient = useQueryClient();
  // let petugasQuery = useQuery('petugas', () => getPetugsas());

  const formikFilter = useFormik({
    initialValues: {
      role: '',
      username: '',
      namaPetugas: '',
      page: 1,
      pageSize: 5,
    },
  });

  const formikPetugas = useFormik({
    initialValues: {
      id: redux?.id,
      namaPetugas: redux?.namaPetugas,
      username: redux?.username,
      role: redux?.role,
    },
    validationSchema: Yup.object().shape({
      namaPetugas: Yup.string()
        .min(2, 'Nama minimal 2 huruf')
        .required('Nama Lengkap wajib diisi'),
      username: Yup.string()
        .min(4, 'Username minimal 4 huruf')
        .required('Username wajib diisi'),
    }),
    onSubmit: (values) => {
      const handleSubmit = async (e) => {
        try {
          const response = await dispatch(updatePetugasAction(values));
          console.log('responnya', response);
          if (response?.status === 'Success') {
            toast.success(response?.msg, {
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
            return getPetugasHandle();
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
    getPetugasHandle();
  }, [formikFilter.values.page]);

  return (
    <section className="w-full h-screen bg-[#092742] py-[50px] px-[50px] relative">
      {showModal2 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[30%] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 ">
                  <h1 className="text-2xl font-semibold bg-[#00c29a] rounded py-2 px-5 text-black">
                    Edit Petugas
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
                    onSubmit={formikPetugas.handleSubmit}
                  >
                    <CustomInput
                      placeholder={'Nama Petugas'}
                      inputStyle={'w-full border-[#00c29a] border bg-black'}
                      inputType={'text'}
                      id={'namaPetugas'}
                      name={'namaPetugas'}
                      value={formikPetugas.values.namaPetugas}
                      onChange={formikPetugas.handleChange}
                      isError={
                        formikPetugas.touched.namaPetugas &&
                        formikPetugas.errors.namaPetugas
                      }
                      textError={formikPetugas.errors.namaPetugas}
                      onBlur={formikPetugas.handleBlur}
                    />
                    <CustomInput
                      placeholder={'Username'}
                      inputStyle={'w-full border-[#00c29a] border bg-black'}
                      inputType={'text'}
                      id={'username'}
                      name={'username'}
                      value={formikPetugas.values.username}
                      onChange={formikPetugas.handleChange}
                      isError={
                        formikPetugas.touched.username &&
                        formikPetugas.errors.username
                      }
                      textError={formikPetugas.errors.username}
                      onBlur={formikPetugas.handleBlur}
                    />
                    <CustomSelect
                      id={'role'}
                      name={'role'}
                      value={formikPetugas.values.role}
                      onBlur={formikPetugas.handleBlur}
                      onChange={formikPetugas.handleChange}
                      selectStyle={'w-full border-[#00c29a] border bg-black'}
                    >
                      <option value="">Pilih Role</option>
                      <option value="administrator">Administrator</option>
                      <option value="petugas">Petugas</option>
                    </CustomSelect>
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
                        label={'Update petugas'}
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

      <div className="mb-[70px]">
        <h1 className="text-[25px] font-semibold">Pendataan Petugas</h1>
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center mb-5">
          <div>
            <p>
              {path1} &gt; {path2} &gt;{' '}
              <span className="text-[#00c29f]">{path3}</span>
            </p>
          </div>
          <div className="flex space-x-5">
            <div className="flex">
              <SearchButton />
            </div>
            <NavLink to={`/admin/dashboard/petugas/tambah-petugas`}>
              <CustomButton
                label={'Tambah Petugas'}
                stylingButton={'border-[#00c29a] hover:bg-[#00c29a]'}
                stylingP={'hover:text-black'}
              />
            </NavLink>
          </div>
        </div>

        <div className="w-full rounded-lg">
          <table class="table-auto w-full border border-[#00c29a] rounded-lg">
            <tr className="border border-[#00c29a] h-[50px] rounded bg-[#00c29a]">
              <th className="w-[5%]">#</th>
              <th className="text-left">Nama Petugas</th>
              <th className="text-left w-[30%]">Username</th>
              <th className="text-left">Role</th>
              <th className="text-center">Aksi</th>
            </tr>

            {isLoading ? (
              <div className="w-[200px] py-10 pl-10">
                <ScaleLoader color="#00c29a" height={30} width={20} />
              </div>
            ) : (
              <>
                {petugas?.map((item, index) => {
                  return (
                    <tr className="mb-5" key={index}>
                      <td className="text-center">{item.id}</td>
                      <td>{item.namaPetugas}</td>
                      <td>{item.username}</td>
                      <td>{item.role.level}</td>
                      <td className="mb-5 ">
                        {redux?.id === item?.id ? (
                          <div className="flex pr-5 py-5 w-full justify-center space-x-3">
                            <CustomButton
                              onClick={() => setShowModal2(true)}
                              label={'Edit'}
                              stylingButton={
                                'w-[50%] border-yellow-500 hover:bg-yellow-500'
                              }
                            />
                          </div>
                        ) : (
                          <div className="flex pr-5 py-5 w-full justify-center space-x-3">
                            <CustomButton
                              onClick={() => {
                                toast.error(
                                  'Anda tidak bisa mengedit karena ini bukan milik anda',
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
                              label={'Tidak bisa diedit'}
                              stylingButton={
                                'w-[50%] border-red-500 hover:bg-red-500 cursor-not-allowed'
                              }
                            />
                          </div>
                        )}
                      </td>
                    </tr>
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
              <input
                type="number"
                value={formikFilter.values.page}
                onChange={formikFilter.handleChange}
                name="page"
                id="page"
                className="w-[50px] bg-black text-center border-[#00c29a] rounded"
              />
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
      </div>
    </section>
  );
};

export default DataPetugas;
