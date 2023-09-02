import axios from 'axios'
import { setLocalStorageToken } from '../utils/authFunctions';



export const loginUser = async (loginData) => {

    try {
      const response = await axios.post(import.meta.env.VITE_API_URI_LOGIN, loginData);
      const token = response.data.data.token
      console.log('response Login', response, 'token Login', token)
      setLocalStorageToken(token)
      return token
    } catch (error) {
      console.log(error);
    }
  };


export const signupUser = async (formValue) => {
    try {
        const response = await axios.post(import.meta.env.VITE_API_URI_SIGNUP, formValue);
        console.log(response)
        const token = response.data.data.token
        setLocalStorageToken(token)
        //console.log(token)
        //console.log(data)
    } catch (error) {
        console.log(error);
    }
};
