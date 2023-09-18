import { useState, useEffect, useContext } from "react";
import axios from "axios";
import HeaderCompany from '../HeaderCompany/HeaderCompany';
import NavbarMain from '../NavbarMain/NavbarMain';
import AsideMenu from "../AsideMenu/AsideMenu";
import FooterMain from '../FooterMain/FooterMain';
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const MyProfile = () => {

    // Nav Bars
    const [expanded, setExpanded] = useState(false);
    //offcanvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // cart use Context
    const { cart, setMyCart } = useContext(CartContext);

    const [datauser, setDatauser] = useState({});
    const params = useParams();
    console.log("params", params.params);

    useEffect(() => { 
        const getUsers = async () => {
        const response = await axios.get(import.meta.env.VITE_API_URI_USERS +"/users" + params.params);
        console.log("axios get users", response.data);
        setDatauser(response.data);
        return response
        }
        getUsers();
     }, []);

     //console.log(datauser);
     

    return (<><HeaderCompany></HeaderCompany>
    <NavbarMain setExpanded={setExpanded} expanded={expanded} handleShow={handleShow} companyName="Company" />
    <AsideMenu show={show} handleClose={handleClose} placement="end" name="end" cart={cart}></AsideMenu>
        <div className="container">
            <div className="containercenter">
                <div className="row row-cols-4 mt-5">
                    <div className="row row-cols-2">
                        <img className="mb-4" src="./assets/img/settings.png" alt="" width="72" height="150" />
                    </div>
                    <div className="">
                        <h5>First Name</h5>
                        <div style={{ background: "gray", borderRadius: "30px" }}>
                            <h6>{datauser.name}</h6>
                        </div>
                        <h5>Second Name</h5>
                        <div style={{ background: "gray", borderRadius: "30px" }}>
                            <h6>{datauser.lastName}</h6>
                        </div>
                        <h5>Email</h5>
                        <div style={{ background: "gray", borderRadius: "30px" }}>
                            <h6>{datauser.email}</h6>
                        </div>
                    </div>
                    <div className="" style={{ color: "white" }}>
                        <h5>Orders</h5>
                        <div className="" style={{background: "white", height: "100px"}}>
                            <h6>Orders</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterMain></FooterMain></>)
}

export default MyProfile