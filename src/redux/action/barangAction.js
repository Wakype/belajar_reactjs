import { tambahBarang, updateBarang } from '../../api/barangApi';

export function actionTambahBarang(payload) {
  return async (dispatch) => {
    try {
      let response = await tambahBarang(payload);
      console.log('actionTambahBarang', response);
      return response;
    } catch (err) {
      console.log('err actionTambahBarang', err);
      return err;
    }
  };
}
export function actionUpdateBarang(payload) {
  return async (dispatch) => {
    try {
      let response = await updateBarang(payload);
      console.log('actionUpdateBarang', response);
      return response;
    } catch (err) {
      console.log('err actionUpdateBarang', err);
      return err;
    }
  };
}
