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
    const [ login, setLogin ] = useState(args.login ?? '')
    const [ password, setPassword ] = useState(args.password ?? '')

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
        <div>
            <form onSubmit={handleForm} className={'center'}>
                <div>
                    <div className={'line'}>
                        <div className={'container'}>
                            <label id={'login'} className={'start'}>Login: </label>
                            <label id={'password'} className={'start'}>Password: </label>
                        </div>
                        <div className={'container'}>
                            <input type={'text'} className={'start'} onChange={handleChangeLogin} placeholder={'Your login'}  name={'login'}/>
                            <input type={'text'} className={'start'} onChange={handleChangePassword} name={'password'} />
                        </div>
                    </div>
                    <div className={'line'}>
                        <input type={'submit'} className={'middle'} value={'Confirm'} />
                    </div>
                    <div>
                        <p>{login} --- {password}</p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AuthForm;