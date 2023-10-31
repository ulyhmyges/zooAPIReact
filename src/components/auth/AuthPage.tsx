

import AuthForm from "./AuthForm";
import {Navigate, redirect, useNavigate} from "react-router-dom";
import {useState} from "react";

function AuthPage () {

    const [user, setUser] = useState<number>(0);
    const navigateFunc = useNavigate();
    const handleValidateForm = (login: string, pwd: string) => {
        window.alert(login + pwd);
        //setUser(1)
        navigateFunc('/')
    }

    return (
        <div >
            <div className={''}>
                <AuthForm onValidation={handleValidateForm} />
            </div>
        </div>
    )
}

export default AuthPage;