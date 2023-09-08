import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { onchangeHandler, onChangeHandlerForm } from "../../utils/authFunctions";
import { signupUser } from "../../services/auth";
import { AuthContext } from "../../context/AuthContext";
import HeaderCompany from "../../components/HeaderCompany/HeaderCompany";
import NavbarMain from "../../components/NavbarMain/NavbarMain";
import FooterMain from "../../components/FooterMain/FooterMain";


const Signup = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({});
    const { token, setToken } = useContext(AuthContext);

    const [formValue, setFormValue] = useState({
        name: '',
        lastName: '',
        email: '',
        password: ''
    });

    //const [firstName, setFirstName] = useState();
    //const [lastName, setLastName] = useState();
    //const [email, setEmail] = useState();
    //const [password, setPassword] = useState();

    return (<><HeaderCompany></HeaderCompany><NavbarMain></NavbarMain><div className='container' style={{ margin: "0 auto" }}>
        <div className='row row-cols-2 justify-content-center mt-5'>
            <div className=''>
                <Form>
                    <img className="mb-4" src="./assets/img/settings.png" alt="" width="72" height="57" />
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" id="name" value={formValue.name} onChange={(e) => { onChangeHandlerForm(e, formValue, setFormValue) }} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" id="lastName" value={formValue.lastName} onChange={(e) => { onChangeHandlerForm(e, formValue, setFormValue) }} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" id="email" value={formValue.email} onChange={(e) => { onChangeHandlerForm(e, formValue, setFormValue) }} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" id="password" value={formValue.password} onChange={(e) => { onChangeHandlerForm(e, formValue, setFormValue) }} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" onClick={async (e) => {
                        e.preventDefault()
                        console.log("formValue ", formValue)
                        const response = await signupUser(formValue)
                        {
                            (localStorage.getItem('token')) ?
                                navigate("/")
                                : console.log("error")
                        }
                        console.log(signupUser)
                    }}>Submit</Button>
                </Form>
            </div>
        </div>
    </div><FooterMain></FooterMain>
    </>)
}


export default Signup;