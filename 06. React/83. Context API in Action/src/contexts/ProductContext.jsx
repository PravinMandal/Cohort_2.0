import axios from "axios"
import React, { createContext, useEffect, useState } from 'react'
import { GetData } from "../api/ProductApi";

export const ProductDataContext = createContext();

const ProductContext = (props) => {
    const [products, setProducts] = useState([])
    const setData = async ()=> {
        const data = await GetData();
        setProducts(data);
    }
    useEffect(()=> {
        setData();
    }, [])

    return (
    <div>
        <ProductDataContext.Provider value={products}>
            {props.children}
        </ProductDataContext.Provider>
    </div>
    )
}

export default ProductContext