import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { tambahBarang } from '../../api/barangApi';

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
