import AuthForm from "./AuthForm";
import {Navigate, redirect, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {AuthorizationService} from "../../services/auth";
import {IUserCell} from "../user/UserCell";

function AuthPage(message?: any) {

    const [token, setToken] = useState<string>();
    const navigateFunc = useNavigate();

    const getToken = async (login: string, pass: string) => {
        const token = await AuthorizationService.getAuthorization(login, pass);
        setToken(token)
    }
    const handleValidateForm = async (login: string, pwd: string) => {
        //setUser(1)
        await getToken(login, pwd)

        //history.pushState({ user: "username" }, "pushState example", "/areas");
        if (token){
            navigateFunc(`/users/dashboard/${token}`)
        } else {
            window.alert('auth failed '+ login + ' ' + pwd)
        }
    }

    return (
        <div>
            <div className={''}>
                <AuthForm onValidation={handleValidateForm}/>
            </div>
        </div>
    )
}

export default AuthPage;