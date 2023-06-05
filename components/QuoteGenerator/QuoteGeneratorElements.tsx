import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export const GradientBackgroundCon = styled.div`
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    background-size: 400% 400%;
    height: 100vh;
    width: 100vw;
    animation: gradient 8s ease infinite;
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;

export const BackGroundImage1 = styled(Image)`
    position: relative;
    z-index: 1;
    margin-left: 10px;
    margin-top: -10px;
    height: 200px;
    width: 200px;
    `;

export const BackGroundImage2 = styled(Image)`
    position: fixed;
    z-index: 1;
    bottom: 0px;
    right: 10px;
    height: 200px;
    width: 200px;
    `;

export const FootCon = styled.div`
    width: 100vw;
    height: 50px;
    text-align: center;
    font-family: 'Source Code Pro', monospace;
    font-size: 1rem;
    position: absolute;
    bottom: 0px;
    color: white;
    z-index: 999999;
    `;

export const FooterLink = styled.a`
    color: white;
    text-decoration: none;
    &:hover {
        color: #00d4ff;
    }
    `;

export const RedSpan = styled.span`
    color: red;
    `;