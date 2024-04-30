import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [published, setPublished] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        const { author, title, published } = response.data;
        setAuthor(author);
        setTitle(title);
        setPublished(published);
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert('there is an error');
      });
  }, [])

  const handleEditBook = () => {
    const data = {
      title,
      author,
      published
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book edited successfully!', { variant: 'success', className: 'bg-purple-300 text-black' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('error occurred, please check console', { variant: 'error', className: 'bg-purple-300 text-black' });
        console.log(error);
      });
  }

  return (
    <div className='p-4'>
      <div className='mt-4 ml-20'><BackButton /></div>
      <div className='flex justify-center m-8'>
        <h1 className='text-3xl my-4 ml-8'>Edit Book</h1>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleEditBook}>
          <div className='flex flex-col border-2 border-black rounded-xl w-[600px] p-4 mx-auto'>
            <div className='my-4'>
              <label className='text-xl mx-4 text-black '>Title</label>
              <input
                type='text'
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
                className='border-2 border-black px-4 py-2 w-full rounded-xl focus:outline-none'
              />
            </div>
            <div className='my-4'>
              <label className='text-xl mx-4 text-black '>Author</label>
              <input
                type='text'
                value={author}
                onChange={(e) => { setAuthor(e.target.value) }}
                className='border-2 border-black px-4 py-2 w-full rounded-xl focus:outline-none'
              />
            </div>
            <div className='my-4'>
              <label className='text-xl mx-4 text-black '>Published Year</label>
              <input
                type='text'
                value={published}
                onChange={(e) => { setPublished(e.target.value) }}
                className='border-2 border-black px-4 py-2 w-full rounded-xl focus:outline-none'
              />
            </div>
            <div className='flex align-center justify-center'>
              <button className='p-2 bg-black m-8 text-xl text-white w-40'>
                Save
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default EditBook
