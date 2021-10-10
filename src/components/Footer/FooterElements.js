import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color:#000;
`
export const FooterWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    max-width:1100px;
    padding:50px 25px;
    margin:0 auto;
`
export const FooterLinksContainer = styled.div`
    display:flex;
    justify-content:center;

    @media screen and (max-width:850px){
        padding-top:35px;
    }
` 
export const FooterLinksWrapper = styled.div`
    display:flex;

    @media screen and (max-width:425px){
        flex-direction:column;
    }
`
export const FooterItemsWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    text-align:left;
    width:150px;
    box-sizing:border-box;
    margin: 10px;

    @media screen and (max-width:425px){
        padding:10px;
        width:100%;
        margin:0;
    }
`
export const FooterLinkTitle = styled.h2`
    font-size:17px;
    text-transform:uppercase;
    color:#fff;
    margin-bottom:15px;
`
export const FooterLink = styled(Link)`
    color:#fff;
    font-size:14px;
    line-height:1.8em;
    text-decoration:none;
    cursor:pointer;
    transition:all 0.3s ease-in-out;

    &:hover{
        transition:all 0.3s ease-in-out;
        color:orange;
    }
`