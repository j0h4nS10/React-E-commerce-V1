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
    const [params, setParams] = useState('true');

    console.log(params)

    useEffect(() => { setParams(paramstyped.params) }, []);

    const Navigate = useNavigate();

    console.log("productos", products)
    //console.log(params, paramstyped)
    if (params) {
        const aliarrayfragment = async () => await products.find(element => element.params == params)

        return (<><HeaderCompany />
            <NavbarMain setExpanded={setExpanded} expanded={expanded} handleShow={handleShow} companyName="Company" />
            <AsideMenu show={show} handleClose={handleClose} placement="end" name="end" cart={cart}>
            </AsideMenu><div className="container my-5">
                <div className="row align-items-md-stretch">
                    <div className="col-md-6 mt-2 mb-2">
                        <div className="p-5 text-bg-light rounded-3">
                            <div >
                                <img src={aliarrayfragment.img} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-2 mb-2">
                        <div className="h-100 p-5 text-bg-light rounded-3">
                            <div>
                                <h1>{aliarrayfragment.nameProduct}</h1>
                                <p>{aliarrayfragment.description}</p>
                                <p>{aliarrayfragment.price}</p>
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
                                    <div className="h-100 p-5 text-bg-light rounded-3"><div style={{ width: "202px", margin: "0 auto" }} >
                                        <img src={element.img} style={{ width: "300px" }} />
                                    </div>
                                        <div>
                                            <h1>{element.nameProduct}</h1>
                                            <p>{element.description}</p>
                                            <p>{element.price}</p>
                                        </div>
                                        <div className="align-items-end">
                                            <Link to="">
                                                <Button>Get more info</Button></Link>
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
