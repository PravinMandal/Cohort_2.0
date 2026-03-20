import React, { useContext } from 'react'
import { ProductDataContext } from "../contexts/ProductContext"
import { Link } from "react-router-dom"

const Products = () => {
    const products = useContext(ProductDataContext)
    let renderData = 'Loading....'
    if(products.length > 0) {
        renderData = products.map(function(elem, idx){
        return <Link  to={`/products/${elem.id}`}>
          <div className="product">
            <img src={elem.image} alt="" />
            <h2>{elem.title}</h2>
          </div>
        </Link>
      })
    }
  return (
    <div className="allproducts">
        {renderData}
    </div>
  )
}

export default Products