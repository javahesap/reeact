import axios from 'axios';

// Set Products Action
export const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  };
};

// Set Users Action
export const setUsers = (users) => {
  return {
    type: 'SET_USERS',
    payload: users,
  };
};



export const setRepos= (repos) => {
  return {
    type: 'SET_REPOS',
    payload: repos,
  };
};
// Fetch Products from API
export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await axios.get('https://fakestoreapiserver.reactbd.com/smart');
    dispatch(setProducts(response.data));
  };
};

// Fetch Users from API
export const fetchUsers = () => {
  return async (dispatch) => {
    const response = await axios.get('https://dummyjson.com/users');
    dispatch(setUsers(response.data.users));
  };
};




export const fetchRepos = () => {
  return async (dispatch) => {
    const response = await axios.get('https://api.github.com/users/hadley/orgs');
    dispatch(setRepos(response.data));
  };
};
