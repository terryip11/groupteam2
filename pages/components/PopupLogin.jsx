import React from 'react';
import Link from 'next/link';
import '../../app/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';



export default function PopupLogin({handleToggle}) {
    useEffect(() => {
        const wrapper = document.querySelector('.wrapper');
        const loginLink = document.querySelector('.login-link');
        const registerLink = document.querySelector('.register-link');
        const btnPopup = document.querySelector('.btnLogin-popup');
        const iconClose = document.querySelector('.icon-close');



        // 添加事件監聽器
        if (registerLink) {
          registerLink.addEventListener('click', () => {
            wrapper.classList.add('active');
          });
        }
    
        if (loginLink) {
          loginLink.addEventListener('click', () => {
            wrapper.classList.remove('active');
          });
        }
    
        if (btnPopup) {
          btnPopup.addEventListener('click', () => {
            wrapper.classList.add('active-popup');
          });
        }
    
        if (iconClose) {
          iconClose.addEventListener('click', () => {
            wrapper.classList.remove('active-popup');
          });
        }
    
        // 清理函數，用於在組件卸載時移除事件監聽器
        return () => {
          if (registerLink) {
            registerLink.removeEventListener('click', () => {
              wrapper.classList.add('active');
            });
          }
          if (loginLink) {
            loginLink.removeEventListener('click', () => {
              wrapper.classList.remove('active');
            });
          }
          if (btnPopup) {
            btnPopup.removeEventListener('click', () => {
              wrapper.classList.add('active-popup');
            });
          }
          if (iconClose) {
            iconClose.removeEventListener('click', () => {
              wrapper.classList.remove('active-popup');
            });
          }
        };
      }, []);



  return (
    <>
    <Head>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </Head>


      <div className={`wrapper ${handleToggle? 'active-popup' : 'wrapper'} mx-auto mt-3`}>
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
