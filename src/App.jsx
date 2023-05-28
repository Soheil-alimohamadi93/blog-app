import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';


const App = () => (
    <div className='container'>
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/Blog' Component={Blog}/>
    </Routes>
    </div>
  );

  
export default App;