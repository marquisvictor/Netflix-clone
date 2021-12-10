import React from 'react';

function SignIn() {
    return (
        <div className='login__body'>
            <h1>Sign In</h1>
            <form>
                <input type='text' placeholder='Email' />
                <input type='text' placeholder='Password' />
                <button>Sign in</button>
            </form>
        </div>
    );
}

export default SignIn;
