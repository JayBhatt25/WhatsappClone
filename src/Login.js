import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from './firebase'
import { useDataLayerValue } from './Datalayer'
import { actionTypes } from './reducer'

function Login() {
    const [{user}, dispatch] = useDataLayerValue();
    const signIn = () => {
        auth .signInWithPopup(provider).then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch(err => {
            alert(err.message);
        })
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png' 
                alt=''>
                    
                </img>

                <div className='login__text'>
                    <h2>Sign in to WhatsApp</h2>
                </div>

                <Button type='submit' onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
