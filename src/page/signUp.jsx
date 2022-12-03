import React, { useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { CustomButton, CustomInput, CustomSelect } from '../components';
import { useDispatch } from 'react-redux';
import { LoginProses } from '../api/loginAPI';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Swal from 'sweetalert2';
import { authLogin, authRegister } from '../redux/action/authAction';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SignUp = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  // response?.response?.data?.errors?.email?.msg,

  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [payload, setPayload] = React.useState({
    name: '',
    email: '',
    password: '',
    status: '',
    jenisKelamin: '',
  });

  const handleChange = (e) => {
    setIsError(false);
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
      console.log('responseRegister =>', response);
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
      console.log('authRegisterErr =>', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  console.log('change', payload);
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
              <CustomSelect
                data-aos-duration="1700"
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
              <CustomSelect
                data-aos-duration="2000"
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
            </div>

            <div className="w-full space-y-5 mt-[40px]">
              <NavLink to={'/home'}>
                <CustomButton
                  data-aos-duration="2200"
                  data-aos-easing="ease-in-out"
                  data-aos="fade-left"
                  onClick={handleSubmit}
                  typeButton={'submit'}
                  label={'Sign up'}
                  stylingButton={`w-full text-[#395144] bg-white border-white font-semibold py-[10px] hover:border-white hover:bg-[#395144] hover:text-white`}
                />
              </NavLink>
              <CustomButton
                data-aos-duration="2500"
                data-aos-easing="ease-in-out"
                data-aos="fade-left"
                typeButton={'button'}
                label={'Sign in with Google'}
                stylingButton={`w-full text-white border-white font-semibold flex items-center justify-center space-x-2 py-[10px] hover:bg-white hover:text-[#395144]`}
                tag={<FaGoogle />}
              />
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
