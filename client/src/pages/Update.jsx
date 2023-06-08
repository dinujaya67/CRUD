import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Update = () => {
  const [book,setBook] = useState({
    title:"",
    desc:"",
    price:null,
    img:"",
  });

  const navigate = useNavigate()
  const location = useLocation()
  const bookId = location.pathname.split("/")[2];

  const handleChange = (e)=>{
    setBook(prev=>({...prev, [e.target.name]: e.target.value}))
  };
  console.log(book);

  const handleClick = async e =>{
    e.preventDefault()
    try {
      await axios.put("http://localhost:8800/books/"+ bookId, book)
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='form'>
      <h1>Update The Book</h1>
      <input type="text" name="title" placeholder="title" onChange={handleChange} />
      <input type="text" name="desc" placeholder="desc" onChange={handleChange} />
      <input type="number" name="price" placeholder="price" onChange={handleChange} />
      <input type="text" name="img" placeholder="cover" onChange={handleChange} />
      <button className='formButton' onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update
