import { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext'
import { CartContext } from '../../context/CartContext';

function Cards({ props }) {

    const { products } = useContext(ProductContext)
    const { cart, addProduct, deleteProduct } = useContext(CartContext);


    return (<><div className="container">
        <hr></hr>
        <h1>Out Products</h1>
        <hr></hr>
        {/*row-cols-1 row-cols-lg-3 */}
        <div className="row" style={{ margin: "0 auto" }}>
            {/*row row-cols-1 row-cols-lg-2 row-cols-lg-3 */}
            <div className='row row-cols-1 row-cols-lg-2 row-cols-lg-3'>
                {products.map((element, index) => {
                    return (<div className='col'>
                        <Card key={index} className="text-center" style={{ margin: 5 }}>
                            <Card.Title style={{ margin: 5, padding: 10 }}>{element.nameProduct}</Card.Title>
                            <Card.Body>
                                <div className="imgcardhome">
                                    <Card.Img variant="top" src={element.img} style={{width: "200px", height: "200px"}} />
                                </div>
                                <Card.Text>{element.description}
                                    <Card.Text><span>price: </span>{element.price} <span> usd</span></Card.Text>
                                </Card.Text>
                                <Button variant="primary" as={Link} to={"/services/"+element._id}>Show more</Button><br />
                                <Button variant="secondary" onClick={() => { addProduct({
                                    _id: element._id, nameProduct: element.nameProduct, 
                                    description: element.description, price: element.price, 
                                    img: element.img }) }}>Add to the Cart</Button>
                            </Card.Body> 
                        </Card>
                    </div>)
                })}

            </div>

        </div>
    </div>
    </>)
}

export default Cards

