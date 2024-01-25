import "./Login.scss"
import {useState, useEffect} from 'react';

function Login(){

    const [isInputValid, setIsInputValid] = useState(true);
    
    function onInputChanged(){
        if(!isInputValid) setIsInputValid(true)
    }

    function onSubmit(e){
        e.preventDefault()

        const email = e.target.email.value;

        if(!email.match(/.+[@]{1}.+[.]{1}[a-zA-Z]+/g)){
            setIsInputValid(false);
            return;
        }

        e.target.reset();
    }

    return (<main className="back main">
        <div className="login">
        <div className="login-container">
            <h1 className="login-container__header">Login</h1>
            <form className="login-container-form" onSubmit={onSubmit}>
                <label htmlFor="login-email" className="login-container-form-email">
                    <p className="login-container-form-email__label">Email</p>
                    <input name="email" type="text" id="login-email" className="login-container-form-email__input" onChange={()=>{onInputChanged()}}/>
                    <p className={`login-container-form-email__error${isInputValid ? '' : '--active'}`}>Please enter a valid email</p>
                </label>
                <label htmlFor="login-password" className="login-container-form-password">
                <p className="login-container-form-password__label">Password</p>
                    <input name="password" type="password" id="login-password" className="login-container-form-password__input"/>
                    <div className="login-container-form-password__holder"></div>
                </label>
                <button className="login-container-form__submit"><div className="login-container-form__submit--inner">Log In</div></button>
            </form>
        </div>
        </div>
    </main>)
}

export default Login;