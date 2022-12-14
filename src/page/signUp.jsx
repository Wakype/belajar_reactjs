import React, { useEffect } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import { CustomButton, CustomInput, CustomSelect } from '../components';
import { useDispatch } from 'react-redux';

import ScaleLoader from 'react-spinners/ScaleLoader';
import Swal from 'sweetalert2';
import { authRegister } from '../redux/action/authAction';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SignUp = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [confirmError, setConfirmError] = React.useState('');
  const [statusError, setStatusError] = React.useState('');
  const [kelaminError, setKelaminError] = React.useState('');
  const [payload, setPayload] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    status: '',
    jenisKelamin: '',
  });

  const handleChange = (e) => {
    setIsError(false);
    if (
      payload.name === '' ||
      payload.email === '' ||
      payload.password === '' ||
      payload.confirmPassword === '' ||
      payload.status === '' ||
      payload.jenisKelamin === ''
    ) {
      if (payload.name !== '') {
        setNameError('');
      }
      if (payload.email !== '') {
        setEmailError('');
      }
      if (payload.password !== '') {
        setPasswordError('');
      }
      if (payload.confirmPassword !== '') {
        setConfirmError('');
      }
      if (payload.status !== '') {
        setStatusError('');
      }
      if (payload.jenisKelamin !== '') {
        setKelaminError('');
      }
    }
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await dispatch(authRegister(payload));
      // console.log('responseRegister =>', response);
      // console.log('errValidte =>', response.response.data);
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
        return navigate('/login', { replace: true });
      }
      if (response?.response?.data?.status === 'fail') {
        if (
          response?.response?.data?.errors?.name?.msg === 'Nama Wajib diisi' ||
          response?.response?.data?.errors?.email?.msg ===
            'Email sudah digunakan' ||
          response?.response?.data?.errors?.email?.msg ===
            'Gunakan Email Valid' ||
          payload.password === '' ||
          response?.response?.data?.errors?.password?.msg ===
            'Password wajib 8 huruf' ||
          payload.confirmPassword !== payload.password ||
          response?.response?.data?.errors?.status?.msg ===
            'status bukan emum' ||
          response?.response?.data?.errors?.jenisKelamin?.msg ===
            'jenis kelamin hanya laki-laki peempuan'
        ) {
          if (
            payload.name === '' ||
            response?.response?.data?.errors?.name?.msg === 'Nama Wajib diisi'
          ) {
            setNameError(response?.response?.data?.errors?.name?.msg);
          }
          if (
            payload.email === '' ||
            response?.response?.data?.errors?.email?.msg ===
              'Email sudah digunakan' ||
            response?.response?.data?.errors?.email?.msg ===
              'Gunakan Email Valid'
          ) {
            setEmailError(response?.response?.data?.errors?.email?.msg);
          }
          if (
            payload.password === '' ||
            response?.response?.data?.errors?.password?.msg ===
              'Password wajib 8 huruf'
          ) {
            setPasswordError(response?.response?.data?.errors?.password?.msg);
          }
          if (payload.confirmPassword !== payload.password) {
            setConfirmError('Password harus sama');
          }
          if (
            payload.status === '' ||
            response?.response?.data?.errors?.status?.msg ===
              'status bukan emum'
          ) {
            setStatusError('Status harus active / nonactive');
          }
          if (
            payload.jenisKelamin === '' ||
            response?.response?.data?.errors?.jenisKelamin?.msg ===
              'jenis kelamin hanya laki-laki peempuan'
          ) {
            setKelaminError('Jenis Kelamin harus laki-laki / perempuan');
          }
        }

        // const Toast = Swal.mixin({
        //   toast: true,
        //   position: 'top-end',
        //   showConfirmButton: false,
        //   timer: 3000,
        //   timerProgressBar: true,
        //   didOpen: (toast) => {
        //     toast.addEventListener('mouseenter', Swal.stopTimer);
        //     toast.addEventListener('mouseleave', Swal.resumeTimer);
        //   },
        // });
        // Toast.fire({
        //   icon: 'error',
        //   title: response?.response?.data?.errors?.email?.msg,
        // });
      }
    } catch (err) {
      // console.log('authRegisterErr =>', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  // console.log('change', payload);
  return (
    <section className="flex">
      <div className="w-[50%] h-screen justify-center bgLogin flex flex-col ">
        <div className="h-[400px] px-[70px] bg-[#395144] flex flex-col justify-center rounded-tr-[10px] rounded-br-[10px] space-y-5">
          <div>
            <h1
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos="fade-right"
              className="poppins text-white text-[50px] font-bold"
            >
              BUAT AKUN
            </h1>
            <div
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos="fade-right"
              className="h-[5px] w-[125px] bg-white"
            ></div>
          </div>
          <div
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos="fade-right"
          >
            <p className="poppins text-justify w-[360px] text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
              praesentium sit magni. Exercitationem tempora explicabo, totam
              tempore inventore optio nobis voluptatum.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[50%] bgLogin1 h-screen rounded-tl-[10px] ">
        <div className="bg-[#395144] h-full w-full px-[80px] py-[20px]">
          <form className="w-full flex flex-col justify-evenly overflow-hidden">
            <div>
              <CustomInput
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos="fade-left"
                typeInput={'text'}
                placeholder={'Masukkan Nama'}
                onChange={handleChange}
                value={payload.name}
                name={'name'}
                label="Nama"
                stylingInput={`px-3 w-full py-2 border-white text-white`}
                stylingLabel={`text-white`}
              />
              <p className="text-red-600 text-[15px] italic poppins">
                {nameError}
              </p>
              <CustomInput
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                data-aos="fade-left"
                typeInput={'email'}
                placeholder={'Masukkan Email'}
                onChange={handleChange}
                value={payload.email}
                name={'email'}
                label="Email"
                stylingInput={`px-3 w-full py-2 border-white text-white`}
                stylingLabel={`text-white`}
              />
              <p className="text-red-600 text-[15px] italic poppins">
                {emailError}
              </p>
              <CustomInput
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos="fade-left"
                typeInput={'password'}
                placeholder={'Masukkan Password'}
                onChange={handleChange}
                value={payload.password}
                name={'password'}
                label="Password"
                stylingInput={`px-3 w-full py-2 border-white text-white`}
                stylingLabel={`text-white`}
              />
              <p className="text-red-600 text-[15px] italic poppins">
                {passwordError}
              </p>
              <CustomInput
                data-aos-duration="1700"
                data-aos-easing="ease-in-out"
                data-aos="fade-left"
                typeInput={'password'}
                placeholder={'Konfirmasi Password'}
                onChange={handleChange}
                value={payload.confirmPassword}
                name={'confirmPassword'}
                label="Konfirmasi Password"
                stylingInput={`px-3 w-full py-2 border-white text-white`}
                stylingLabel={`text-white`}
              />
              <p className="text-red-600 text-[15px] italic poppins">
                {confirmError}
              </p>
              <CustomSelect
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                data-aos="fade-left"
                onChange={handleChange}
                value={payload.status}
                name={'status'}
                opt1={'Pilih Aktifasi'}
                opt2={'Active'}
                opt3={'Nonactive'}
                value1={'Aktivasi'}
                value2={'active'}
                value3={'nonactive'}
                label={'Aktifasi'}
                StylingSelect={'border-white text-white px-2'}
              />
              <p className="text-red-600 text-[15px] italic poppins">
                {statusError}
              </p>
              <CustomSelect
                data-aos-duration="2200"
                data-aos-easing="ease-in-out"
                data-aos="fade-left"
                onChange={handleChange}
                value={payload.jenisKelamin}
                name={'jenisKelamin'}
                opt1={'Jenis Kelamin'}
                opt2={'Laki - Laki'}
                opt3={'Perempuan'}
                value1={'Jenis Kelamin'}
                value2={'laki-laki'}
                value3={'perempuan'}
                label={'Jenis Kelamin'}
                StylingSelect={'border-white text-white px-2'}
              />
              <p className="text-red-600 text-[15px] italic poppins">
                {kelaminError}
              </p>
            </div>

            <div className="w-full space-y-5 mt-[30px]">
              {isLoading ? (
                <div className="flex justify-center items-center border-white border-2 rounded py-[10px] cursor-wait transition-all ease-in-out text-white poppins">
                  <ScaleLoader color="#36d7b7" height={15} width={5} />
                </div>
              ) : (
                <CustomButton
                  data-aos-duration="2500"
                  data-aos-easing="ease-in-out"
                  data-aos="fade-left"
                  onClick={handleSubmit}
                  typeButton={'submit'}
                  label={'Sign up'}
                  stylingButton={`w-full text-[#395144] bg-white border-white font-semibold py-[10px] hover:border-white hover:bg-[#395144] hover:text-white`}
                />
              )}
            </div>

            <div className="flex justify-center mt-5">
              <p className="text-white poppins text-[15px] overflow-hidden">
                Sudah mempunyai akun?{' '}
                <NavLink to={'/login'}>
                  <span className="text-black font-semibold underline cursor-pointer">
                    Sign in
                  </span>
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
