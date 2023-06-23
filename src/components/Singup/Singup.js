import React, { useContext, useRef, useState } from "react";

import "./Singup.css";
import { useNavigate } from "react-router";
//import { AuthenticationContext } from "../services/authentication/authentication.context";
import ToggleTheme from "../ui/ToggleTheme";
import { ThemeContext } from "../services/theme/theme.context";
import useWindowSize from "../custom/useWindowSize/useWindowSize";
import ComboLanguage from "../ui/ComboLanguage/ComboLanguage";
import useTranslation from "../custom/useTranslation/useTranslation";



const Singup = () => {
    //utiliza el hook useState de React para declarar una variable de estado llamada formData
    //formData es un objeto que almacenará los valores de los campos del formulario.
    //setFormData es una función que se utilizará para actualizar el estado de formData
    const [formData, setFormData] = useState({
        //inicializo los campos como cadena de texto vacia
        //Legajo: "",
        userName: "",
        email: "",
        password: "",
        repeatPassword: "",
    });

    //const { handleSingup } = useContext(AuthenticationContext);
    const { theme } = useContext(ThemeContext);

    const { width, height } = useWindowSize();
    const translate = useTranslation();

    const navigation = useNavigate();

    // Alerta por no completar un campo
    const alertSignup = (valueAlert) => {
        valueAlert.current.focus();
        valueAlert.current.style.borderColor = "red";
        valueAlert.current.style.outline = "none";
    }

    //const legajoRef = useRef(null);
    const userNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const repeatPasswordRef = useRef(null);


    const registerOnClick = () => {
         //if (legajoRef.current.value.length === 0) {
        //    alertSingup(legajoRef);
        //    return;
        //}

        //Compruebo que los campos no esten vacios
        //en el caso de ser true,  retorno una alerta
        if (userNameRef.current.value.length === 0) {
            alertSignup(userNameRef);
            return;
        }
        if (emailRef.current.value.length === 0) {
            alertSignup(emailRef);
            return;
        }
        if (passwordRef.current.value.length === 0) {
            alertSignup(passwordRef);
            return;
        }
        if (repeatPasswordRef.current.value.length === 0) {
            alertSignup(repeatPasswordRef);
            return;
        }
    }

    //funcion encargada de manejar los cambios en los campos de entraa
    const onChange = (e) => {
        //actualiza el estado formData
        setFormData({
            //crear una copia del objeto formData actual.
            //No modifica el estado sino que crea un nuevo objeto en base a el
            ...formData,
            //e.target.name hace referencia al ATRIBUTO name del elemento del formulario que desencadenó el evento onChange.
            [e.target.name]: e.target.value,
        });
    };

    const handleSignup = (e) => {
        e.preventDefault();
         //declaramos el formData
        const { userName, email, password, repeatPassword } = formData;
         // Validar los campos antes de enviarlo al servidor (?????????????
        if (!userName || !email || !password || !repeatPassword) {
            alert(translate("errorComplete"));
            return;
        }
         // Validar que las contraseñas coincidan
        if (password !== repeatPassword) {
            alert(translate("errorEquals"));
            return;
        }
        // Validar el legajo para que solo contenga números


  // utiliza la función setFormData para actualizar el estado de formData
  // Limpiar los campos después del envío
        setFormData({
            userName: "",
            email: "",
            password: "",
            repeatPassword: "",
        });
        // Redireccionar a la página de "Usuario Registrado"
        navigation("/registered");
    }

    const goToLogin = () => {
        navigation("/login");
    }

    return (
        <div className="signup-container">
            <div className={`signup-box ${theme === "dark" && "signup-box-dark"}`}>
                <ComboLanguage />
                <h4 className={`${formData.email.length === 0 && "red-text"}`}>
                    {translate("register")}
                </h4>
                <form onSubmit={handleSignup}>
                    <div className="input-container">
                        <input
                            className="input-control"
                            name="userName"
                            value={formData.userName}
                            placeholder={translate("username")}
                            type="text"
                            ref={userNameRef}
                            onChange={onChange}
                            required
                            pattern="[a-zA-Z]+"
                        />
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
                            />
                        </div>
                        <div className="input-container">
                            <input
                                className="input-control"
                                placeholder={translate("repeatPassword")}
                                type="password"
                                name="repeatPassword"
                                value={formData.repeatPassword}
                                ref={repeatPasswordRef}
                                onChange={onChange}
                            />
                        </div>
                        <button onClick={registerOnClick} className="signin-button" type="submit">
                            {translate("signup")}
                        </button>
                        <p>
                            {translate("account")} <button className="signin-button" onClick={goToLogin}>Login</button>
                        </p>
                        <ToggleTheme />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Singup;