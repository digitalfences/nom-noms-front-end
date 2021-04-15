import React from 'react';
import './style.css';

const LoginRegister = () => {
    return(
        <div className = "register-div">
            <div className="welcome-message">
                <h1>Welcome to NomNoms!</h1>
            </div>
            <div className="login">
                <h3>Login</h3>
                <form type="submit">
                    <input type="text"></input>
                    <input type="text"></input>
                    <button type="submit">Login</button>
                </form>
            </div>
            <div className="register">
                <h3>Register New Account</h3>
                <button>Register</button>
            </div>
        </div>
    )
}

export default LoginRegister;