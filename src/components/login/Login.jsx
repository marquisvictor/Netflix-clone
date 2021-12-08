import React from 'react';
import './login.css';

function Login() {
    return (
        <div className='login'>
            <div className='login__header'>
                <img
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt='netflix'
                    className='login__header-img'
                />
                <button className='login__button'>Sign in</button>
            </div>

            <div className='login__body'>
                <h2>Unlimited movies, TV shows, and more.</h2>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <p>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </p>

                <div className='login__input'>
                    <input type='text' placeholder='Email address' />
                    <button>Get Started </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
