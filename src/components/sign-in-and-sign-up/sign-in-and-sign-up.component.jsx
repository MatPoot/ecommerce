import React from 'react';

import './sign-in-and-sign-up.styles.scss';

import SignIn from '../sign-in/sign-in.component';


// used function component to keep data on the component
const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
    </div>
)

export default SignInAndSignUpPage;