import React from 'react';
import './signin.css';

function SignIn() {
    return (
        <div className='signin__body'>
            <h1 className='signin__header-text'>Sign In</h1>
            <form className='signin__form'>
                <input type='text' placeholder='Email' />
                <input type='text' placeholder='Password' />
                <button type='button'>Sign in</button>
            </form>
            <div className='signin__helper-text'>
                <p>remember me</p>
                <p>Need help?</p>
            </div>
        </div>
    );
}

export default SignIn;
