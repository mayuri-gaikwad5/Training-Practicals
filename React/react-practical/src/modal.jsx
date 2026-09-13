import { createPortal } from 'react-dom';

function Modal({ children }) {
  return createPortal(
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '40px',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default Modal;