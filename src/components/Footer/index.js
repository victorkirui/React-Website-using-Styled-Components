import React from 'react';
import { 
    FooterContainer, 
    FooterWrapper, 
    FooterLinksContainer,
    FooterLinksWrapper, 
    FooterItemsWrapper, 
    FooterLinkTitle, 
    FooterLink } from './FooterElements';

const FooterSection = () => {
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
                </FooterWrapper>
            </FooterContainer> 
        </>
    )
}

export default FooterSection
