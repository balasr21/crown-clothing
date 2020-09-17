import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, CreateUserProfile } from '../../firebase/firebase.utils';

const SignUp = () => {

  const INITIAL_USER_STATE = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [userCredentilals, setUserCredentials] = useState(INITIAL_USER_STATE);

  const { displayName, email, password, confirmPassword } = userCredentilals;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentilals, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await CreateUserProfile(user, { displayName });

      setUserCredentials(INITIAL_USER_STATE);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput type="text" name="displayName" label="DisplayName" value={displayName} onChange={handleChange} required />
        <FormInput type="email" name="email" label="Email" value={email} onChange={handleChange} required />
        <FormInput type="password" name="password" label="Password" value={password} onChange={handleChange} required />
        <FormInput type="password" name="confirmPassword" label="ConfirmPassword" value={confirmPassword} onChange={handleChange} required />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  )
}



export default SignUp;