const initialState = {
  namaLengkap: "",
  username: "",
  password: "",
  telp: "",
  namaPetugas: "",
  id_level: "",
  token: "",
  role: "",
  isAuth: false,
};

export const authProcess = (state = initialState, action) => {
  if (action.type === "login") {
    return {
      ...state,
      namaLengkap: action.namaLengkap,
      namaPetugas: action.namaPetugas,
      username: action.username,
      password: action.password,
      telp: action.telp,
      id_level: action.id_level,
      token: action.token,
      isAuth: action.isAuth,
    };
  }
  if (action.type === "register") {
    return {
      ...state,
      namaLengkap: action.namaLengkap,
      namaPetugas: action.namaPetugas,
      username: action.username,
      password: action.password,
      telp: action.telp,
      role: action.role,
      id_level: action.id_level,
      isAuth: action.isAuth,
    };
  }
  return {
    ...state,
  };
};