import {React, useState, createContext} from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({});
    const [formSubmissions, setFormSubmissions] = useState([]);
  
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newSubmission = {
        bookTitle: formData['book-title'],
        author: formData['author'],
        pages: formData['pages']
      };
      // Add the new object to the array of form submissions
      setFormSubmissions([...formSubmissions, newSubmission]);
      closeModal();
    }
  
    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    return (
      <MyContext.Provider value={{ 
        openModal, 
      isOpen, 
      closeModal,handleSubmit,
      handleInputChange,
      formSubmissions }}>
        {children}
      </MyContext.Provider>
    );
  };