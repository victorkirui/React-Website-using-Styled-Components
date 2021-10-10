import React, {useState} from 'react';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper,
    MdArrowRightAlt,
    MdRight
    } from './HeroElements';
import video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';

const HeroSection = () => {

    const [hover,setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoplay loop muted src={video} type='video/mp4'  />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Lorem ipsum dolor sit amet, consectetuer
                </HeroH1>
                <HeroP>
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    large="true"
                    dark="true">Get started {hover ? <MdArrowRightAlt /> : <MdRight /> }</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
