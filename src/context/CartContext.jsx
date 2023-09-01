import { createContext, useState } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    //
    const addProduct = (product) => {
        setCart([...cart, product])
        //console.log(cart)
    }
    
    // view error
    const deleteProduct = (idProduct) => {
        const oldCart = [...cart];
        const indexElement = oldCart.findIndex(
            (product) => product._id !== idProduct
        );
        oldCart.splice(indexElement, 1);
        setCart(oldCart);
    };

    return (<Provider value={{ cart, addProduct, deleteProduct }}>{children}</Provider>)
}

export default CartProvider

