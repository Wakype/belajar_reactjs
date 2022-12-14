import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

import { PostBeli } from '../../api/homeAPI';

export function actionBeli(payload) {
    return async (dispatch) => {
        try {
            let response = await PostBeli(payload)
            let data = response
            console.log("ActionBeli =>", data.data)
            return data
        } catch (err) {
            console.log("actionBeli err =>", err)
            return err
        }
    }
}