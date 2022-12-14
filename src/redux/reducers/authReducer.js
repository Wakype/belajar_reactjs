const initialState = {
    name: "",
    email: "",
    password: "",
    status: "",
    jenisKelamin: "",
    token: "",
    isAuth: false,
  };
  
  export const authProcess = (state = initialState, action) => {
    if (action.type === "login") {
      return {
        ...state,
        name: action.name,
        email: action.email,
        password: action.password,
        status: action.status,
        jenisKelamin: action.jenisKelamin,
        token: action.token,
        isAuth: action.isAuth,
      };
    }
    if (action.type === "register") {
      return {
        ...state,
        name: action.name,
        email: action.email,
        password: action.password,
        status: action.status,
        jenisKelamin: action.jenisKelamin,
        isAuth: action.isAuth,
      };
    }
    return {
      ...state,
    };
  };