import { Button, Card } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ProductContext } from "../../context/ProductContext"
import { CartContext } from "../../context/CartContext"

import HeaderCompany from "../../components/HeaderCompany/HeaderCompany"
import NavbarMain from "../../components/NavbarMain/NavbarMain"
import AsideMenu from "../../components/AsideMenu/AsideMenu"
import FooterMain from "../../components/FooterMain/FooterMain"

function ServicesPage() {

    const { products, setMyProducts } = useContext(ProductContext)
    const { cart, setMyCart } = useContext(CartContext);

    //offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //Navbar
    const [expanded, setExpanded] = useState(false);

    //console.log(products)
    const paramstyped = useParams();

    console.log(paramstyped)
    const [params, setParams] = useState([]);
    const [selectProduct, setSelectProduct] = useState([]);

    console.log("params", params)

    useEffect(() => { setParams(paramstyped.params) }, []);

    useEffect(() => {
            const findInArray = async () => {
                const findProduct = await products.find(element => element._id == params)
                console.log(findProduct)
                setSelectProduct(findProduct)
            }
            findInArray()
        }, [params])

    const Navigate = useNavigate();

    console.log("parametros", params)

    console.log("productos", products)
    
    if (params && selectProduct) { 

    //console.log(findInArray)
    return (<><HeaderCompany />
        <NavbarMain setExpanded={setExpanded} expanded={expanded} handleShow={handleShow} companyName="Company" />
        <AsideMenu show={show} handleClose={handleClose} placement="end" name="end" cart={cart}>
        </AsideMenu><div className="container my-5">
            <div className="row align-items-md-stretch">
                <div className="col-md-6 mt-2 mb-2">
                    <div className="p-5 text-bg-light rounded-3">
                        <div >
                            <img src={selectProduct.img} style={{ width: "400px" }} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-2 mb-2">
                    <div className="h-100 p-5 text-bg-light rounded-3">
                        <div>
                            <h1>{selectProduct.nameProduct}</h1>
                            <p>{selectProduct.description}</p>
                            <p>{selectProduct.price}</p>
                        </div>
                        <div className="align-items-end">
                            <Button onClick={() => { Navigate(-1) }}>Go Back</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
} else {
    return (<><HeaderCompany />
        <NavbarMain setExpanded={setExpanded} expanded={expanded} handleShow={handleShow} companyName="Company" />
        <AsideMenu show={show} handleClose={handleClose} placement="end" name="end" cart={cart}>
        </AsideMenu><div>
            <div className="container my-5">
                <div className="row align-items-md-stretch">
                    {products.map((element, index) => {
                        return (<>
                            <div key={index} className="col-md-6 mt-2 mb-2">
                                <div className="h-100 p-5 text-bg-light rounded-3">
                                    <div style={{ width: "202px", margin: "0 auto" }} >
                                        <img src={element.img} style={{ width: "300px" }} />
                                    </div>{console.log("ID", element._id)}
                                    <div>
                                        <h1>{element.nameProduct}</h1>
                                        <p>{element.description}</p>
                                        <p>{element.price}</p>
                                    </div>
                                    <div className="align-items-end">
                                        <Button variant="primary" as={Link} to={"/services/"+element._id}>Show more</Button><br />
                                    </div>
                                </div>
                            </div>

                        </>)
                    })}
                </div>
            </div>
        </div><FooterMain></FooterMain>
    </>)
}
}

export default ServicesPage
