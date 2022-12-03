import React, { useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { CustomButton, CustomInput } from '../components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';
import { ResetPasswordProses } from '../api/loginAPI';
import {
  authLupaPassword,
  authResetPassword,
} from '../redux/action/authAction';
import { useDispatch } from 'react-redux';

const ResetPassword = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { id, token } = useParams();

  let [isLoading, setIsLoading] = React.useState(false);
  let [isError, setIsError] = React.useState(false);
  let [payload, setPayload] = React.useState({
    passwordBaru: '',
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
      const response = await dispatch(authResetPassword(id, token, payload));
      console.log('responseResetPassword =>', response);
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
      console.log('ResetPasswordProses =>', err);
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
          <h1 className="poppins text-[40px] font-bold text-white  overflow-hidden">
            Reset Password
          </h1>
          <p className="poppins w-[440px] text-white text-[20px] pb-[30px]">
            Please enter your new password.
          </p>
          <form className="w-full flex flex-col justify-evenly overflow-hidden">
            <div>
              <CustomInput
                name="passwordBaru"
                onChange={handleChange}
                label="New Password"
                stylingInput={`px-3 w-full py-2 border-white text-white`}
                stylingLabel={`text-white`}
              />
              <CustomInput
                label="Confirm Password"
                stylingInput={`px-3 w-full py-2 border-white text-white`}
                stylingLabel={`text-white`}
              />
            </div>

            <div className="w-full space-y-5 mt-[20px]">
              <CustomButton
                onClick={handleSubmit}
                typeButton={'submit'}
                label={'Reset Password'}
                stylingButton={`w-full hover:text-[#395144] hover:bg-white hover:border-white font-semibold py-[10px] border-white bg-[#395144] text-white`}
              />
            </div>
          </form>
        </div>
      </div>

      <div className="w-[50%] h-screen justify-center bgLogin flex flex-col ">
        <div className="h-[400px] bg-[#395144] flex flex-col justify-center px-[150px] rounded-tl-[10px] rounded-bl-[10px] space-y-5">
          <div>
            <h1 className="poppins text-white text-[50px] font-bold">
              LOREM IPSUM
            </h1>
            <div className="h-[5px] w-[125px] bg-white"></div>
          </div>
          <div>
            <p className="poppins text-justify w-[360px] text-white">
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

export default ResetPassword;
