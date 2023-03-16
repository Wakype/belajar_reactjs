import { createPenawaranBarang, updateStatusLelang } from '../../api/lelangApi';

export function actionUpdateStatus(payload) {
  return async (dispatch) => {
    try {
      let response = await updateStatusLelang(payload);
      console.log('actionUpdateStatus', response);
      return response;
    } catch (err) {
      console.log('err actionUpdateStatus', err);
      return err;
    }
  };
}

export function actionCreatePenawaranBarang(payload) {
  return async (dispatch) => {
    try {
      let response = await createPenawaranBarang(payload);
      console.log('actionpenawaranbarang', response);
      return response;
    } catch (err) {
      console.log('err actionpenawaranbarang', err);
      return err;
    }
  };
}
