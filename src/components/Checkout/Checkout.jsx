import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import Table from 'react-bootstrap/Table';
import ButtonWrapper from "../PayPal/ButtonWrapper";
import HeaderCompany from "../HeaderCompany/HeaderCompany";
import NavbarMain from "../NavbarMain/NavbarMain";
import FooterMain from "../FooterMain/FooterMain";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const Checkout = () => {
    const currency = "USD";
    const [amount, setAmount ] = useState('');
    
    const [expanded, setExpanded] = useState(false);
    const handleShow = () => setShow(true);

    const { cart, addProduct, deleteProduct } = useContext(CartContext);
    let sum = [];
    let sumItems = [];

    const listProductObject = () => {
        const productObject = {};
        cart.forEach((element) => {
            if (productObject[element._id]) {
                productObject[element._id].push(element);
            } else {
                productObject[element._id] = [element];
            }
        });
        return productObject;
    }

    //const amount = sumItems.reduce(function (a, b) { return a + b; }, 0);

    const listCart = () => {
        const productObject = listProductObject();

        return (<><Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Img</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Amount</th>
                </tr>
            </thead><tbody>{Object.entries(productObject).map(
                ([idProduct, product]) => (
                    <tr key={idProduct}>
                        <td><img src={product[0].img} style={{ width: "80px" }}></img></td>
                        <td>{product[0].nameProduct}</td>
                        <td>{product[0].price}</td>
                        <td>{product.length}</td>
                        {sum.push(parseInt(product[0].price))}
                        {sumItems.push(parseInt(product.length))}
                    </tr>
                ))}
                <tr>
                    <td></td>
                    <td>Total</td>
                    <td style={{ fontweight: "bold" }}>
                        {sum.reduce(function (a, b) { return a + b; }, 0)}</td>
                        
                    <td>{sumItems.reduce(function (a, b) { return a + b; }, 0)}</td>
                </tr>
            </tbody>
        </Table></>);
    };

    const showCart = () => {
        if (cart.length) {
            return listCart();
        }
        return <h5>Empty</h5>;
    }

    useEffect( ()=>{setAmount(sum.reduce(function (a, b) { return a + b; }, 0))},[sum])

    return (<>
    <PayPalScriptProvider options={{
        "client-id": import.meta.env.VITE_CLIENT_ID,
        //components: 'buttons',
        //currency: 'USD' 
    }}><HeaderCompany />
        <NavbarMain setExpanded={setExpanded} expanded={expanded} handleShow={handleShow} companyName="Company" />
        <div className='container' style={{ margin: "0 auto" }}>
            <div className='row row-cols-8 justify-content-center'>
                <div className='mt-2'>
                    {showCart()}
                    <div className="row-cols-4 justify-content-end">
                        <ButtonWrapper showSpinner={false} currency={currency} amount={amount}></ButtonWrapper>
                    </div>
                </div></div></div>
        <FooterMain />
    </PayPalScriptProvider>

    </>)
}

export default Checkout