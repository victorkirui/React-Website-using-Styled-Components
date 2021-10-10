import React from 'react';
import { animateScroll as scroll } from 'react-scroll'; 
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';
import { 
    FooterContainer, 
    FooterWrapper, 
    FooterLinksContainer,
    FooterLinksWrapper, 
    FooterItemsWrapper, 
    FooterLinkTitle, 
    FooterLink,
    SocialMedia, 
    SocialMediaWrapper, 
    SocialLogo, 
    Copyright, 
    SocialIconItems, 
    SocialIconLink } from './FooterElements';

const FooterSection = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterItemsWrapper>
                                <FooterLinkTitle>Quick Links</FooterLinkTitle>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Testimonials</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                            </FooterItemsWrapper>
                            <FooterItemsWrapper>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/">Our Services</FooterLink>
                                <FooterLink to="/">Destinations</FooterLink>
                                <FooterLink to="/">Sponsorships</FooterLink>
                            </FooterItemsWrapper>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterItemsWrapper>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/">Agency</FooterLink>
                                <FooterLink to="/">Influencer</FooterLink>
                                <FooterLink to="/">Freelancer</FooterLink>
                            </FooterItemsWrapper>
                            <FooterItemsWrapper>
                                <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to="/">Our Videos</FooterLink>
                                <FooterLink to="/">Submit Video</FooterLink>
                                <FooterLink to="/">Terms of Service</FooterLink>
                            </FooterItemsWrapper>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>

                    <SocialMedia>
                        <SocialMediaWrapper>
                            <SocialLogo to="/" onClick={toggleHome}>WeCode</SocialLogo>
                            <Copyright>WeCode &copy; {new Date().getFullYear()}</Copyright>
                            <SocialIconItems>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIconItems>
                        </SocialMediaWrapper>
                    </SocialMedia>

                </FooterWrapper>
            </FooterContainer> 
        </>
    )
}

export default FooterSection
