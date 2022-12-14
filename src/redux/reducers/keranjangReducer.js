const initalState = {
  produkId: '',
  isAuth: false,
};

export const keranjangProcess = (state = initalState, action) => {
  if (action.type === 'tambahKeranjang') {
    return {
      ...state,
      produkId: action.produkId,
      isAuth: action.isAuth,
    };
  }
  return {
    ...state,
  };
};
