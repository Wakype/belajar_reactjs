import React, { useEffect, useState } from 'react';
import {
  CustomButton,
  CustomInput,
  CustomSelect,
  SosmedLog,
} from '../components';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { authRegister } from '../redux/action/authAction';
import { getBarang } from '../api/barangApi';
import { toast } from 'react-toastify';

const Register = () => {
  const redux = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const formikMasyarakat = useFormik({
    initialValues: {
      namaLengkap: '',
      username: '',
      telp: '',
      password: '',
      confirmPasswordMasyarakat: '',
    },
    validationSchema: Yup.object().shape({
      namaLengkap: Yup.string()
        .min(2, 'Nama minimal 2 huruf')
        .required('Nama Lengkap wajib diisi'),
      username: Yup.string()
        .min(4, 'Username minimal 4 huruf')
        .required('Username wajib diisi'),
      telp: Yup.string()
        .min(10, 'Nomor Telpon minimal 10 huruf')
        .required('Nomor Telpon wajib diisi'),
      password: Yup.string()
        .min(8, 'Password minimal 8 huruf')
        .required('Password wajib diisi'),
      confirmPasswordMasyarakat: Yup.string()
        .min(8, 'Password minimal 8 huruf')
        .required('Password wajib diisi')
        .oneOf([Yup.ref('password'), null], 'Password harus sama'),
    }),
    onSubmit: (values) => {
      console.log('object', values);
      const handleSubmit = async (e) => {
        try {
          setIsLoading(true);
          const response = await dispatch(authRegister(values));
          console.log(response);
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
            return navigate('/login', { replace: true });
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
          setIsLoading(false);
        }
      };
      handleSubmit();
    },
  });

  const formikPetugas = useFormik({
    initialValues: {
      namaPetugas: '',
      username: '',
      password: '',
      confirmPasswordPetugas: '',
      role: '',
    },
    validationSchema: Yup.object().shape({
      namaPetugas: Yup.string()
        .min(2, 'Nama minimal 2 huruf')
        .required('Nama Lengkap wajib diisi'),
      username: Yup.string()
        .min(4, 'Username minimal 4 huruf')
        .required('Username wajib diisi'),
      password: Yup.string()
        .min(8, 'Password minimal 8 huruf')
        .required('Password wajib diisi'),
      confirmPasswordPetugas: Yup.string()
        .min(8, 'Password minimal 8 huruf')
        .required('Password wajib diisi'),
    }),
    onSubmit: (values) => {
      const handleSubmit = async (e) => {
        try {
          setIsLoading(true);
          const response = await dispatch(authRegister(values));
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
            return navigate('/login', { replace: true });
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
          setIsLoading(false);
        }
      };
      handleSubmit();
    },
  });

  useEffect(() => {}, []);
  return (
    <section className="bg-black h-screen">
      <header className="px-[30px] h-[8%]">
        <section className="justify-between flex items-center h-full">
          <NavLink to={'/login'}>
            <div className=" logoT cursor-pointer text-[45px] bg-clip-text text-transparent bg-gradient-to-r from-[#00c29a] to-[#e8cd70]">
              Lelang<span className="text-[25px] logoT">Pro</span>
            </div>
          </NavLink>
        </section>
      </header>

      <body className="h-[90%] pt-[50px]">
        <section className="h-[92%] px-[30px]">
          <div className="w-full justify-center flex ">
            <div className="flex flex-col  justify-between items-center border border-[#00c29a] p-7 w-[500px] rounded">
              <div className="mb-5">
                <h1 className="text-[20px]">Daftar Akun Sebagai:</h1>
              </div>

              <div className="w-full">
                <Tabs className={'w-full'}>
                  <TabList
                    className={`flex border-b border-b-[#222222] w-full`}
                  >
                    <Tab
                      className={`text-[#C9D1D9] w-full py-[11px] text-[14px] text-center`}
                      selectedClassName={`bg-transparent border-b-[2px] border-b-[#00c29a] font-semibold`}
                    >
                      <span className="hover:bg-[#222222] cursor-pointer hover:rounded transition-all ease-in-out px-[100px] w-full py-[5px]">
                        Pengguna
                      </span>
                    </Tab>
                  </TabList>

                  <TabPanel className={'w-full '}>
                    <form
                      action=""
                      onSubmit={formikMasyarakat.handleSubmit}
                      className="w-full space-y-7 mt-5"
                    >
                      <CustomInput
                        placeholder={'Nama Lengkap'}
                        inputStyle={'w-full'}
                        inputType={'text'}
                        id={'namaLengkap'}
                        name={'namaLengkap'}
                        value={formikMasyarakat.values.namaLengkap}
                        onChange={formikMasyarakat.handleChange}
                        isError={
                          formikMasyarakat.touched.namaLengkap &&
                          formikMasyarakat.errors.namaLengkap
                        }
                        textError={formikMasyarakat.errors.namaLengkap}
                        onBlur={formikMasyarakat.handleBlur}
                      />
                      <CustomInput
                        placeholder={'Username'}
                        inputStyle={'w-full'}
                        inputType={'text'}
                        id={'username'}
                        name={'username'}
                        value={formikMasyarakat.values.username}
                        onChange={formikMasyarakat.handleChange}
                        isError={
                          formikMasyarakat.touched.username &&
                          formikMasyarakat.errors.username
                        }
                        textError={formikMasyarakat.errors.username}
                        onBlur={formikMasyarakat.handleBlur}
                      />
                      <CustomInput
                        placeholder={'Nomor Telpon'}
                        inputStyle={'w-full'}
                        inputType={'number'}
                        id={'telp'}
                        name={'telp'}
                        value={formikMasyarakat.values.telp}
                        onChange={formikMasyarakat.handleChange}
                        isError={
                          formikMasyarakat.touched.telp &&
                          formikMasyarakat.errors.telp
                        }
                        textError={formikMasyarakat.errors.telp}
                        onBlur={formikMasyarakat.handleBlur}
                      />
                      <div className="flex w-full space-x-3">
                        <CustomInput
                          placeholder={'Password'}
                          inputStyle={'w-full'}
                          inputType={'password'}
                          id={'password'}
                          name={'password'}
                          value={formikMasyarakat.values.password}
                          onChange={formikMasyarakat.handleChange}
                          isError={
                            formikMasyarakat.touched.password &&
                            formikMasyarakat.errors.password
                          }
                          textError={formikMasyarakat.errors.password}
                          onBlur={formikMasyarakat.handleBlur}
                        />
                        <CustomInput
                          placeholder={'Konfirmasi Password'}
                          inputStyle={'w-full'}
                          inputType={'password'}
                          id={'confirmPasswordMasyarakat'}
                          name={'confirmPasswordMasyarakat'}
                          value={
                            formikMasyarakat.values.confirmPasswordMasyarakat
                          }
                          onChange={formikMasyarakat.handleChange}
                          isError={
                            formikMasyarakat.touched
                              .confirmPasswordMasyarakat &&
                            formikMasyarakat.errors.confirmPasswordMasyarakat
                          }
                          textError={
                            formikMasyarakat.errors.confirmPasswordMasyarakat
                          }
                          onBlur={formikMasyarakat.handleBlur}
                        />
                      </div>
                      <div className="w-full">
                        <CustomButton
                          type={'submit'}
                          label={'Buat Akun'}
                          stylingP={'text-black'}
                          stylingButton={
                            'w-full mb-1 py-3 border-none bg-gradient-to-r from-[#00c29a] to-[#e8cd70] hover:to-[#00c29a] hover:from-[#e8cd70]'
                          }
                        />
                        <div className="w-full flex justify-center">
                          <NavLink to={'/login'} className={''}>
                            <p className="text-white underline italic cursor-pointer hover:text-[#88898e] transition-all ease-in-out w-fit text-[13px]">
                              Sudah punya akun?
                            </p>
                          </NavLink>
                        </div>
                      </div>
                      <div className="flex justify-between w-full">
                        <SosmedLog
                          icon={<FaGoogle color="white" size={22} />}
                          stylingDiv={
                            'border-[#00c29a] hover:bg-[#00c29a] w-[120px] justify-center'
                          }
                        />
                        <SosmedLog
                          icon={<FaFacebook color="white" size={22} />}
                          stylingDiv={
                            'border-[#00c29a] hover:bg-[#00c29a] w-[120px] justify-center'
                          }
                        />
                        <SosmedLog
                          icon={<FaApple color="white" size={22} />}
                          stylingDiv={
                            'border-[#00c29a] hover:bg-[#00c29a] w-[120px] justify-center'
                          }
                        />
                      </div>
                    </form>
                  </TabPanel>
                  {/* <TabPanel className={'w-full '}>
                    <form
                      action=""
                      className="space-y-5 mt-5 w-full"
                      onSubmit={formikPetugas.handleSubmit}
                    >
                      <CustomInput
                        placeholder={'Nama Petugas'}
                        inputStyle={'w-full'}
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
                        inputStyle={'w-full'}
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
                      <div className="flex w-full space-x-3">
                        <CustomInput
                          placeholder={'Password'}
                          inputStyle={'w-full'}
                          inputType={'password'}
                          id={'password'}
                          name={'password'}
                          value={formikPetugas.values.password}
                          onChange={formikPetugas.handleChange}
                          isError={
                            formikPetugas.touched.password &&
                            formikPetugas.errors.password
                          }
                          textError={formikPetugas.errors.password}
                          onBlur={formikPetugas.handleBlur}
                        />
                        <CustomInput
                          placeholder={'Konfirmasi Password'}
                          inputStyle={'w-full'}
                          inputType={'password'}
                          id={'confirmPasswordPetugas'}
                          name={'confirmPasswordPetugas'}
                          value={formikPetugas.values.confirmPasswordPetugas}
                          onChange={formikPetugas.handleChange}
                          isError={
                            formikPetugas.touched.confirmPasswordPetugas &&
                            formikPetugas.errors.confirmPasswordPetugas
                          }
                          textError={
                            formikPetugas.errors.confirmPasswordPetugas
                          }
                          onBlur={formikPetugas.handleBlur}
                        />
                      </div>
                      <CustomSelect
                        id={'role'}
                        name={'role'}
                        value={formikPetugas.values.role}
                        onBlur={formikPetugas.handleBlur}
                        onChange={formikPetugas.handleChange}
                        selectStyle={'w-full'}
                      >
                        <option value="">Pilih Role</option>
                        <option value="administrator">Administrator</option>
                        <option value="petugas">Petugas</option>
                      </CustomSelect>
                      <div className="w-full">
                        <CustomButton
                          type={'submit'}
                          label={'Buat Akun'}
                          stylingP={'text-black'}
                          stylingButton={
                            'w-full mb-1 py-3 border-none bg-gradient-to-r from-[#00c29a] to-[#e8cd70] hover:to-[#00c29a] hover:from-[#e8cd70]'
                          }
                        />
                        <div className="w-full flex justify-center">
                          <NavLink to={'/login'} className={''}>
                            <p className="text-white underline italic cursor-pointer hover:text-[#88898e] transition-all ease-in-out w-fit text-[13px]">
                              Sudah punya akun?
                            </p>
                          </NavLink>
                        </div>
                      </div>
                      <div className="flex justify-between w-full">
                        <SosmedLog
                          icon={<FaGoogle color="white" size={22} />}
                          stylingDiv={
                            'border-[#00c29a] hover:bg-[#00c29a] w-[120px] justify-center'
                          }
                        />
                        <SosmedLog
                          icon={<FaFacebook color="white" size={22} />}
                          stylingDiv={
                            'border-[#00c29a] hover:bg-[#00c29a] w-[120px] justify-center'
                          }
                        />
                        <SosmedLog
                          icon={<FaApple color="white" size={22} />}
                          stylingDiv={
                            'border-[#00c29a] hover:bg-[#00c29a] w-[120px] justify-center'
                          }
                        />
                      </div>
                    </form>
                  </TabPanel> */}
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        <section className=" h-[10%] px-[30px]">
          <div className="flex justify-between items-center h-full">
            <p className="text-[#88898e] italic text-[13px]">
              PTS 2023 - SMK MADIINATUL QUR'AN
            </p>
            <p className="text-[#88898e] italic text-[13px]">
              Copyright® Waky 2023
            </p>
          </div>
        </section>
      </body>
    </section>
  );
};

export default Register;
