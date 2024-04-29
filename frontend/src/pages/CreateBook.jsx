import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const createBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [published, setPublished] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); //unlike Link, this is used to navigate based on certain triggers or events
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      published
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book created successfully!', { variant: 'success', className: 'bg-transparent text-black' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('error occurred, please check console', { variant: 'error', className: 'bg-transparent text-black' });
        console.log(error);
      });
  }

  return (
    <div className='p-4'>
      <div className='mt-4 ml-20'><BackButton /></div>
      <div className='flex justify-center m-8'>
        <h1 className='text-3xl my-4 ml-8'>Create Book</h1>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSaveBook}>
          <div className='flex flex-col border-2 border-black rounded-xl w-[600px] p-4 mx-auto'>
            <div className='my-4'>
              <label className='text-xl mx-4 text-black '>Title</label>
              <input
                type='text'
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
                className='border-2 border-black px-4 py-2 w-full rounded-xl focus:outline-none focus:border-white'
              />
            </div>
            <div className='my-4'>
              <label className='text-xl mx-4 text-black '>Author</label>
              <input
                type='text'
                value={author}
                onChange={(e) => { setAuthor(e.target.value) }}
                className='border-2 border-black px-4 py-2 w-full rounded-xl focus:outline-none focus:border-white'
              />
            </div>
            <div className='my-4'>
              <label className='text-xl mx-4 text-black '>Published Year</label>
              <input
                type='text'
                value={published}
                onChange={(e) => { setPublished(e.target.value) }}
                className='border-2 border-black px-4 py-2 w-full rounded-xl focus:outline-none focus:border-white'
              />
            </div>
            <div className='flex align-center justify-center'>
              <button className='p-2 bg-black m-8 text-xl text-white hover:text-black hover:bg-white rounded-xl w-40'>
                Save
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default createBook
