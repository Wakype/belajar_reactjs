import React, { useEffect } from 'react';
import { CustomInput, CustomButton } from '../components';
import { FaGoogle } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LoginProses } from '../api/loginAPI';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { authLogin } from '../redux/action/authAction';

const Login = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

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

  console.log('change', payload);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await dispatch(authLogin(payload));
      const data = response.response;
      // const error = response?.response?.data?.message;
      console.log('responseLogin =>', response);
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
        return navigate('/home', { replace: true });
      }
      if (response?.response?.data?.status === 'Fail') {
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
          icon: 'error',
          title: response?.response?.data?.msg,
        });
      }
      // const response = await LoginProses(payload);

      // Cookies.set("myapps_token", data?.token);
    } catch (err) {
      console.log('authLoginErr =>', err);
    } finally {
      setIsLoading(false);
    }
  };
  console.log('payload', payload);
  return (
    <section className="flex">
      <div className="w-[50%] h-screen justify-center bgLogin flex flex-col ">
        <div className="h-[400px] px-[70px] bg-[#395144] flex flex-col justify-center rounded-tr-[10px] rounded-br-[10px] space-y-5">
          <div>
            <h1
              className="poppins text-white text-[50px] font-bold"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos="fade-right"
            >
              TOKO KITA
            </h1>
            <div
              data-aos-duration="1700"
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
        <div className="bg-[#395144] h-full w-full px-[80px] py-[40px]">
          <h1
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos="fade-down"
            className="poppins text-[40px] font-bold text-white py-[30px] overflow-hidden"
          >
            Selamat Datang!
          </h1>
          <form className="w-full flex flex-col justify-evenly overflow-hidden">
            <div>
              <CustomInput
                value={payload.email}
                typeInput={'email'}
                name="email"
                onChange={handleChange}
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos="fade-left"
                label="Email"
                stylingInput={`px-3 w-full py-2 border-white text-white`}
                stylingLabel={`text-white`}
              />
              <CustomInput
                value={payload.password}
                typeInput={'password'}
                name="password"
                onChange={handleChange}
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos="fade-left"
                label="Password"
                stylingInput={`px-3 w-full py-2 border-white text-white`}
                stylingLabel={`text-white`}
              />
            </div>

            <div
              data-aos-duration="1700"
              data-aos-easing="ease-in-out"
              data-aos="fade-left"
              className="w-full flex justify-end"
            >
              <NavLink to={'/forgotPassword'}>
                <p className="text-white poppins text-[15px] cursor-pointer">
                  Lupa Password?
                </p>
              </NavLink>
            </div>

            <div className="w-full space-y-5 mt-[80px]">
              <NavLink to={'/home'}>
                <CustomButton
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                  data-aos="fade-left"
                  onClick={handleSubmit}
                  typeButton={'submit'}
                  label={'Sign in'}
                  stylingButton={`w-full text-[#395144] bg-white border-white font-semibold py-[10px] hover:border-white hover:bg-[#395144] hover:text-white`}
                />
              </NavLink>
              <CustomButton
                data-aos-duration="2200"
                data-aos-easing="ease-in-out"
                data-aos="fade-left"
                typeButton={'button'}
                label={'Sign in with Google'}
                stylingButton={`w-full text-white border-white bg-[#395144] font-semibold flex items-center justify-center space-x-2 py-[10px] hover:bg-white hover:text-[#395144]`}
                tag={<FaGoogle />}
              />
            </div>

            <div className="flex justify-center mt-5">
              <p className="text-white poppins text-[15px] overflow-hidden">
                Tidak mempunyai akun?{' '}
                <NavLink to={'/signup'}>
                  <span className="text-black font-semibold underline cursor-pointer">
                    Sign up
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

export default Login;
