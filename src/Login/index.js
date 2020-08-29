import React from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from '../config/firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

import  './styles.css';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(error => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-icone-1.png" alt="WhatsApp"/>
                <div className="login__text">
                    <h1>Sign in to WhatsApp Clone</h1>
                </div>

                <Button type="submit" onClick={signIn}>
                    Sign In With Google                    
                </Button>
            </div>
        </div>
    )
}

export default Login;
