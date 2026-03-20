import React from 'react'
import { Link } from "react-router-dom"

const Products = () => {
  return (
    <div className="flex flex-col mb-10 justify-center p-10 text-5xl gap-5">
      <h1>Products</h1>
      <div className="flex gap-5">
        <Link className="underline" to={'/products/men'}>Men</Link>
        <Link className="underline" to={'/products/women'}>Women</Link>
      </div>
    </div>
  )
}

export default Products