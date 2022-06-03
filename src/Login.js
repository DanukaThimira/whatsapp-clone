import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import { auth, provider} from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            .catch((error) => alert(error.message));
        })
        .catch(error => alert(error.message));
    }
  return (
    <div className='login'>
        <div className='login_container'>
            <img 
            src='https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png'
            alt=''
            />
            <div className='login_text'>
                <h1>Sign in to WhatsApp</h1>
            </div>
            <Button type='submit' onClick={signIn}>
                Sign In With Google
            </Button>
        </div>
    </div>
  )
}

export default Login