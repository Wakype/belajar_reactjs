import React from "react";
import Cookies from "js-cookie";
import { Button, InputStateEvent } from "../../component";
import { useNavigate } from "react-router-dom";
import { LoginProses } from "../../API/login_API/login";
import ScaleLoader from "react-spinners/ScaleLoader";

const Login = () => {
  let navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [payload, setPayload] = React.useState({
    email: "",
    password: "",
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
      const response = await LoginProses(payload);
      const data = response.data;
      Cookies.set("myapps_token", data?.token);

      return navigate("/artikel", { replace: true });
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
          className="flex flex-col border rounded border-green-500 px-5 py-5 mt-5 shadow shadow-[#829460] form"
          onSubmit={handleSubmit}
        >
          <div className="font8bit text-center">
            <h1>LOGIN</h1>
          </div>
          <div className="">
            <InputStateEvent
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
            <div className="flex justify-end">
              <Button
                edit={"px-5"}
                title={
                  isLoading ? (
                    <ScaleLoader color="#36d7b7" height={12} width={2} />
                  ) : (
                    "Login"
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

export default Login;
