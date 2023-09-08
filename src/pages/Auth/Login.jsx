import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { onchangeHandler, setLocalStorageToken } from '../../utils/authFunctions';
import { loginUser } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import HeaderCompany from '../../components/HeaderCompany/HeaderCompany';
import NavbarMain from '../../components/NavbarMain/NavbarMain';
import FooterMain from '../../components/FooterMain/FooterMain';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  

  return (<><HeaderCompany></HeaderCompany>
  <NavbarMain></NavbarMain>
  <div className='container' style={{margin: "0 auto"}}>
    <div className='row row-cols-2 justify-content-center mt-5'>
      <div className=''>
          <Form>
            <img className="mb-4" src="./assets/img/settings.png" alt="" width="72" height="57" />
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
            <Button variant="primary" type="submit" onClick={async(e) => {
              e.preventDefault()
              console.log(email, password)
              const response = await loginUser({ email: email, password: password });
              {(localStorage.getItem('token')) ?
              navigate("/")
              : console.log("error")}
            }}>Submit</Button>
          </Form>
        </div></div></div>{/*</div>*/}<FooterMain></FooterMain></>);
}
export default Login
