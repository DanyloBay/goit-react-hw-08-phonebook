import { useState } from 'react';

function useShowModal(option) {
  const [showModal, setShowModal] = useState(option);
  const toggleModal = () => setShowModal(prevState => !prevState);

  return { toggleModal, showModal };
}

export default useShowModal;
