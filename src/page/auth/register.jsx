import React from "react";
import Cookies from "js-cookie";
import { Button, InputStateEvent } from "../../component";
import { useNavigate } from "react-router-dom";
import { LoginProses } from "../../API/login_API/login";
import ScaleLoader from "react-spinners/ScaleLoader";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { authLogin, authRegister } from "../../redux/action/authAction";
import "animate.css";

const Register = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [payload, setPayload] = React.useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errorMessage, setErrorMessage] = React.useState("");

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
      // const error = response?.response?.data?.message;
      // const errorLain = response?.response?.data?.errors;
      console.log("response register =>", response);
      // console.log("register =>", response.response.data.errors);
      // if (response?.status === "Success") {
      //   return navigate("/artikel", { replace: true });
      // }

      if (
        response?.response?.data?.errors?.name == "The name field is required."
      ) {
        setErrorMessage(response?.response?.data?.errors?.name);
        setIsError(true);
      }
      if (
        response?.response?.data?.errors?.email ==
          "The email has already been taken." ||
        response?.response?.data?.errors?.email ==
          "The email field is required."
      ) {
        setErrorMessage(response?.response?.data?.errors?.email);
      }
      if (payload.password == "'The password field is required.") {
        setErrorMessage(response?.response?.data?.errors?.password);
      }
      if (payload.password_confirmation !== payload.password) {
        setErrorMessage(response?.response?.data?.errors?.password);
      }
      if (response?.status == "Success") {
        return navigate("/artikel", { replace: true });
      }

      // const response = await LoginProses(payload);
      // const data = response.data;
      // Cookies.set("myapps_token", data?.token);

      // const Toast = Swal.mixin({
      //   toast: true,
      //   position: "top-end",
      //   showConfirmButton: false,
      //   timer: 3000,
      //   timerProgressBar: true,
      //   didOpen: (toast) => {
      //     toast.addEventListener("mouseenter", Swal.stopTimer);
      //     toast.addEventListener("mouseleave", Swal.resumeTimer);
      //   },
      // });

      // Toast.fire({
      //   icon: "success",
      //   title: "Berhasil Login!",
      // });

      // return navigate("/artikel", { replace: true });
    } catch (err) {
      console.log("error =>", err);
    } finally {
      setIsLoading(false);
    }

    console.log("submit =>", payload);
  };

  return (
    <section>
      <div className="flex justify-center flex-col items-center">
        <form
          action=""
          className="flex flex-col border rounded border-green-500 px-5 py-5 mt-5 shadow shadow-[#829460] form animate__animated animate__fadeInLeftBig"
          onSubmit={handleSubmit}
        >
          <div className="text-center flex flex-col">
            <h1 className="font8bit">REGISTER</h1>
            <h1 className="text-[15px] w-[300px] my-5 border border-red-500 rounded text-white bg-red-700 p-1">
              {errorMessage}
            </h1>
          </div>
          <div className="">
            <InputStateEvent
              // errorMessage={errorMessage}
              onChange={handleChange}
              name="name"
              value={payload.name}
              placeholder="Username"
              label={"Username"}
              type="text"
              isError={isError}
              textError="input salah"
            />
            <InputStateEvent
              // errorMessage={errorMessage}
              onChange={handleChange}
              name="email"
              value={payload.email}
              placeholder="Email"
              label={"Email"}
              type="email"
              isError={isError}
              textError="input salah"
            />
            <InputStateEvent
              onChange={handleChange}
              name="password"
              value={payload.password}
              placeholder="Password"
              label={"Password"}
              type="password"
            />
            <InputStateEvent
              onChange={handleChange}
              name="password_confirmation"
              value={payload.password_confirmation}
              placeholder="Confirm Password"
              label={"Confirm Password"}
              type="password"
            />
            <div className="flex justify-between mt-5">
              <Button
                edit={"px-5"}
                title={"Login"}
                type="button"
                onClick={() => {
                  return navigate("/login", { replace: true });
                }}
              />
              <Button
                edit={"px-5"}
                title={
                  isLoading ? (
                    <ScaleLoader color="#36d7b7" height={12} width={2} />
                  ) : (
                    "Buat Akun"
                  )
                }
                type="submit"
                onClick={() => {
                  // Cookies.set("myapps_token", "ini isi token");
                  // return navigate("/user", { replace: true });
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
