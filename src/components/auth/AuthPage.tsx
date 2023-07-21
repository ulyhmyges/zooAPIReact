import './AuthPage.css';
import AuthForm from "./AuthForm";

function AuthPage () {

    const handleValidateForm = (login: string, pwd: string) => {
        window.alert(login + pwd);
    }

    return (
        <div className={''}>
            <div className={'line'}>
                <h3>Sign up</h3>
            </div>
            <div>
                <AuthForm onValidation={handleValidateForm} />
            </div>
        </div>
    )
}

export default AuthPage;