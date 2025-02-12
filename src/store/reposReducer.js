const initialState = {
  repos: [],
  loading: true,
};

export const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REPOS':
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
