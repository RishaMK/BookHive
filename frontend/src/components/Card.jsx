import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';



const Card = ({ book,index }) => {
  return (
    <div className='h-64 w-250 bg-indigo-200 border-2 border-black rounded-xl m-8 flex flex-col justify-center items-center hover:bg-indigo-100 hover:scale-105 transition-transform duration-500'>
      <div className='flex flex-col items-center'>
        <h1 className='text-xl mb-4'>
          <div className='font-bold mb-4'>
            {index+1}<br></br>
          </div>
          Title: {book.title}<br />
          Author: {book.author}<br />
          Published In: {book.published}
        </h1>
        <div className='flex flex-row justify-center'>
          <Link to={`/books/details/${book._id}`} className='text-green-500'>
            <InfoIcon />
          </Link>
          <Link to={`/books/edit/${book._id}`} className='ml-4 text-yellow-500'>
            <EditIcon />
          </Link>
          <Link to={`/books/delete/${book._id}`} className='ml-4 text-red-500'>
            <DeleteIcon />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card