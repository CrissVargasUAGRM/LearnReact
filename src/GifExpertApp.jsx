import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

/* componente donde renderizamos los demas componentes algo asi como el app.component de angular */

export const GifExpertApp = () => {

  /* uso de estados para mover las categorias */

    const [categories, setCategories] = useState(['One punch']);

    /* const handleAdd = () => {
      setCategories([...categories, 'hola']);
    } */

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr/> 
        
        <ol>
          {
            categories.map(category => {
              return <GifGrid 
                      category={category}
                      key={category}/>
            })
          }
        </ol>
    </>
  )
}









/* 
import React, { Component } from 'react';

class GifExpertApp extends Component {
  render() {
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
        </>
    );
  }
}

export default GifExpertApp; */

