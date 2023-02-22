import React from 'react';
import { CustomButton, CustomInput, SosmedLog } from '../components';
import { NavLink } from 'react-router-dom';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      namaLengkap: '',
      username: '',
      nomorTelpon: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      namaLengkap: Yup.string()
        .min(2, 'Password minimal 2 huruf')
        .required('Nama Lengkap wajib diisi'),
      username: Yup.string()
        .min(4, 'Username minimal 4 huruf')
        .required('Username wajib diisi'),
      nomorTelpon: Yup.string()
        .min(10, 'Nomor Telpon minimal 10 huruf')
        .required('Nomor Telpon wajib diisi'),
      email: Yup.string().email('Email salah').required('Email wajib diisi'),
      password: Yup.string()
        .min(8, 'Password minimal 8 huruf')
        .required('Password wajib diisi'),
      confirmPassword: Yup.string()
        .min(8, 'Password minimal 8 huruf')
        .required('Password wajib diisi'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // formik.resetForm();
      // return navigate("/outlet/createOutlet", { replace: true });
    },
  });
  return (
    <section className="bg-black h-screen">
      <header className="px-[30px] h-[10%]">
        <section className="justify-between flex items-center h-full">
          <NavLink to={'/login'}>
            <div className=" logoT cursor-pointer text-[45px] bg-clip-text text-transparent bg-gradient-to-r from-[#00c29a] to-[#e8cd70]">
              Lelang<span className="text-[25px] logoT">Pro</span>
            </div>
          </NavLink>
        </section>
      </header>

      <body className="h-[90%] pt-[50px]">
        <section className="h-[90%] px-[30px]">
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
                      <span className="hover:bg-[#222222] cursor-pointer hover:rounded transition-all ease-in-out px-[50px] w-full py-[5px]">
                        Pengguna
                      </span>
                    </Tab>

                    <Tab
                      className={`text-[#C9D1D9] w-full py-[11px] text-[14px] text-center`}
                      selectedClassName={`bg-transparent border-b-[2px] border-b-[#00c29a] font-semibold`}
                    >
                      <span className="hover:bg-[#222222] cursor-pointer hover:rounded transition-all ease-in-out px-[50px] w-full py-[5px]">
                        Administrator
                      </span>
                    </Tab>
                  </TabList>

                  <TabPanel className={'w-full space-y-5 mt-5'}>
                    <CustomInput
                      placeholder={'Nama Lengkap'}
                      inputStyle={'w-full'}
                      inputType={'text'}
                      id={'namaLengkap'}
                      name={'namaLengkap'}
                      value={formik.values.namaLengkap}
                      onChange={formik.handleChange}
                      isError={
                        formik.touched.namaLengkap && formik.errors.namaLengkap
                      }
                      textError={formik.errors.namaLengkap}
                      onBlur={formik.handleBlur}
                    />
                    <CustomInput
                      placeholder={'Username'}
                      inputStyle={'w-full'}
                      inputType={'text'}
                      id={'username'}
                      name={'username'}
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      isError={
                        formik.touched.username && formik.errors.username
                      }
                      textError={formik.errors.username}
                      onBlur={formik.handleBlur}
                    />
                    <CustomInput
                      placeholder={'Nomor Telpon'}
                      inputStyle={'w-full'}
                      inputType={'number'}
                      id={'nomorTelpon'}
                      name={'nomorTelpon'}
                      value={formik.values.nomorTelpon}
                      onChange={formik.handleChange}
                      isError={
                        formik.touched.nomorTelpon && formik.errors.nomorTelpon
                      }
                      textError={formik.errors.nomorTelpon}
                      onBlur={formik.handleBlur}
                    />
                    <div className="flex w-full space-x-3">
                      <CustomInput
                        placeholder={'Password'}
                        inputStyle={'w-full'}
                        inputType={'password'}
                        id={'password'}
                        name={'password'}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        isError={
                          formik.touched.password && formik.errors.password
                        }
                        textError={formik.errors.password}
                        onBlur={formik.handleBlur}
                      />
                      <CustomInput
                        placeholder={'Konfirmasi Password'}
                        inputStyle={'w-full'}
                        inputType={'password'}
                        id={'confirmPassword'}
                        name={'confirmPassword'}
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        isError={
                          formik.touched.confirmPassword && formik.errors.confirmPassword
                        }
                        textError={formik.errors.confirmPassword}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    <div className="w-full">
                      <CustomButton
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
                  </TabPanel>
                  <TabPanel className={'w-full space-y-5'}>
                    <CustomInput
                      placeholder={'Nama Lengkap'}
                      inputStyle={'w-full'}
                    />
                    <CustomInput
                      placeholder={'Username'}
                      inputStyle={'w-full'}
                    />
                    <div className="flex w-full space-x-3">
                      <CustomInput
                        placeholder={'Password'}
                        inputStyle={'w-full'}
                      />
                      <CustomInput
                        placeholder={'Konfirmasi Password'}
                        inputStyle={'w-full'}
                      />
                    </div>
                    <div className="w-full">
                      <CustomButton
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
                  </TabPanel>
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
