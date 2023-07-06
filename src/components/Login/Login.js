import React, { useContext, useRef, useState } from "react";

import { useNavigate } from "react-router";
//import { AuthenticationContext } from "../services/authentication/authentication.context";
import { useAuth } from "../services/authentication/authentication.context";
import ToggleTheme from "../ui/ToggleTheme";
import { ThemeContext } from "../services/theme/theme.context";
import useWindowSize from "../custom/useWindowSize/useWindowSize";
import ComboLanguage from "../ui/ComboLanguage/ComboLanguage";
import useTranslation from "../custom/useTranslation/useTranslation";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";



const Login = () => {
  /*utiliza el hook useState de React para declarar una variable de estado llamada formData
  formData es un objeto que almacenará los valores de los campos del formulario.
  setFormData es una función que se utilizará para actualizar el estado de formData*/
  const [formData, setFormData] = useState({
    //inicializo los campos como cadena de texto vacia

    email: "",
    password: "",

  });

  //constantes que setean 
  const { login } = useAuth();
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigate();
  const { width, height } = useWindowSize();
  const translate = useTranslation();
  const [error, setError] = useState("");

  //Ref

  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  // Alerta por no completar un campo
  const alertLogin = (valueAlert) => {
    valueAlert.current.focus();
    valueAlert.current.style.borderColor = "red";
    valueAlert.current.style.outline = "none";
  }

  const registerOnClick = () => {
    /*Compruebo que los campos no esten vacios
    en el caso de ser true,  retorno una alerta*/

    if (emailRef.current.value.length === 0) {
      alertLogin(emailRef);
      return;
    }
    if (passwordRef.current.value.length === 0) {
      alertLogin(passwordRef);
      return;
    }
     // Additional email validation
     const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
     if (!emailRegex.test(formData.email)) {
       alert(translate("errorInvalidEmail"));
       return;
     }

         // All fields are filled, perform login logic
    handleLogin();


  }

  //funcion encargada de manejar los cambios en los campos de entrada
  //ACTUALIZA EL ESTADO
  const onChange = (e) => {
    //actualiza el estado formData
    setFormData({
      /*crear una copia del objeto formData actual.
      No modifica el estado sino que crea un nuevo objeto en base a el*/
      ...formData,
      //e.target.name hace referencia al ATRIBUTO name del elemento del formulario que desencadenó el evento onChange.
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    //declaramos el formData
    const { email, password } = formData;
    // Validar los campos antes de enviarlo al servidor
    if (!email || !password) {
      alert(translate("errorComplete"));
      return;
    }


    //try catch firebase
    try {
      await login(formData.email, formData.password);
      // Redireccionar a la página de "Usuario Registrado"
      navigation("/home");
      toast.success(translate("loginSuccessful"));

    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/internal-error") {
        setError(translate("errorEmail"));
      } else if (error.code === "auth/weak-password") {
        setError(translate("errorPassword"));
      } else if (error.code === "auth/email-already-in-use") {
        setError(translate("errorRegisted"));
      } else if (error.code === "auth/user-not-found") {
        setError(translate("errorLogined"));
      } else if (error.code === "auth/wrong-password") {
        setError(translate("wrong-password"));
      }
      toast.error(translate("loginFailed"));
      //setError(error.message);
    }
    // utiliza la función setFormData para actualizar el estado de formData
    // Limpiar los campos después del envío
    setFormData({

      email: "",
      password: "",

    });
  }

  const goToSingin = () => {
    navigation("/singin");
  }


  return (
    <div>

      <div className={`split-left ${theme === "dark" && "split-left-dark"}`}>
        
      <div className={`img ${theme === "dark" && "img-dark"}`}>
        <img src="https://utn.edu.ar/images/logo-utn.png"/>
        </div>
        
        <div className="login-container">

          <div className={`login-box ${theme === "dark" && "login-box-dark"}`}>
            <h4 className={`${formData.email.length === 0 && "red-text"}`}>
              {translate("welcome")}
            </h4>

            <form onSubmit={handleLogin}>

              <div>
                <div className="input-container">
                  <input
                    className="input-control"
                    placeholder="Email"
                    type="email"
                    onChange={onChange}
                    required
                    name="email"
                    value={formData.email}
                    ref={emailRef}
                  />
                </div>

                <div className="input-container">
                  <input
                    className="input-control"
                    placeholder={translate("password")}
                    type="password"
                    name="password"
                    value={formData.password}
                    ref={passwordRef}
                    onChange={onChange}
                    required
                  />

                </div>
                
                <div className="mb-2">
                <Button onClick={registerOnClick} className="button" type="submit">
                  {translate("login")}
                </Button>
                </div>

                <p>{translate("account")} <Button className="button" onClick={goToSingin}>
                  {translate("signup")}
                </Button>
                </p>

              </div>
            </form>

            {error && <p>{error}</p>}

          </div>
        </div>
      </div>

      <div className="split-right">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end me-md-2 p-2">
        <ToggleTheme />
        <ComboLanguage />
        </div>
      </div>
      <ToastContainer />

    </div>
  );
}

export default Login;
