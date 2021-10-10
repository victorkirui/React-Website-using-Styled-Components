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
    margin-bottom:35px;

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
export const SocialMedia = styled.section`
    max-width:1000px;
    width:100%;
`
export const SocialMediaWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:1100px;

    @media screen and (max-width:800px){
        flex-direction:column;
    }
`
export const SocialLogo = styled(Link)`
    color:orange;
    font-size:20px;
    text-decoration:none;
    cursor:pointer;
    margin-bottom:16px;
`
export const Copyright = styled.small`
    color:#fff;
    margin-bottom:16px;
`
export const SocialIconItems = styled.div`
    display:flex;
    justify-items: space-between;
    align-items:center;
`
export const SocialIconLink = styled.a`
    color:#fff;
    font-size:24px;
    cursor: pointer;
    transition:all 0.3s ease-in-out;
    margin:0 10px;

    &:hover{
        transition:all 0.3s ease-in-out;
        color:orange;
    }
`