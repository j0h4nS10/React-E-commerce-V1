import { useEffect, useContext } from 'react';
import './App.css'
import NavigationRouter from './components/NavigationRouter/NavigationRouter'
import axios from 'axios';
import { AuthContext } from './context/AuthContext'

function App() {

  const { setMyToken, token } = useContext(AuthContext);

  useEffect(() => {
    setMyToken(
      localStorage.getItem('token') ? localStorage.getItem('token') : null
    );
  }, []);
  /*
  useEffect(() => {
    if (token)
      axios
        .get(import.meta.env.VITE_API_URI_USERS, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        })
        .then((data) => console.log(data));
  }, [token]);*/

  return (<><NavigationRouter>
  </NavigationRouter></>
  )
}

export default App
