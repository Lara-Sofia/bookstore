import { useState } from 'react';
import { useRef } from 'react';
import './Login.css';
//import { useState } from 'react';

const Login = () => { 
    /*
Armar los manejadores de eventos y los estados necesarios para guardar en dos estados
distintos los valores actualizados en tiempo real que ingresa el usuario de “email” y
“password”.
A CONTINUACIÓN:
    
    const [email, setEmail] = useState('');
    const changeEmailHandler = (newEmail) => {
        setEmail(newEmail.target.value);
        //console.log(email);
    }
    const [password, setPassword] = useState('');
    const changePasswordHandler = (newPassword) => {
        setPassword(newPassword.target.value);
        //console.log(password);
    }

    const signInClick = () => {
        alert('el email ingresado es ' + email + ' y el de la password es ' + password );
    }
    
    return(
        <div className='login-container'>
            <div className='Login-box'>
                <h4>¡Bienvenidos a Bookstore!</h4>
                <div className='input-container'>
                    <input
                        className='input-control'
                        onChange={changeEmailHandler} //OnChange = nos permite definir acciones a ejecutar cuando algo sucede 
                        //se debe relacionar a un click / evento 
                        placeholder='Email'
                        type='email'
                    />
                </div>
                <div className='input-container'>
                    <input
                        className='input-control'
                        onChange={changePasswordHandler} //OnChange =
                        placeholder='Password'
                        type='password'
                    />
                </div>
                <button onClick={signInClick} className='signin-button' type='button'>
                    Init sesion
                </button>
            </div>
        </div>
    );
    */
 
    //Con useRef
    const [email, setEmail] = useState('');
    const emailRef = useRef(null); //valor inicial
    const changeEmailHandler = (newEmail) => {
        emailRef.current.style.borderColor = "";
        emailRef.current.style.outline = "";
        setEmail(newEmail.target.value);
    }

    const [password, setPassword] = useState('');
    const passwordRef = useRef(null); //valor inicial
    const changePasswordHandler = (newPassword) => {
        passwordRef.current.style.borderColor = "";
        passwordRef.current.style.outline = "";
        setPassword(newPassword.target.value);
    }

    
    //Para acceder al valor de una referencia, debemos acceder al objeto current y luego a value.
    const signInClick = () => {
        if (emailRef.current.value.length === 0) {
            emailRef.current.focus();
            emailRef.current.style.borderColor = "red";
            emailRef.current.style.outline = "none";
            //alert('email vacio');
            return;
        }
        if (passwordRef.current.value.length === 0) {
            passwordRef.current.focus();
            passwordRef.current.style.borderColor = "red";
            passwordRef.current.style.outline = "none";
            //alert('password vacio');
            return; //como un break
        }
        alert(' el email ingresado es ' + email + ' y contraseña ' + password)
    }
    

    return(
        <div className='login-container'>
            <div className='Login-box'>
                <h4>¡Bienvenidos a Bookstore!</h4>
                <div className='input-container'>
                    <input
                        className='input-control'
                        onChange={changeEmailHandler} //OnChange = nos permite definir acciones a ejecutar cuando algo sucede 
                        //se debe relacionar a un click / evento 
                        placeholder='Email'
                        type='email'
                        ref={emailRef}
                    />
                    { emailRef.length === 0 ? (<p>Complete de email</p>) : (<></>) }
                </div>
                <div className='input-container'>
                    <input
                        className='input-control'
                        onChange={changePasswordHandler} //OnChange =
                        placeholder='Password'
                        type='password'
                        ref={passwordRef}
                    />
                    { passwordRef.length === 0 ? (<p>Complete de password</p>) : (<></>) }
                </div>
                <button onClick={signInClick} className='signin-button' type='button'>
                    Init sesion
                </button>
            </div>
        </div>
    );
    
}

export default Login;