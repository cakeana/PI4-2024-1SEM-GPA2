import React from "react";

const Modal = ({ modal, setModal, children }) => {
  return (
    <>
      {modal && (
        <>
          <div onClick={() => setModal(false)} className={`bg-white/50 fixed inset-0 z-10 ${modal ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-500`}></div>
          {children} 
        </>
      )}
    </>
  );
};

export default Modal;
