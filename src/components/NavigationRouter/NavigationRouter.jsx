import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "../../pages/HomePage/HomePage";
import ServicesPage from "../../pages/ServicesPage/ServicesPage";
import Auth from "../../pages/Auth/Auth";
import Signup from "../../pages/Auth/Signup";
import Login from "../../pages/Auth/Login";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const NavigationRouter = () => {

    const { token } = useContext(AuthContext);

    const publicRoutes = [<Route path="/" element={<HomePage />}></Route>,
    <Route path="auth" element={<Auth />}></Route>,
    <Route path="login" element={<Login />}></Route>,
    <Route path="signup" element={<Signup></Signup>} />,
    <Route path="*" element={<h1>PageNotFound</h1>} />]
    const privateRoutes = [<Route path="private" element={<ServicesPage/>} />,
    <Route path="services">,
        <Route path="/services/:params" element={<ServicesPage />}></Route>
    </Route>]
    //'id' + (new Date()).getTime()
    return (<>
        <Routes>{/*!token ?
            privateRoutes.map((route) => { return route }) :
    publicRoutes.map((route) => { return route })*/}
    {publicRoutes}
    {privateRoutes}
        </Routes>
    </>)
}
export default NavigationRouter;