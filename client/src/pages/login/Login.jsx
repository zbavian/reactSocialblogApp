import { useRef } from 'react';
import './login.css'

export default function Login() {
    const email=useRef();
    const password=useRef();

    const handleClick=(e)=>{
        e.preventDefault();
        console.log("0000000000000000000000000000000");

        console.log(email);
    }
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lamasocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Lamasocial
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required  className="loginInput" ref={email}/>
                        <input placeholder="Password" type="password" required className="loginInput" ref={password} />
                        <button className="loginButton" type="submit">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <span className="loginRegisterButton">Create a New Account</span>
                    </form>
                </div>
            </div>
        </div>
    )
    }
