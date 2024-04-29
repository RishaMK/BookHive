import React,{ useState,useEffect }from 'react';
import Spinner from '../components/Spinner';
import Card from '../components/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';




const Home = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    setLoading(true);
    axios
    .get('http://localhost:5555/books')
    .then((response)=>{
      setBooks(response.data.data);
      setLoading(false);
    })
    .catch((error)=>{
      console.log(error);
      alert("error occured pls check console");
      setLoading(false);
    })
  },[]);

  return (
    <div className='p=4'>
      <div className='flex flex-center justify-center items-center p-4'>
        <h1 className='text-3xl text-black p-4'>All Books</h1>
        <Link to='/books/create'>
          <div className='border-2 border-purple-800 text-purple-800 hover:border-black hover:text-black ml-16 hover:scale-110 transition-transform duration-250'>
            <AddIcon />
          </div>
        </Link>
      </div>
      {loading? (<Spinner />):(
          <div className='m-8'> 
            <Card title='hello' author='placeholder' published='check'/>
          </div>
        )}
    </div>
  )
}

export default Home