import React from 'react'

const Card = ({title,author,published}) => {
  return (
    <div className='h-64 w-96 bg-white rounded-xl m-8 flex flex-col justify-center items-center'>
        <h1 className='bg-white'>{title}<br></br>{author}<br></br>{published}</h1>
    </div>
  )
}

export default Card