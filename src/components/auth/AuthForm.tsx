import './AuthForm.css';
import {UserType} from "../../dto";
import {SyntheticEvent, useState} from "react";

export interface IAuthInputs {
    login?: string,
    password?: string,
    type?: UserType,
    onValidation?: (login: string, password: string) => void // type function
}

function AuthForm(args: IAuthInputs) {
    const [login, setLogin] = useState(args.login ?? '')
    const [password, setPassword] = useState(args.password ?? '')

    const handleChangeLogin = (event: SyntheticEvent<HTMLInputElement>) => {
        setLogin(event.currentTarget.value);
    }

    const handleChangePassword = (event: SyntheticEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    }

    const handleForm = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (args.onValidation) {
            args.onValidation(login, password)
        }
    }

    return (
        <div className={'container'}>
            <form onSubmit={handleForm}>
                <label id={'login'} >Login: </label>
                <input type={'text'} onChange={handleChangeLogin} placeholder={'Your login'}
                       name={'login'}/>

                <label id={'password'}>Password: </label>
                <input type={'text'} onChange={handleChangePassword} name={'password'}/>

                <input type={'submit'} value={'Confirm'}/>

                <div>
                    <p>{login} --- {password}</p>
                </div>

            </form>
        </div>
    )
}

export default AuthForm;