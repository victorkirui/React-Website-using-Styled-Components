import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BgImage from '../../images/bgimg.jpg';


export const SignInContainer = styled.div`
    background-image: url(${BgImage});
    background-size:cover;
    background-repeat:no-repeat;
    height:100vh;
    width:100vw;
`
export const FormContainer = styled.div`
    width:100%;
    max-width:1100px;
    margin:0 auto;
    padding:18px 0;
`
export const Logo = styled(Link)`
    color:orange;
    font-size:25px;
    font-weight:700;
    margin-left:32px;
    /* margin-bottom:50px; */
    text-decoration:none;
    cursor:pointer;

    @media screen and (max-width:425px){
        margin-left:16px;
        margin-top:8px;
    }
`
export const FormContent = styled.div`
    padding:auto;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin-top:50px;
`
export const Form = styled.form`
    background-color:#000;
    max-width: 400px;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding:50px 30px;
    border-radius:10px;
    box-shadow:0 1px 3px rgba(0,0,0,0.3);

    @media screen and (max-width:425px){
        padding:30px 15px;
    }
`
export const FormH1 = styled.h1`
    font-size:24px;
    margin-bottom:20px;
    font-weight:500;
    line-height:1.8em;
    color:#fff;
    text-align:center;
`
export const FormLabel = styled.label`
    color:#f3f3f3;
    font-size:14px;
    margin-bottom:8px;
`
export const FormInput = styled.input`
    width:100%;
    border:none;
    outline:none;
    background:#fff;
    color:#333;
    border-radius:4px;
    margin-bottom:30px;
    padding:10px;
    font-size:15px;
`
export const FormButton = styled.button`
    background:orange;
    width:100%;
    color:#000;
    font-weight:500;
    text-transform:uppercase;
    font-size:15px;
    letter-spacing:1px;
    padding:15px 0;
    margin-bottom:30px;
    cursor:pointer;
    border:none;
    border-radius:4px;
`     
export const Text = styled.a`
    font-size:13px;
    color:orange;
`