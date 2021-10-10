import React from 'react';
import Icon4 from '../../images/svg-4.svg';
import Icon5 from '../../images/svg-5.svg';
import Icon6 from '../../images/svg-6.svg';
import {
    ServicesBg,
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP } from './ServicesElements';

const Services = () => {
    return (
        <>  
            <ServicesBg id="services">
                <ServicesContainer>
                    <ServicesH1>Services</ServicesH1>
                    <ServicesWrapper>
                        <ServicesCard>
                            <ServicesIcon src={Icon4} />
                            <ServicesH2>Heading</ServicesH2>
                            <ServicesP>Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</ServicesP>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={Icon5} />
                            <ServicesH2>Heading</ServicesH2>
                            <ServicesP>Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</ServicesP>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={Icon6} />
                            <ServicesH2>Heading</ServicesH2>
                            <ServicesP>Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</ServicesP>
                        </ServicesCard>
                    </ServicesWrapper>
                </ServicesContainer>
            </ServicesBg>
        </>
    )
}

export default Services
