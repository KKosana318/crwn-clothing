import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail('');
            setPassword('');
        } catch(error) {
            const errorString = error.toString() 
            const alertMessage = errorString.substring(15, errorString.indexOf(".") + 1)
            console.error(alertMessage)
            alert(alertMessage)
        }

        
    }

    const handleChange = event => {
        const {value, name} = event.target;

        if(name === "email") {
            setEmail(value)
        } else {
            setPassword(value);
        }
    }


    return (
        <div className="sign-in">
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form>
                <FormInput name="email" type="email" value={email} label="Email" handleChange={handleChange} required />
                <FormInput name="password" type="password" value={password} label="Password" handleChange={handleChange} required />
                <div className="buttons">
                    <CustomButton type="submit" onClick={handleSubmit}>Sign In</CustomButton>
                    <CustomButton type='button' onClick={SignInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    )
};

export default SignIn;