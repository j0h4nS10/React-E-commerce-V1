import { useEffect, useState } from 'react';
import Login from './Login';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { onchangeHandler, setLocalStorageToken } from '../../utils/authFunctions';
import { getLocalStorageToken } from '../../utils/authFunctions';

function Auth() {

  const [token, setToken] = useState(false);

  useEffect(()=>{const data =  getLocalStorageToken()
    console.log(data)},[])
  getLocalStorageToken();
  console.log(token)

  return (<>{!token ? <Login></Login> : <h1>token</h1>}
  </>);
}
export default Auth
