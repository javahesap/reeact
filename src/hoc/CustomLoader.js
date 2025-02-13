import React from 'react';

const CustomLoader = ({ message }) => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h3>🔄 {message || "Yükleniyor... Lütfen Bekleyin"}</h3>
    </div>
  );
};

export default CustomLoader;
