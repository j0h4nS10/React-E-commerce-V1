import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "../../pages/HomePage/HomePage";
import ServicesPage from "../../pages/ServicesPage/ServicesPage"
import Auth from "../../pages/Auth/Auth";
import Signup from "../../pages/Auth/Signup";
import Login from "../../pages/Auth/Login";



const NavigationRouter = ({props}) => {    
    //'id' + (new Date()).getTime()
    return (<>
            <Routes>
                {/*props.map((el) => {
                    return (<Route key={el.id} path={el.link} element={el.element}></Route>)
                })*/}
                <Route path="/" element={<HomePage />}></Route>
                <Route path="auth" element={<Auth></Auth>}></Route>
                <Route path="login" element={<Login></Login>}></Route>
                <Route path="signup" element={<Signup></Signup>} />
                <Route path="services">
                    <Route path="/services/:params" element={<ServicesPage />}></Route>
                </Route>
                <Route path="*" element={<h1>PageNotFound</h1>} />
            </Routes>
    </>)

}


export default NavigationRouter;