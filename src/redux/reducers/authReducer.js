const initialState = {
  namaLengkap: '',
  username: '',
  password: '',
  telp: '',
  namaPetugas: '',
  id_level: '',
  token: '',
  id: '',
  role: '',
  isAuth: false,
};

export const authProcess = (state = initialState, action) => {
  if (action.type === 'login') {
    return {
      ...state,
      id: action.id,
      namaLengkap: action.namaLengkap,
      namaPetugas: action.namaPetugas,
      username: action.username,
      password: action.password,
      role: action.role,
      telp: action.telp,
      id_level: action.id_level,
      token: action.token,
      isAuth: action.isAuth,
    };
  }

  return {
    ...state,
  };
};
