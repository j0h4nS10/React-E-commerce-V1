import { useContext, useEffect, useState } from 'react';
import Login from './Login';

import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { AuthContext } from '../../context/AuthContext';

function Auth() {
  
  const { token } = useContext(AuthContext);

  return (<>{!token ? <Login></Login> : <h1>token</h1>}
  </>);
}
export default Auth
