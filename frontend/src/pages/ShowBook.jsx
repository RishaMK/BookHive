import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const showBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, []);
  return (
    <div className='p-4'>
      <div className='mt-4 ml-20'><BackButton /></div>
      <div className='flex justify-center'>
        <h1 className='text-3xl my-4'>Show Book</h1>
      </div>
      <div className='flex justify-center mt-16'>
        {loading ? (<Spinner />) : (
          <div className='flex flex-col border-2 border-black rounded-xl w-fit p-4 bg-indigo-200'>
            <div className='my-4'>
              <span className='text-xl mr-4 text-black'>Id:</span>
              <span className='text-[17px]'>{book._id}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-black'>Title:</span>
              <span className='text-[17px]'>{book.title}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-black'>Author:</span>
              <span className='text-[17px]'>{book.author}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-black'>Published Year:</span>
              <span className='text-[17px]'>{book.published}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-black'>Created At:</span>
              <span className='text-[17px]'>
                {new Date(book.createdAt).toLocaleDateString([], { year: 'numeric', month: '2-digit', day: '2-digit' })}
                &nbsp;&nbsp;
                {new Date(book.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-black'>Last Updated At:</span>
              <span className='text-[17px]'>
                {new Date(book.updatedAt).toLocaleDateString([], { year: 'numeric', month: '2-digit', day: '2-digit' })}
                &nbsp;&nbsp;
                {new Date(book.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default showBook