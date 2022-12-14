import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { CustomButton, CustomInput } from '../components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';
import { LupaPasswordProses } from '../api/loginAPI';
import { authLupaPassword } from '../redux/action/authAction';

const ForgotPassword = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let [isLoading, setIsLoading] = React.useState(false);
  let [isError, setIsError] = React.useState(false);
  let [payload, setPayload] = React.useState({
    email: '',
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
      const response = await dispatch(authLupaPassword(payload));
      console.log('responseLupaPassword =>', response);
      console.log('errvalidate', response.response.data);
      if (response.status === 'Success') {
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

        return Toast.fire({
          icon: 'success',
          title: response.msg,
        });
      }
      if (response?.response?.data?.status === 'fail') {
        
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

        return Toast.fire({
          icon: 'error',
          title: response?.response?.data?.msg,
        });
      }
      // const response = await LoginProses(payload);

      // Cookies.set("myapps_token", data?.token);
    } catch (err) {
      console.log('lupaPasswordProses =>', err);
    } finally {
      setIsLoading(false);
    }
  };
  console.log('payload', payload);

  console.log('change', payload);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="flex">
      <div className="w-[50%] bgLogin1 h-screen rounded-tl-[10px] flex items-center justify-center">
        <div className="bg-[#395144] h-full w-full px-[80px] py-[40px] flex flex-col justify-center">
          <h1
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos="fade-right"
            className="poppins text-[40px] font-bold text-white  overflow-hidden"
          >
            Forgot Password
          </h1>
          <p
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos="fade-right"
            className="poppins w-[440px] text-white text-[20px] pb-[30px]"
          >
            Please enter your email and we will give You a verification code.
          </p>
          <form className="w-full flex flex-col justify-evenly overflow-hidden">
            <div
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos="fade-right"
            >
              <CustomInput
                value={payload.email}
                name={'email'}
                onChange={handleChange}
                label="Email"
                stylingInput={`px-3 w-full py-2 border-white text-white`}
                stylingLabel={`text-white`}
              />
            </div>

            <div
              data-aos-duration="1700"
              data-aos-easing="ease-in-out"
              data-aos="fade-right"
              className="w-full space-y-5 mt-[20px]"
            >
              <NavLink to={'/resetPassword'}>
                <CustomButton
                  onClick={handleSubmit}
                  typeButton={'submit'}
                  label={'Send Email'}
                  stylingButton={`w-full hover:text-[#395144] hover:bg-white hover:border-white font-semibold py-[10px] border-white bg-[#395144] text-white`}
                />
              </NavLink>
            </div>
          </form>
        </div>
      </div>

      <div className="w-[50%] h-screen justify-center bgLogin flex flex-col ">
        <div className="h-[400px] bg-[#395144] flex flex-col justify-center pl-[120px] rounded-tl-[10px] rounded-bl-[10px] space-y-5">
          <div>
            <h1
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos="fade-left"
              className="poppins text-white text-[50px] font-bold"
            >
              LOREM IPSUM
            </h1>
            <div
              data-aos-duration="1700"
              data-aos-easing="ease-in-out"
              data-aos="fade-left"
              className="h-[5px] w-[125px] bg-white"
            ></div>
          </div>
          <div>
            <p
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos="fade-left"
              className="poppins text-justify w-[360px] text-white"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
              praesentium sit magni. Exercitationem tempora explicabo, totam
              tempore inventore optio nobis voluptatum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
