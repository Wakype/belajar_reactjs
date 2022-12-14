import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { TambahKeranjang } from '../../api/homeAPI';



export function actionKeranjang(produkId) {
    // const author = useSelector((state) => state.auth);
  return async (dispatch) => {
    try {
      let response = await TambahKeranjang(produkId);
      let data = response
      console.log('data tambahKeranjang =>', data.data);
    //   Cookies.set('myapps_token', data?.token);
      return data;
    } catch (err) {
      console.log('errAction tambahKeranjang =>', err);
      return err;
    }
  };
}
