import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function PopupLogin() {
  return (
    <>
      <div className="wrapper">
        <span className="icon-close"><ion-icon name="close-outline"></ion-icon></span>
        
        <div className="form-box login"><h1>Login</h1>
            <form action="/" method="post">
                <div className="input-box">
                    <span className="icon"><ion-icon name="mail-open-outline"></ion-icon></span>
                    <input type="email" id="email-1" required />
                    <label htmlFor="email-1">Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="key-outline"></ion-icon></span>
                    <input type="password" id="password-1" required />
                    <label htmlFor="password-1">Password</label>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />Remember Me
                    </label>
                    <Link href="#">Forgot Password?</Link>
                </div>
                <button type="submit" className="btn">Login</button>
                <buton>
                    <div className="login-register">
                        <p>Dont'have an account?<Link href="#" className="register-link">Register</Link></p>
                    </div>
                </buton>
            </form>
        </div>
        {/* other page */}
        <div className="form-box register"><h1>Registration</h1>
            <form action="#">
                <div className="input-box">
                    <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                    <input type="text" required />
                    <label >Username</label>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="mail-open-outline"></ion-icon></span>
                    <input type="email" id="email-1" required />
                    <label htmlFor="email-1">Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="key-outline"></ion-icon></span>
                    <input type="password" id="password-1" required />
                    <label htmlFor="password-1">Password</label>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />I agree to the terms & conditions
                    </label>
                </div>
                <button type="submit" className="btn">Register</button>
                    <div className="login-register">
                        <p>Already have an account?<Link href="#" className="login-link">Login</Link></p>
                    </div>
            </form>
        </div>

    </div>
    </>
  )
}
