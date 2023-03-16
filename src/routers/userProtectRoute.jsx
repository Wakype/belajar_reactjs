import React from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authMe } from '../redux/action/authAction';
import { syncToken } from '../api/baseUrl';
import ScaleLoader from 'react-spinners/ScaleLoader';

export default function UserProtectRoute({ children }) {
  const role = useSelector((state) => state.auth.role);
  const auth = Cookies.get('myapps_token');
  const isAuth = useSelector((state) => state?.auth?.isAuth);
  console.log('isAuth =>', isAuth);

  const [process, setProcess] = React.useState(true);
  let dispatch = useDispatch();

  const onLoaded = async (values) => {
    let result = await dispatch(authMe(values));
    syncToken();
    setProcess(false);

    console.log('Result =>', result);
  };

  React.useEffect(() => {
    if (!isAuth) {
      if (auth !== undefined) {
        onLoaded();
      } else {
        setProcess(false);
      }
    } else {
      syncToken();
      setProcess(false);
    }
  }, []);

  if (process) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <ScaleLoader color="#36d7b7" height={50} width={10} />
      </div>
    );
  } else {
    console.log('auth =>', auth);
    console.log('role', role);

    return auth !== undefined ? children : <Navigate to="/login" />;
  }
}
