import React, { useState } from 'react';
import { SignIn } from '../../components';
import './landing.css';

function Landing() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [signinState, setSigninState] = useState(false);
    console.log(signinState);

    function checkEmpty(obj) {
        if (obj === '') {
            return false;
        }
        return true;
    }

    const handleChange = e => {
        const { value } = e.target;
        setEmail(value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!checkEmpty(email)) {
            setError('Please fill in your Email Address');
        } else {
            setSigninState(true);
            setEmail('');
            setError('');
        }
    };

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

            {signinState ? (
                <SignIn />
            ) : (
                <div className='login__body'>
                    <h2>Unlimited movies, TV shows, and more.</h2>
                    <h3>Watch anywhere. Cancel anytime.</h3>
                    <p>
                        Ready to watch? Enter your email to create or restart
                        your membership.
                    </p>

                    <form onSubmit={handleSubmit} className='login__input'>
                        <input
                            type='text'
                            placeholder='Email address'
                            value={email}
                            name='email'
                            onChange={handleChange}
                        />
                        <button>Get Started </button>
                    </form>
                    <p className='login__error'>{error}</p>
                </div>
            )}
        </div>
    );
}

export default Landing;
