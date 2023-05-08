import {React, useContext} from 'react'
import Modal from 'react-modal';
import { MyContext } from '../context/ContextProvider';

const ModalPage = () => {
  const {openModal,isOpen,closeModal,handleSubmit,handleInputChange} = useContext(MyContext)
    
  return (
    <div>
    <button onClick={openModal} className='add-button'>Add books to collection</button>
        <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h2>Add a book to your collection</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="book-title">Book Title:</label>
          <input type="text" id="book-title" name="book-title" onChange={handleInputChange} />
          <br />
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" onChange={handleInputChange} />
          <br />
          <label htmlFor="pages">Pages:</label>
          <input type="number" id="pages" name="pages" onChange={handleInputChange} />
          <br />
          <label htmlFor='status'>Status:</label>
          <button type="submit">Submit</button>
        </form>
      </Modal>
      
    </div>
  )
}

export default ModalPage
