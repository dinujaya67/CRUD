import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Book = () => {
    const [books,setBooks] = useState([])
    
    useEffect(()=>{
        const FeacthBooks = async ()=>{
            try{
                const res = await axios.get(`http://localhost:8800/books/`)
                setBooks(res.data);
                console.log(res.data);
            }catch(err){
                console.log(err);
            }
        }
        FeacthBooks()
    },[]);

    const handleDelete = async (id)=>{
      try {
        await axios.delete(`http://localhost:8800/books/${id}`)
        window.location.reload()
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div>
      <h1>My Book Shop</h1>
      <div className="books">
        {books.map(Book=>(
          <div className="book" key={Book.id}>
            {Book.img && <img src={Book.img} alt=''/>}
            <h2>{Book.title}</h2>
            <p>{Book.desc}</p>
            <span>{Book.price}</span>
            <button className="delete" onClick={()=>handleDelete(Book.id)}>Delete</button>
            <button className="update"><Link to={`/update/${Book.id}`}>Update</Link></button>
          </div>
        ))}
      </div>
      <button><Link to='/add'>Add New Book</Link></button>
    </div>
  )
}

export default Book
