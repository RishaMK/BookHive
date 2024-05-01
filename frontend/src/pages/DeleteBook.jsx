import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { SnackbarContent, enqueueSnackbar, useSnackbar } from 'notistack';

const deleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
        enqueueSnackbar('book deleted successfully!', {variant:'success', className:'bg-indigo-300 text-black'});
      })
      .catch((error) => {
        setLoading(false);
        alert('error occured check console');
        console.log(error);
      })
  }
  return (
    <div className='p-4'>
      <BackButton />
      {loading ? (<Spinner />) : ''}
      <div className='flex flex-col items-center border-2 border-indigo-950 rounded-xl w-fit p-8 mx-auto mt-48 justify-center'>
        <h3 className='text-xl'>Are you sure you want to delete this book? </h3>
        <button className='p-4 bg-indigo-600 text-white m-8 w-64 rounded-xl hover:bg-indigo-500 transition-transform duration-300 hover:scale-105 '
        onClick={handleDeleteBook}>Yes</button>
      </div>
    </div>
  )
}

export default deleteBook