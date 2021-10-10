import styled from 'styled-components';

export const ServicesBg = styled.div`
    background:#000;
`
export const ServicesContainer = styled.div`
    height: 650px;
    max-width:1100px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-itens:center;

    @media screen and (max-width:900px){
        height:1000px;
    }

    @media screen and (max-width:768px){
        height:1300px;
    }
`
export const ServicesH1 = styled.h1`
    font-size:2.5rem;
    color:#fff;
    margin-bottom:80px;
    text-align:center;

    @media screen and (max-width:768px){
        font-size:2rem;
    }
`
export const ServicesWrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-gap:30px;
    padding:0 20px;
    justify-items:center;

    @media screen and (max-width:900px){
        grid-template-columns:repeat(2,1fr);
    }

    @media screen and (max-width:768px){
        grid-template-columns:1fr
    }
`
export const ServicesCard = styled.div`
    background:#fff;
    border-radius:10px;
    padding:15px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:350px;
    max-width:540px;
`
export const ServicesIcon = styled.img`
    width:150px;
    height:150px;
    margin-bottom:15px;
`
export const ServicesH2 = styled.h2`
    font-size: 24px;
    color:orange;
    margin-bottom:10px;
`
export const ServicesP =styled.p`
    font-size:18px;
    color:#333;
    line-height:1.8em;
    text-align:center;
`