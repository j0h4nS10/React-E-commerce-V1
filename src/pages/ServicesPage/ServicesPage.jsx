import { Button, Card } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ProductContext } from "../../context/ProductContext"
import axios from "axios"

function ServicesPage() {

    const { products } = useContext(ProductContext)

    console.log(products)

    /*const products = [{
        "_id": "64e38f601d0f6f4aa19243ff",
        "nameProduct": "Office Profesional Plus 2016",
        "description": "License office Profesional Plus OEM a good price",
        "price": 10,
        "__v": 0
    }, {
        "_id": "64e38f601d0f6f4aa19243ff",
        "nameProduct": "Office Profesional Plus 2016",
        "description": "License office Profesional Plus OEM a good price",
        "price": 20,
        "__v": 0
    }]*/   

    const paramstyped = useParams();
    const [params, setParams] = useState('true');

    useEffect(() => { setParams(paramstyped.params) }, []);

    const Navigate = useNavigate();

    console.log("productos", products)
    //console.log(params, paramstyped)
    if (params) {
        const aliarrayfragment = products.find(element => element.params == params)
        
        return (<><div className="container my-5">
            <div className="row align-items-md-stretch">
                <div className="col-md-6 mt-2 mb-2">
                    <div className="p-5 text-bg-light rounded-3">
                        <div>
                            <img src="imagen" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-2 mb-2">
                    <div className="h-100 p-5 text-bg-light rounded-3">
                        <div>
                            <h1>nameProduct</h1>
                            <p>nameProduct</p>
                            <p>nameProduct</p>
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
        return (<><div>
            <div className="container my-5">
                <div className="row align-items-md-stretch">
                    {products.map((element) => {
                        return (<>
                            <div className="col-md-6 mt-2 mb-2">
                                <div className="h-100 p-5 text-bg-light rounded-3">
                                    <div >
                                        <img src="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-2 mb-2">
                                <div className="h-100 p-5 text-bg-light rounded-3">
                                    <div>
                                        <h1>nameProduct</h1>
                                        <p>nameProduct</p>
                                        <p>nameProduct</p>
                                    </div>
                                    <div className="align-items-end">
                                        <Link to="">
                                            <Button>Get more info</Button></Link>
                                    </div>
                                </div>
                            </div></>)
                    })}
                </div>
            </div>
        </div>
        </>)
    }
}

export default ServicesPage
