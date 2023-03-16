import { updatePetugas } from '../../api/userApi';

export function updatePetugasAction(payload) {
  return async (dispatch) => {
    try {
      let response = await updatePetugas(payload);
      let data = response.data;

      dispatch({
        type: 'login',
        id: data?.user?.id,
        namaLengkap: data?.user?.namaLengkap,
        namaPetugas: data?.user?.namaPetugas,
        username: data?.user?.username,
        password: data?.user?.password,
        role: data?.user?.role?.level,
        telp: data?.user?.telp,
        id_level: data?.user?.id_level,
        token: data?.token,
        isAuth: true,
      });
      console.log('dataAuthAction =>', data);

      return data;
    } catch (err) {
      console.log('auth error =>', err);
      return err;
    }
  };
}
