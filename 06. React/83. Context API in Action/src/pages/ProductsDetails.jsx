import React, { useContext } from 'react'
import { useParams } from "react-router-dom"
import { ProductDataContext } from "../contexts/ProductContext";

const ProductsDetails = () => {
    const {id} = useParams();
    const product = useContext(ProductDataContext);
    let selectedProduct = ''
    if(product.length > 0) {
        selectedProduct = product.find((elem)=> elem.id == id)
    }
  return (
    <div>
        <div className="product">
            <img src={selectedProduct.image} alt="" />
            <h2>{selectedProduct.title}</h2>
        </div>
    </div>
  )
}

export default ProductsDetails