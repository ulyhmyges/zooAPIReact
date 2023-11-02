import AuthForm from "./AuthForm";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {AuthorizationService} from "../../services/auth";

function AuthPage(message?: any) {

    const [token, setToken] = useState<string>();
    const [login, setLogin] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const navigateFunc = useNavigate();

    useEffect(() => {
        const getToken = async (login: string, pass: string): Promise<void> => {
            const token = await AuthorizationService.getAuthorization(login, pass);
            if (!ignore){
                setToken(token)
                console.log("!ignore")
            }
            console.log("ignore", "token: ", token)
        }
        let ignore = false;
        getToken(login, pass).catch((e) =>  console.error(e, 'catch error'))
        console.log("useeffect --", token)

        return () => {ignore = true}
    }, [login])

    const handleValidateForm = (login: string, pwd: string): void => {
        //setUser(1)
        setLogin(login);
        setPass(pwd);
        console.log("handleValidateForm: login:", login, "pwd: ", pwd);
        //history.pushState({ user: "username" }, "pushState example", "/areas");
    }

    if (token){
        navigateFunc('/zoo')
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