import React from 'react';
import { Button } from '../ButtonElements';
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    TextWrapper, 
    TopLine, 
    Heading, 
    SubHeading, 
    BtnWrapper, 
    Column2,
    ImgWrapper,
    Img } from './InfoElements';

const InfoArea = ({
    id,
    lightBg,
    lightText,
    lightTextDesc,
    topLine,
    headLine,
    description,
    buttonLabel,
    imgStart,
    img,
    alt,
    primary,
    dark,
    dark2, 
    darkText}) => {
    return ( 
        <>
            <InfoContainer id={id} lightBg={lightBg}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine> {topLine}</TopLine>
                                <Heading lightText={lightText}> {headLine} </Heading>
                                <SubHeading darkText={darkText}> {description} </SubHeading>
                                <BtnWrapper>
                                    <Button to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2 = {dark2 ? 1 : 0}
                                    > {buttonLabel} </Button>
                                </BtnWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrapper>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoArea
