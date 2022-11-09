import Cookies from "js-cookie";
import { authMeProcess, LoginProses, RegisterProses } from "../../API/login_API/login";

export function authLogin(payload) {
  return async (dispatch) => {
    try {
      let response = await LoginProses(payload);
      // let response = await authMeProcess();
      let data = response.data;
      console.log("data =>", data);

      dispatch({
        type: "login",
        name: data?.user?.name,
        email: data?.user?.email,
        isAuth: true,
      });

      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log("auth error =>", err);
      return err;
    }
  };
}

export function authMe(payload) {
  return async (dispatch) => {
    try {
      // let response = await LoginProses(payload);
      let response = await authMeProcess();
      let data = response.data;
      console.log("data =>", data);

      dispatch({
        type: "login",
        name: data?.user?.name,
        email: data?.user?.email,
        isAuth: true,
      });

      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log("auth error =>", err);
      return err;
    }
  };
}

export function authRegister(payload) {
  return async (dispatch) => {
    try {
      let response = await RegisterProses(payload);
      let data = response.data;
      console.log("data", data);
      dispatch({
        type: "login",
        name: data?.user?.name,
        email: data?.user?.email,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (err) {
      console.log("auth error =>", err);
      return err;
    }
  };
}
