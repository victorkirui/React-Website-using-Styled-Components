import styled from "styled-components";
import { MdClose } from 'react-icons/md';
import { Link as LinkRoute } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const SidebarContainer = styled.aside`
    position:fixed;
    top:0;
    left:0;
    background:#000;
    width:100%;
    height:100%;
    display:grid;
    align-items:center;
    z-index:999;
    transition: all 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`
export const Icon = styled.div`
    color:#fff;
`
export const CloseIcon = styled(MdClose)`
    cursor:pointer;
    font-size:1.8rem;
    position:absolute;
    top:1rem;
    right:1.5rem;
    background:transparent;
`
export const SidebarWrapper = styled.div`
    color:#fff;
`
export const SidebarMenu = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows:repeat(6,80px);
    align-items:center;

    @media screen and (max-width:425px){
        grid-template-rows:repeat(6,50px);
`
export const SidebarLink = styled(LinkScroll)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.4rem;
    list-style:none;
    color:#fff;
    cursor:pointer;
    transition:all 0.3s ease-in-out;
    text-decoration:none;

    &:hover{
        color: orange;
        transition: all 0.3s ease-in-out;
    }
`
export const SidebarBtnWrap = styled.div`
    display:flex;
    justify-content:center;
`
export const SidebarRoute = styled(LinkRoute)`
    white-space:nowrap;
    background:orange;
    font-size:1.4rem;
    color:#fff;
    border-radius:50px;
    border:none;
    outline:none;
    padding:1rem 4rem;
    text-decoration:none;
    cursor:pointer;
    transition: all 0.3s ease-in-out;
    
    &:hover{
        transition: all 0.3s ease-in-out;
        background:transparent;
        border:3px solid orange;
    }
`