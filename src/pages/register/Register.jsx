import React from 'react'
import { Link } from 'react-router-dom';
import './register.scss';

export default function Register() {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Man's Social</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, asperiores nihil cupiditate, omnis molestiae suscipit accusantium  </p>
                    <span>Don't you have an account!</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>


                <div className="right">
                    <h1>Register</h1>
                    <form >
                        <input type="text" placeholder='Username' />
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <input type="text" placeholder='Name' />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}