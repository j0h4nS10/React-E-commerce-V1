import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { onchangeHandler, setLocalStorageToken } from '../../utils/authFunctions';

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginUser = async (loginData) => {
    try {
      const response = await axios.post('https://simple-server-ochre.vercel.app/login', loginData);
      const token = response.data.token
      console.log('response', response, 'token', token)
      setLocalStorageToken(token)
    } catch (error) {
      console.log(error);
    }
  };

  return (<><div className="section-signin">
    <div className="article-signin">
      <div className="form-signin w-100 m-auto">
        <div className='centercontainer' style={{ width: 500 }}>
          <Form>
            <img class="mb-4" src="./assets/img/settings.png" alt="" width="72" height="57" />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => { onchangeHandler(e, setEmail) }} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => { onchangeHandler(e, setPassword) }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e) => {
              e.preventDefault()
              console.log(email, password)
              loginUser({ email: email, password: password })
            }}>Submit</Button>
          </Form>
        </div></div></div></div></>);
}
export default Login
