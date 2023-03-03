import React, { useState } from 'react';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { CustomButton, CustomInput, SosmedLog } from '../components';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { authLogin } from '../redux/action/authAction';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .min(8, 'Password minimal 8 huruf')
        .required('Password wajib diisi'),
      username: Yup.string()
        .min(4, 'Username minimal 4 huruf')
        .required('Username wajib diisi'),
    }),
    onSubmit: (values) => {
      console.log('object', values);
      const handleSubmit = async (e) => {
        try {
          setIsLoading(true);
          // alert(JSON.stringify(values, null, 2));

          const response = await dispatch(authLogin(values));
          console.log('responnya', response);
          console.log('nama', values.username);
          if (response?.status === 'Success') {
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
              title: response?.msg,
            });

            if (response?.user?.id_level === 1 || response?.user?.id_level === 2) {
              return navigate('/admin/dashboard/barang', { replace: true });
            } else {
              return navigate('/beranda', { replace: true });
            }
          }

          // if (response?.response?.data?.status === 'Fail') {
          //   const Toast = Swal.mixin({
          //     toast: true,
          //     position: 'top-end',
          //     showConfirmButton: false,
          //     timer: 3000,
          //     timerProgressBar: true,
          //     didOpen: (toast) => {
          //       toast.addEventListener('mouseenter', Swal.stopTimer);
          //       toast.addEventListener('mouseleave', Swal.resumeTimer);
          //     },
          //   });

          //   Toast.fire({
          //     icon: 'error',
          //     title: response?.response?.data?.msg,
          //   });
          // }
        } catch (err) {
          console.log('authregisterErr =>', err);
        } finally {
          setIsLoading(false);
        }
      };
      handleSubmit();
    },
  });
  return (
    <section className="bg-black h-screen">
      <header className="px-[30px] h-[8%]">
        <section className="justify-between flex items-center h-full">
          <div className=" logoT cursor-pointer text-[45px] bg-clip-text text-transparent bg-gradient-to-r from-[#00c29a] to-[#e8cd70]">
            Lelang<span className="text-[25px] logoT">Pro</span>
          </div>
          <div className="text-white">
            <NavLink to={'/register'}>
              <CustomButton
                label={'Registrasi sekarang!'}
                stylingButton={
                  'hover:bg-[#00c29a] hover:border-black border-[#00c29a] hover:-translate-y-1 '
                }
                stylingP={'text-[16px] hover:text-black'}
              />
            </NavLink>
          </div>
        </section>
      </header>

      <body className="h-[92%] pt-[100px]">
        <section className=" h-[90%] px-[30px]">
          <div className="flex flex-col items-center w-full mb-[50px]">
            <h1 className="text-[50px] logoT tracking-wide uppercase">
              Login sekarang{' '}
              <span className="text-[#00c29a] logoT">Tawar sekarang</span>
            </h1>
            <p className="text-[#88898e]">
              Menangkan bagian Anda, biarkan impian Anda menjadi kenyataan
            </p>
            <p className="text-[#88898e]">
              lelangpro telah digunakan lebih dari 1.000.000+ pengguna dan telah
              dipercaya oleh perusahaan - perusahaan besar
            </p>
          </div>

          <form
            className="w-full justify-center flex"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex justify-between items-center w-[1000px]">
              <div className="space-y-3 w-[400px]">
                <CustomInput
                  placeholder={'Username'}
                  inputStyle={'w-full'}
                  inputType={'username'}
                  id={'username'}
                  name={'username'}
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  isError={formik.touched.username && formik.errors.username}
                  textError={formik.errors.username}
                  onBlur={formik.handleBlur}
                />
                <CustomInput
                  placeholder={'Password'}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  isError={formik.touched.password && formik.errors.password}
                  textError={formik.errors.password}
                  inputStyle={'w-full'}
                  id={'password'}
                  name={'password'}
                  inputType={'password'}
                />
                <CustomButton
                  type={'submit'}
                  label={'Login'}
                  stylingP={'text-black'}
                  stylingButton={
                    'w-full py-4 border-none bg-gradient-to-r from-[#00c29a] to-[#e8cd70] hover:to-[#00c29a] hover:from-[#e8cd70]'
                  }
                />
                <div>
                  <p className="text-white underline italic cursor-pointer hover:text-[#88898e] transition-all ease-in-out w-fit">
                    Lupa Password?
                  </p>
                </div>
              </div>

              <div>
                <p className="text-white poppins font-bold text-[20px]">/</p>
              </div>

              <div className="w-[400px] space-y-3">
                <SosmedLog
                  label={'Masuk dengan Google'}
                  icon={<FaGoogle color="white" size={22} />}
                  stylingDiv={
                    'border-[#00c29a] space-x-5 hover:bg-[#00c29a] justify-start'
                  }
                />
                <SosmedLog
                  label={'Masuk dengan Facebook'}
                  icon={<FaFacebook color="white" size={22} />}
                  stylingDiv={
                    'border-[#00c29a] space-x-5 hover:bg-[#00c29a] justify-start'
                  }
                />
                <SosmedLog
                  label={'Masuk dengan Apple Account'}
                  icon={<FaApple color="white" size={22} />}
                  stylingDiv={
                    'border-[#00c29a] space-x-5 hover:bg-[#00c29a] justify-start'
                  }
                />
                <div className="flex justify-end">
                  <NavLink to={'/register'}>
                    <p className="text-white underline italic cursor-pointer text-end hover:text-[#88898e] transition-all ease-in-out w-fit">
                      Buat akun
                    </p>
                  </NavLink>
                </div>
              </div>
            </div>
          </form>
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

export default Login;
