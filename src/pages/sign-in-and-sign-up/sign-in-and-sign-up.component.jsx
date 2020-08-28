import React from 'react'

import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignOut = () => (
    <div className='sign-in-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)


export default SignInAndSignOut;