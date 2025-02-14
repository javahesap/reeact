import React from 'react';

const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {children}  {/* Modal içeriği burada render edilecek */}
      </div>
    </div>
  );
};

export default Modal;
