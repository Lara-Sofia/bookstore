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
    const [formData, setFormData] = useState({
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

    //alert por no completar
    const alertSingup = (valueAlert) => {
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

        if (userNameRef.current.value.length === 0) {
            alertSingup(userNameRef);
            return;
        }
        if (emailRef.current.value.length === 0) {
            alertSingup(emailRef);
            return;
        }
        if (passwordRef.current.value.length === 0) {
            alertSingup(passwordRef);
            return;
        }
        if (repeatPasswordRef.current.value.length === 0) {
            alertSingup(repeatPasswordRef);
            return;
        }
    }
    //toma los valores y setea nuevos
    //const handleChange = (e) => {
    //    const { userName, value } = e.target;
    //    setFormData((prevData) => ({
    //        ...prevData, [userName]: value,
    //    }));

    //}
    //reescribiendo el Form
    const onChange = (e) => setFormData({ 
        ...formData, 
        [e.target.userName]: e.target.value,
        [e.target.email]: e.target.value,
        [e.target.password]: e.target.value,
        [e.target.repeatPassword]: e.target.value,
    });

    const handleSingup = (e) => {
        e.preventDefault();
        //declaramos el formData
        const { userName, email, password, repeatPassword } = formData; 
        // Validar los campos antes de enviarlo al servidor (?????????????
        if (!userName || !email || !password || !repeatPassword) {
            alert(translate("errorComplete"));
            return;
        }
        // Validar que las contraseñas coincidan
        if (password != repeatPassword) {
            alert(translate("errorEquals"));
            return;
        }
        //validar el legajo que sean sólo números

        // Limpiar los campos después del envío
        setFormData({
            userName: "",
            email: "",
            password: "",
            repeatPassword: "",
        });

        // Enviar los datos al servidor
        //sendDataToServer(formData);//????
        alert(translate("successfully"));
    }

    //Yo no entender
    //const sendDataToServer = (data) => {
    //    // Realizar la llamada al servidor para enviar los datos
    //    // Aplicar medidas de seguridad del lado del servidor
    //    console.log("Sending data to server: ", data);
    //};
    //const { userName, email, password, repeatPassword } = formData;

    const goToLogin = () => {
        navigation("/login");
    }

    return (
        <div className="singin-container">
            <div className={`singin-box ${theme === "dark" && "singin-box-dark"}`}>
                <ComboLanguage />
                <h4 className={`${email.length === 0 && "red-text"}`}>
                    {translate("register")}
                </h4>
                <div onSubmit={handleSingup}>
                    <div className="input-container">
                        <input
                            className="input-control"
                            name="userName"
                            value={userName}
                            placeholder={translate("username")}
                            type="text"
                            ref={userNameRef}
                            onChange={onChange}
                            required
                            pattern="[a-zA-Z]+"
                        />
                        {/*errors[0].isError && <p>{errors[0].text}</p>*/}
                        <div />
                        <div className="input-container">
                            <input
                                className="input-control"
                                placeholder="Email"
                                type="email"
                                onChange={onChange}
                                required
                                name="email"
                                value={email}
                                ref={emailRef}
                            />
                        </div>
                        {/*errors[1].isError && <p>{errors[1].text}</p>*/}
                        <div className="input-container">
                            <input
                                className="input-control"
                                placeholder={translate("password")}
                                type="password"
                                name="password"
                                value={password}
                                ref={passwordRef}
                                onChange={onChange}
                            />
                        </div>
                        {/*errors[2].isError && <p>{errors[2].text}</p>*/}
                        <div className="input-container">
                            <input
                                className="input-control"
                                placeholder={translate("repeatPassword")}
                                type="password"
                                name="repeatPassword"
                                value={repeatPassword}
                                ref={repeatPasswordRef}
                                onChange={onChange}
                            />
                        </div>
                        {/*errors[2].isError && <p>{errors[2].text}</p>*/}
                        <button onClick={registerOnClick} className="signin-button" type="submit">
                            {translate("signup")}
                        </button>
                        <p>
                            {translate("account")} <button className="signin-button" onClick={goToLogin}>Login</button>
                        </p>
                        <ToggleTheme />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Singup;