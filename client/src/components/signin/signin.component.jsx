import  React,{ useState } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInWithGoogle } from '../../firebase/firebase.utils'
import '../signin/signin.styles.scss';

const SignIn = () => {

    const INITIAL_USER_STATE = {
        email: '',
        password: ''
    }

    const [ userCredentilals, setCredentials ] = useState(INITIAL_USER_STATE);

    const handleSubmit = event => {
        event.preventDefault();
        setCredentials({ email: '', password: '' });
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({...userCredentilals, [name]: value });
    }

    const {email,password}=userCredentilals;

    return (
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" value={email} handleChange={handleChange} label="email" required />
                <FormInput name="password" type="password" value={password} handleChange={handleChange} label="password" required />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={SignInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    )

}

export default SignIn;