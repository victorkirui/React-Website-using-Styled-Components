import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';


export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    height: 80px;
    padding: 0 24px;
    max-width: 1100px;
`
export const NavLogo = styled(LinkRouter)`
    color:orange;
    font-size:1.5rem;
    justify-self:flex-start;
    display:flex;
    align-items:center;
    cursor:pointer;
    font-weight:700;
    text-decoration:none;
`
export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width:768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%,60%);
        cursor:pointer;
        font-size:1.7rem;
        color:#fff;
    }
`
export const NavMenu = styled.ul`
    display:flex;
    justify-content:center;
    align-items:center;
    list-style:none;
    text-align:center;

    @media screen and (max-width:768px){
        display:none;
    }
`
export const NavItem = styled.li`
    line-height:80px;
`
export const NavLinks = styled(LinkScroll)`
    display:flex;
    align-items:center;
    color:#fff;
    text-decoration:none;
    padding:0 1rem;
    height:100%;
    cursor:pointer; 

    &.active{
        border-bottom:3px solid orange;
    }
    &:hover{
        transition:all 0.3s ease-in-out;
        color:orange;
    }
`
export const NavBtn = styled.nav`
    display:flex;
    align-items:center;

    @media screen and (max-width:768px){
        display:none;
    }
`
export const NavBtnLink = styled(LinkRouter)`
    background:orange;
    color:#000;
    padding:10px 30px;
    border-radius:50px;
    border:none;
    outline:none;
    cursor:pointer;
    text-decoration:none;
    transition:all 0.4s ease-in-out;
    font-weight:700;

    &:hover{
        transition:all 0.4s ease-in-out;
        background: #fff;
        color:orange;
    }
`