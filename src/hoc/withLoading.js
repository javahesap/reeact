import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const withLoading = (WrappedComponent, fetchData, stateSelector, options = {}) => {
  const { loadingMessage = "Loading...", LoadingComponent = null, minLoadingTime = 1500 } = options;

  return (props) => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => stateSelector(state).loading);
    const error = useSelector((state) => stateSelector(state).error);
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
      dispatch(fetchData());

      // Min. bekleme süresi için bir timer başlat
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, minLoadingTime);

      return () => clearTimeout(timer); // Temizleme işlemi
    }, [dispatch]);

    if (loading || showLoading) {
      return LoadingComponent ? <LoadingComponent message={loadingMessage} /> : <p>{loadingMessage}</p>;
    }

    if (error) {
      return <p style={{ color: 'red' }}>Error: {error}</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
