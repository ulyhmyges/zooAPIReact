import './sheet1.css';
import {SyntheticEvent, useState} from "react";
import {IAuthInputs} from "./AuthForm";

function SigninForm(args: IAuthInputs) {
    const [ login, setLogin ] = useState(args.login ?? '')
    const [ password, setPassword ] = useState(args.password ?? '')

    const handleLogin = (event: SyntheticEvent<HTMLInputElement>) => {
        setLogin(event.currentTarget.value);
    }

    const handlePassword = (event: SyntheticEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    }

    const handleForm = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (args.onValidation) {
            args.onValidation(login, password)
        }
    }

    return (
        <div className="container">
            <h1>Sign In</h1>
            <form onSubmit={handleForm}>
                <label htmlFor="loginid">login:</label>
                <input type="text" id="loginid" name="login" required onChange={handleLogin} />

                <label htmlFor="pwd">Password:</label>
                <input type="password" id="pwd" name="password" required onChange={handlePassword}/>

                <input type="submit" value="Sign In" />
            </form>
        </div>
    )
}

export default SigninForm;