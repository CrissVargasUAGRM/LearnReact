import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

  /* uso de estados para cambiar el estado del input */

    const [inputValue, setInputValue] = useState('');

    /* funciiones para controlar con eventos los estados */

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    }

    /* funcion para el estadod e la categoria en el componente principal */

    const handleSubmit = (e) => {
      e.preventDefault();

      if(inputValue.length > 2){
        setCategories(cats => [ inputValue, ...cats ]);
        setInputValue('');
      }
      
      
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={inputValue}
            onChange={handleInputChange}
        />
      </form>
    </>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
