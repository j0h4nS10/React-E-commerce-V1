import { Routes, Route, BrowserRouter, Link, useNavigate } from "react-router-dom";

import HomePage from "../../pages/HomePage/HomePage";
import ServicesPage from "../../pages/ServicesPage/ServicesPage";

import Signup from "../../pages/Auth/Signup";
import Login from "../../pages/Auth/Login";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Checkout from "../Checkout/Checkout";
import MyProfile from "../MyProfile/MyProfile";
import Pagenotfound from "../../pages/404/404";

const NavigationRouter = () => {

    const navigate = useNavigate(); 
    const { token } = useContext(AuthContext);

    const publicRoutes = [
        <Route key="1" path="/" element={<HomePage />}></Route>,
        <Route key="2" path="home" element={<HomePage />}></Route>,
        <Route key="4" path="login" element={<Login />}></Route>,
        <Route key="5" path="signup" element={<Signup></Signup>} />, 
        <Route key="6" path="*" element={<Pagenotfound></Pagenotfound>} />]
    const privateRoutes = [
        <Route key="7" path="checkout" element={<Checkout></Checkout>} />,
        <Route key="8" path="/myprofile/:params" element={<MyProfile></MyProfile>} />,
        <Route key="9" path="services" element={<ServicesPage></ServicesPage>}  />,
        <Route key="10" path="services/:params" element={<ServicesPage />}>
        </Route>, publicRoutes]
    //'id' + (new Date()).getTime()
    return (<>
        <Routes>{token ?
            privateRoutes :
            publicRoutes}
        </Routes>
    </>)
}
export default NavigationRouter;