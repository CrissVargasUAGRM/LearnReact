import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

     /* const [images, setImages] = useState([]); */

    /*1 const [count, setCount] = useState(0); */
    {/*1 <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>Tocame 🥵</button> */}

    const {data:images, loading} = useFetchGifs(category);

  return (
      <Fragment>
        <h3>{category}</h3>

        {loading ? 'Cargando...' : 'Data Cargada'}

        <div className='card-grid'>
            

            {images.map( (img) => {
                return (<GifGridItem 
                    key={img.id}
                    {...img}
                />)
            })}
        </div>
      </Fragment>
        
  )
}
