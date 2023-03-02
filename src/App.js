import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import SingleProductPage from './Pages/SingleProductPage';





function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Shop />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
      </Routes>
      </BrowserRouter>
      

    </>
  )
}

export default App;
