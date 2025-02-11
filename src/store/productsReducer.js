const initialState = {
  products: [],
  loading: true,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
