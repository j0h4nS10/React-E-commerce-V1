import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { onchangeHandler, onChangeHandlerForm } from "../../utils/authFunctions"; 


const Signup = () => {

    const Navigate = useNavigate();

    const [data, setData] = useState([]);

    const [formValue, setFormValue] = useState({
        firtName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const postUser = async (formValue, setData) => {
        try {
            const response = await axios.post('https://simple-server-ochre.vercel.app/register', formValue);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (<><Form>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" id="firstName" value={formValue.firtName} onChange={(e)=>{onChangeHandlerForm(e, formValue, setFormValue)}} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" id="lastName" value={formValue.lastName} onChange={(e)=>{onChangeHandlerForm(e, formValue ,setFormValue)}} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" id="email" value={formValue.email} onChange={(e)=>{onChangeHandlerForm(e,formValue, setFormValue)}} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" id="password" value={formValue.password} onChange={(e)=>{onChangeHandlerForm(e, formValue,setFormValue)}} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={(e) => {
                e.preventDefault()
                console.log(formValue)
                postUser(formValue,setData)
                console.log(Data)
                Navigate('./')
            }}>Submit</Button>
        </Form>

    </>)
}


export default Signup;