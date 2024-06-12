import React from 'react'
import { useAuth } from '../../hooks/useAuth';
import './home.css';

const Home = () => {
  
  const { user, logout } = useAuth();
  console.log( user );
  
  return (
    <>
      <h1>{user.readerFound.readername}</h1>
      <a href="/"  className='btn' onClick={ logout } >logout</a>
    </>
  )
}

export default Home;