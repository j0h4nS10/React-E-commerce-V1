import { createContext, useState } from "react";

export const ProductContext = createContext();

const { Provider } = ProductContext;

const ProductProvider = ({children}) =>{
    const [ products, setProducts] = useState([]);
    const setMyProducts = (products) => setProducts(products);
    return (<Provider value={{ products, setMyProducts }}>{children}</Provider>)
}

export default ProductProvider


