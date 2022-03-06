import React, { Fragment } from 'react'

export const GifGridItem = ({id, title, url}) => {
  return (
    <div className="card animate__animated animate__backInRight animate__delay-2s">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
