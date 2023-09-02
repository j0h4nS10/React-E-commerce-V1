import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

const { Provider } = ProductContext;

const ProductProvider = ({children}) =>{
    const [ products, setProducts] = useState([]);
    const setMyProducts = (products) => setProducts(products);

    useEffect(() => {
        const ListProducts = async () => {
            const { data: { products: productsA } } = await axios.get(import.meta.env.VITE_API_URI_PRODUCT)
            console.log("home page data", productsA)
            setMyProducts(productsA)
        }
        ListProducts()
    }, []);

    return (<Provider value={{ products, setMyProducts }}>{children}</Provider>)
}

export default ProductProvider


