import React from 'react';
import { 
    SignInContainer, 
    FormContainer, 
    Logo, 
    FormContent, 
    Form, 
    FormH1, 
    FormLabel, 
    FormInput, 
    FormButton, 
    Text } from './SignInElements';

const SignIn = () => {
    return (
        <>
            <SignInContainer>
                <FormContainer>
                    <Logo to='/'>WeCode</Logo>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>

                            <FormLabel htmlfor="for">Email</FormLabel>
                            <FormInput type="email" required />

                            <FormLabel htmlfor="for">Password</FormLabel>
                            <FormInput type="password" required />

                            <FormButton type="submit">Submit</FormButton>

                            <Text href="#">Forgot Password</Text>
                        </Form>
                    </FormContent>
                </FormContainer>
            </SignInContainer>
        </>
    )
}

export default SignIn
