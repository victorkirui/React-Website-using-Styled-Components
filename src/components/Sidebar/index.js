import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SidebarBtnWrap, 
    SidebarRoute
} from './SideBarElements';

const SideBar = ({isOpen,handleToggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={handleToggle}>
            <Icon onClick={handleToggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={handleToggle}>About</SidebarLink>
                    <SidebarLink to="services" onClick={handleToggle}>Services</SidebarLink>
                    <SidebarLink to="discover" onClick={handleToggle}>Discover</SidebarLink>
                    <SidebarLink to="contact" onClick={handleToggle}>Contact</SidebarLink>
                    <SidebarLink to="signup" onClick={handleToggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="/signin" onClick={handleToggle}>Sign In</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar
