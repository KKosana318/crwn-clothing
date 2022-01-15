import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        setEmail('');
        setPassword('');
    }

    const handleChange = event => {
        const {value, name} = event.target;

        if(name === "email") {
            setEmail(value)
        } else {
            setPassword(value);
        }
    }

    console.log('email: ' + email);
    console.log('password: ' + password);


    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form>
                <FormInput name="email" type="email" value={email} label="Email" handleChange={handleChange} required />
                <FormInput name="password" type="password" value={password} label="Password" handleChange={handleChange} required />
                <CustomButton type="submit" value="Submit Form" onClick={handleSubmit}>Sign In</CustomButton>
            </form>
        </div>
    )
};

export default SignIn;