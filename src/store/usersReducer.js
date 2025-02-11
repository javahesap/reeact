const initialState = {
  users: [],
  loading: true,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
