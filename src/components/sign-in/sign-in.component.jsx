import React from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }
    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]: value})
    }
    // handlechange function sets the name of the state property according to the name of the input tag, utilizing a single function for two operations. Hence why both 

    render () {
    return (
        <div className='sign-in'>
            <h3>I have an account</h3>
            <span>Sign in</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" type="email" value={this.state.email} onChange={this.handleChange} required></FormInput>
                <label>Email</label>
                <FormInput name="password" type="password" value={this.state.password} onChange={this.handleChange} required ></FormInput>
                <label>Password</label>
                <FormInput type='submit' value='Submit'></FormInput>
            </form>
        </div>
        );
    }
}
export default SignIn;