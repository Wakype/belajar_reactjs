import Cookies from 'js-cookie';
import { LoginProses, RegisterProses, authMeProcess } from '../../api/authApi';

export function authLogin(payload) {
  return async (dispatch) => {
    try {
      let response = await LoginProses(payload);
      // let response = await authMeProcess();
      let data = response.data;
      console.log('dataAuthAction =>', data);

      dispatch({
        type: 'login',
        namaLengkap: data?.user?.namaLengkap,
        namaPetugas: data?.user?.namaPetugas,
        username: data?.user?.username,
        password: data?.user?.password,
        telp: data?.user?.telp,
        id_level: data?.user?.id_level,
        token: data?.token,
        isAuth: true,
      });

      Cookies.set('myapps_token', data?.token);
      return data;
    } catch (err) {
      console.log('auth error =>', err);
      return err;
    }
  };
}

export function authRegister(payload) {
  return async (dispatch) => {
    try {
      let response = await RegisterProses(payload);
      let data = response.data;
      console.log('data', data);
      
      return data;
    } catch (err) {
      console.log('auth error =>', err);
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
      console.log('data =>', data);

      dispatch({
        type: 'login',
        namaLengkap: data?.user?.namaLengkap,
        namaPetugas: data?.user?.namaPetugas,
        username: data?.user?.username,
        password: data?.user?.password,
        telp: data?.user?.telp,
        id_level: data?.user?.id_level,
        token: data?.token,
        isAuth: true,
      });

      Cookies.set('myapps_token', data?.token);
      return data;
    } catch (err) {
      console.log('auth error =>', err);
      return err;
    }
  };
}