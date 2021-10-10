import styled from 'styled-components';
import { MdOutlineArrowRightAlt,MdChevronRight } from 'react-icons/md';

export const HeroContainer = styled.div`
    background:#0c0c0c;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0 30px;
    height:650px;
    position:relative;
    z-index:1;
`
export const HeroBg = styled.div`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    height:100%;
    width:100%;
    overflow:hidden;
`
export const VideoBg = styled.video`
    object-fit:cover;
    -o-object-fit:cover;
    height:100%;
    width:100%;
    background:#232a34;
`
export const HeroContent = styled.div`
    color:#fff;
    position:absolute;
    height:100%;
    max-width:1100px;
    padding:0 5vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`
export const HeroH1 = styled.h1`
    font-size:55px;
    font-weight:700;
    text-align:center;
    
    @media screen and (max-width:768px){
        font-size:45px;
        font-weight:500;
    }
    @media screen and (max-width:480px){
        font-size:35px;
        font-weight:500;
    }
`
export const HeroP = styled.p`
    font-size:24px;
    margin-top:30px;
    text-align:center;
    line-height:1.8em;
    
    @media screen and (max-width:768px){
        font-size:22px;
    }
    @media screen and (max-width:480px){
        font-size:18px;
    }
`
export const HeroBtnWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:40px
`
export const MdArrowRightAlt = styled(MdOutlineArrowRightAlt)`
    font-size:18px;
    margin-left:8px;
`
export const MdRight = styled(MdChevronRight)`
    font-size:18px;
    margin-left:8px;
`