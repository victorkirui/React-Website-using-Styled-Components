import styled from 'styled-components';

export const InfoContainer = styled.div`
    color:#fff;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#010606')}; 

    @media screen and (max-width:768px){
        padding:100px 0;
    }
`
export const InfoWrapper = styled.div`
    display:grid;
    z-index:1;
    height:650px;
    width:100%;
    max-width:1100px;
    margin-right:auto;
    margin-left:auto;
    padding:0 25px;
    justify-content:center;

    @media screen and (max-width:1024px){
        height:600px;
    }
    @media screen and (max-width:768px){
        height:800px;
    }
`
export const InfoRow = styled.div`
    display:grid;
    grid-auto-colums: minmax(auto,1fr);
    align-items:center;
    grid-template-areas:${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};
    

    @media screen and (max-width:768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`
export const Column1 = styled.div`
    grid-area:col1;
    margin-bottom:15px;
    padding:0 15px;
`
export const Column2 = styled.div`
    grid-area:col2;
    margin-bottom:15px;
    padding:0 15px;
`
export const TextWrapper = styled.div`
    max-width:540px;
    padding-top:0px;
    padding-bottom:60px;
`
export const TopLine = styled.p`
    font-size:16px;
    font-weight:700;
    line-height:16px;
    letter-spacing:1.4px;
    color:orange;
    margin-bottom:16px;
    text-transform:uppercase;
`
export const Heading = styled.h1`
    font-size:48px;
    margin-bottom:24px;
    fon-weight:500;
    line-height:1.1;
    color: ${({lightText}) => (lightText ? '#f3f3f3  ' : '#333')};

    @media screen and (max-width:480px){
        font-size:32px;
    }
`
export const SubHeading = styled.p`
    max-width:440px;
    font-size:18px;
    line-height:1.8em;
    margin-bottom:35px;
    color:${({darkText}) => (darkText ? '#333' : '#f3f3f3')};
`
export const BtnWrapper = styled.div`
    display:flex;
    justify-content:flex-start;
`
export const ImgWrapper = styled.div`
    max-width:550px;
    height:100%; 
`
export const Img = styled.img`
    width:100%;
    margin:0 0 10px 0;
    padding-right:0;
`