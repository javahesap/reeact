import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const withLoading = (WrappedComponent, fetchData, stateSelector) => {
  return (props) => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => stateSelector(state).loading);
    const error = useSelector((state) => stateSelector(state).error);

    useEffect(() => {
      dispatch(fetchData()); // ✅ Her bileşen için dinamik veri çekme
    }, [dispatch]);

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p style={{ color: 'red' }}>Error: {error}</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
