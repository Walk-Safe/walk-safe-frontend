import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    height: '10em',
    width: '10em',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function TripETA( { modalIsOpen, closeModal } ) {

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="trip ETA modal"
      preventScroll={true}
    >
      <div>
        <p>Your ETA for this trip is X minutes.</p>
        <button>BEGIN TRIP</button>
      </div>
    </ReactModal>
  )
}

export default TripETA;