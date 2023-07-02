import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
//import { AuthenticationContext } from "../services/authentication/authentication.context";
import { useAuth } from "../../services/authentication/authentication.context";
//import ToggleTheme from "../../ui/ToggleTheme";
import { ThemeContext } from "../../services/theme/theme.context";
import useWindowSize from "../../custom/useWindowSize/useWindowSize";
import ComboLanguage from "../../ui/ComboLanguage/ComboLanguage";
import useTranslation from "../../custom/useTranslation/useTranslation";



const AddAdminForm = () => {
    /*utiliza el hook useState de React para declarar una variable de estado llamada formData
    formData es un objeto que almacenará los valores de los campos del formulario.
    setFormData es una función que se utilizará para actualizar el estado de formData*/
    const [formData, setFormData] = useState({
        //inicializo los campos como cadena de texto vacia
        email: "",
        password: "",
        rol: "admin",
    });

    //constantes que setean 
    const { signup } = useAuth();
    const { theme } = useContext(ThemeContext);
    const navigation = useNavigate();
    const { width, height } = useWindowSize();
    const translate = useTranslation();
    const [error, setError] = useState("");

    //Ref

    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    // Alerta por no completar un campo
    const alertSignup = (valueAlert) => {
        valueAlert.current.focus();
        valueAlert.current.style.borderColor = "red";
        valueAlert.current.style.outline = "none";
    }

    const registerOnClick = () => {
        /*Compruebo que los campos no esten vacios
        en el caso de ser true,  retorno una alerta*/

        if (emailRef.current.value.length === 0) {
            alertSignup(emailRef);
            return;
        }
        if (passwordRef.current.value.length === 0) {
            alertSignup(passwordRef);
            return;
        }

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

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");
        //declaramos el formData
        const { email, password, rol } = formData;
        // Validar los campos antes de enviarlo al servidor
        if (!email || !password) {
            alert(translate("errorComplete"));
            return;
        }



        //try catch firebase
        try {
            await signup(formData.email, formData.password, formData.rol);
            // Redireccionar a la página de "Usuario Registrado"
            navigation("/registered");
        } catch (error) {
            console.log(error.code);
            if (error.code === "auth/internal-error") {
                setError(translate("errorEmail"));
            } else if (error.code === "auth/weak-password") {
                setError(translate("errorPassword"));
            } else if (error.code === "auth/email-already-in-use") {
                setError(translate("errorRegisted"));
            }
            //setError(error.message);
        }
        // utiliza la función setFormData para actualizar el estado de formData
        // Limpiar los campos después del envío
        setFormData({
            email: "",
            password: "",
        });

    }

    const goToLogin = () => {
        navigation("/login");
    }

    return (
        <div className="signup-container">
            <div className={`signup-box ${theme === "dark" && "signup-box-dark"}`}>
                <h4 className={`${formData.email.length === 0 && "red-text"}`}>
                    {translate("addNewAdmin")}
                </h4>
                <form onSubmit={handleSignup}>
                    <div className="input-container">
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
                        <button onClick={registerOnClick} className="signin-button" type="submit">
                            {translate("addNewAdmin")}
                        </button>
                    </div>
                </form>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}

export default AddAdminForm;