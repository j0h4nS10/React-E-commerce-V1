import { useContext, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { CartContext } from "../../context/CartContext";
import ButtonWrapper from "../PayPal/ButtonWrapper";

function AsideMenu({ show, handleClose, placement, name }) {

  const { cart, addProduct, deleteProduct } = useContext(CartContext)

  let sum = [];

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

    const listCart = () => {
      const productObject = listProductObject();

      return Object.entries(productObject).map(
        ([idProduct, product]) => (
          <Card className="text-center" key={idProduct}>
          <Card.Body>
            <Card.Img variant="top" src={product[0].img} style={{ width: 50 }} />
            <Card.Title>{product[0].nameProduct}</Card.Title>
            {sum.push(parseInt(product[0].price))}
            <div className="centercontainer">
              <div className="row row-cols-3">
                <Button size="sm" variant="danger" onClick={() => deleteProduct(product[0])} >
                <AiOutlineMinus />
              </Button>
              <Card.Text>{product.length}</Card.Text>
              <Button size="sm" variant="success" onClick={() => addProduct(product[0])} >
                <AiOutlinePlus />
              </Button>
              </div>              
            </div>
            <Card.Text>Price: {product[0].price}</Card.Text>
            
          </Card.Body>
        </Card>)
      );
    };

    const showCart = () => {
      if (cart.length) {
        return listCart();
      }
      return <h5>Empty</h5>;
    };

    /*
      const { cart: carrito, addProduct: agregarProductoCarrito, deleteProduct: eliminarProductoCarrito } = useContext(CartContext);
      console.log(carrito)
      const obtenerProductoObjeto = () => {
        const productoObject = {};
        carrito.forEach((producto) => {
          if (productoObject[producto._id]) {
            productoObject[producto._id].push(producto); 
          } else {
            productoObject[producto._id] = [producto];
          }
        });
        return productoObject;
      };
    
      const mapearCarrito = () => {
        const productoObjeto = obtenerProductoObjeto();
    
        return Object.entries(productoObjeto).map(
          ([idProducto, productos]) => (
            <Card className="text-center" key={idProducto}>
              <Card.Body>
                <Card.Img variant="top" src={productos[0].img} style={{ width: 50 }} />
                <Card.Title>{productos[0].nameProduct}</Card.Title>
                {sum.push(parseInt(productos[0].price))}
                <div className="centercontainer">
                  <div className="row row-cols-3">
                    <Button size="sm" variant="danger" onClick={() => eliminarProductoCarrito(productos[0])} >
                    <AiOutlineMinus />
                  </Button>
                  <Card.Text>{productos.length}</Card.Text>
                  <Button size="sm" variant="success" onClick={() => agregarProductoCarrito(productos[0])} >
                    <AiOutlinePlus />
                  </Button>
                  </div>              
                </div>
                <Card.Text>Price: {productos[0].price}</Card.Text>
              </Card.Body>
            </Card>
          )
        );
      };
    
      const mostrarCarrito = () => {
        if (carrito.length) {
          return mapearCarrito();
        }
        return <h5>Carrito vacío</h5>;
      };
      */

    return (<>
      <Offcanvas show={show} onHide={handleClose} placement={placement} name={name}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mt-2">
            {/*mostrarCarrito()*/}
            {showCart()}
            <ButtonWrapper amount="20"></ButtonWrapper>
          </div>
          <h1>Total</h1>
          <h1>{/*carrito.reduce((acc, next) => acc + next.price, 0)*/}</h1>
          <h1>{sum.reduce(function (a, b) { return a + b; }, 0)}</h1>
        </Offcanvas.Body>
      </Offcanvas>
    </>)
  }

  export default AsideMenu