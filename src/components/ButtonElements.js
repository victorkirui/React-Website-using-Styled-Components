import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button  = styled(Link)`
font-weight:700;
    display:flex;
    align-items:center;
    border:none;
    outline:none;
    background:${({primary}) => (primary ? "orange" : "#000")};
    padding: ${({large}) => (large ? "15px 48px" : "10px 24px")};
    color:${({dark}) => (dark ? "#000" : "#fff")};
    cursor:pointer;
    border-radius:50px;
    transition: all 0.4s ease-in-out;

    &:hover{
        transition:all 0.4s ease-in-out;
        background:${({primary}) => (primary ? "#fff" : "orange")};
        color:${({dark}) => (dark ? "orange" : "#000")};
    }

`