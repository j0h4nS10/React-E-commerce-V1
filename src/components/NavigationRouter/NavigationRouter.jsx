import { Routes, Route, BrowserRouter, Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import HomePage from "../../pages/HomePage/HomePage";
import ServicesPage from "../../pages/ServicesPage/ServicesPage";
import Auth from "../../pages/Auth/Auth";
import Signup from "../../pages/Auth/Signup";
import Login from "../../pages/Auth/Login";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Checkout from "../Checkout/Checkout";

const NavigationRouter = () => {

    const navigate = useNavigate(); 
    const { token } = useContext(AuthContext);

    const publicRoutes = [
        <Route key="1" path="/" element={<HomePage />}></Route>,
        <Route key="2" path="home" element={<HomePage />}></Route>,
        <Route key="4" path="login" element={<Login />}></Route>,
        <Route key="5" path="signup" element={<Signup></Signup>} />, 
        <Route key="6" path="*" element={<di><h1>PageNotFound</h1><Button onClick={() => { navigate(-1) }}>Go Back</Button></di>} />]
    const privateRoutes = [
        <Route key="7" path="checkout" element={<Checkout></Checkout>} />,
        <Route key="8" path="services" element={<ServicesPage></ServicesPage>} />,
        /*<Route key="8" path="services">,
            <Route key="9" path="/services/:params" element={<ServicesPage />}></Route>
        </Route>*/, publicRoutes]
    //'id' + (new Date()).getTime()
    return (<>
        <Routes>{token ?
            privateRoutes :
            publicRoutes}
        </Routes>
    </>)
}
export default NavigationRouter;