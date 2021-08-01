import React from 'react';
import ReactModal from 'react-modal';
import { NavLink } from 'react-router-dom';

ReactModal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    height: '40%',
    width: '45%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'ghostwhite',
    overlayClassName: 'eta-modal-overlay'
  },
};

function TripComplete( { modalIsOpen, closeModal } ) {

  // const closeOnTime =() => {
  //   setTimeout(() => closeModal, 5000)
  // }

  return (
      <ReactModal
          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose={closeModal}
          contentLabel='trip complete modal'
          preventScroll={true}
          closeTimeoutMS={5}
      >
        <div className='complete-modal'>
            <p className='complete-message'>
              <span>Your trip is complete! Contact.Name has been notified that you made it safely to your destination. </span>
            </p>
          <div className='modal-timeout' /></div>
            <NavLink exact to='/'>
            </NavLink>
      </ReactModal>
  )
}

export default TripComplete;