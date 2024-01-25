import "./Register.scss"
import {useState, useEffect} from 'react';

function Register(){

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    
    function onEmailChanged(){if(!isEmailValid) setIsEmailValid(true)}
    function onFirstNameChanged(){if(!isFirstNameValid) setIsFirstNameValid(true)}
    function onLastNameChanged(){if(!isLastNameValid) setIsLastNameValid(true)}
    function onPasswordChanged(){if(!isPasswordValid) setIsPasswordValid(true)} 

    function onSubmit(e){
        e.preventDefault()

        const email = e.target.email.value;

        if(!email.match(/.+[@]{1}.+[.]{1}[a-zA-Z]+/g)){setIsEmailValid(false);}
        if(e.target.firstName.value === ''){setIsFirstNameValid(false)}
        if(e.target.lastName.value === ''){setIsLastNameValid(false)}
        if(!e.target.password.value.match(/[0-9a-zA-Z]{6,}/g)){setIsPasswordValid(false)}

        e.target.reset();
    }

    return (<main className="back main">
        <div className="register">
        <div className="register-container">
            <h1 className="register-container__header">Register</h1>
            <form className="register-container-form" onSubmit={onSubmit}>
                <label htmlFor="register-email" className="register-container-form-email">
                    <p className="register-container-form-email__label">Email</p>
                    <input name="email" type="text" id="register-email" className="register-container-form-email__input" onChange={()=>{onEmailChanged()}}/>
                    <p className={`register-container-form-email__error${isEmailValid ? '' : '--active'}`}>Please enter a valid email</p>
                </label>
                <label htmlFor="register-first-name" className="register-container-form-first-name">
                    <p className="register-container-form-first-name__label">First Name</p>
                    <input name="firstName" type="text" id="register-first-name" className="register-container-form-first-name__input" onChange={()=>{onFirstNameChanged()}}/>
                    <p className={`register-container-form-first-name__error${isFirstNameValid ? '' : '--active'}`}>Please fill in a first name</p>
                </label>
                <label htmlFor="register-last-name" className="register-container-form-last-name">
                    <p className="register-container-form-last-name__label">Last Name</p>
                    <input name="lastName" type="text" id="register-last-name" className="register-container-form-last-name__input" onChange={()=>{onLastNameChanged()}}/>
                    <p className={`register-container-form-last-name__error${isLastNameValid ? '' : '--active'}`}>Please fill in a last name</p>
                </label>
                <label htmlFor="register-password" className="register-container-form-password">
                <p className="register-container-form-password__label">Password</p>
                    <input name="password" type="password" id="register-password" className="register-container-form-password__input" onChange={()=>{onPasswordChanged()}}/>
                    <p className={`register-container-form-password__error${isPasswordValid ? '' : '--active'}`}>Please fill in a password consisting of 6 or more alphanumeric characters</p>
                    <div className="register-container-form-password__holder"></div>
                </label>
                <button className="register-container-form__submit"><div className="register-container-form__submit--inner">Log In</div></button>
            </form>
        </div>
        </div>
    </main>)
}

export default Register;