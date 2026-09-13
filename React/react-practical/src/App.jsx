import { useState } from 'react';
import Modal from './modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  console.log('showModal:', showModal);

  return (
    <div>
      <h1>React Portals</h1>

      <button onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {showModal && (
        <Modal>
          <h2>Hello from Portal!</h2>

          <button onClick={() => setShowModal(false)}>
            Close
          </button>
        </Modal>
      )}
    </div>
  );
}

export default App;