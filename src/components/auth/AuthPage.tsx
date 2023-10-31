//import './AuthPage.css';
//import './Sheetstyle.css';
//import './sheet1.css';

import AuthForm from "./AuthForm";
import SigninForm from "./SigninForm";

function AuthPage () {

    const handleValidateForm = (login: string, pwd: string) => {
        window.alert(login + pwd);
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