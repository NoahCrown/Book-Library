import React, { useContext } from 'react'
import { MyContext } from '../context/ContextProvider'
const BooksInfo = () => {
    

  const {formSubmissions} = useContext(MyContext)

  return (
    <div className='books'>
        {formSubmissions.map(val => {
        return (
        <div className='book-container'>
            <h2>{val.bookTitle}</h2>
            <h2>by {val.author}</h2>     
            <h2>{val.pages} pages</h2>
            <div className='have-read'>
                <p className='status'>In progress</p>

            </div>
       </div>
        )
    })}

    </div>
    

  )
}

export default BooksInfo
