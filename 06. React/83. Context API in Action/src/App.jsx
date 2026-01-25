import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductsDetails from "./pages/ProductsDetails"

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<ProductsDetails/>} />
      </Routes>
    </div>
  )
}

export default App