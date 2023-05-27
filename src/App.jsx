import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog';
import Home from './Pages/Home';


const App = () => {
  return (
    <div>
    <Routes>
    <Route path='/Blog/:id' component={Blog} />
    <Route path='/' component={Home} /> 
    </Routes>
    </div>
  );
};
  
export default App;