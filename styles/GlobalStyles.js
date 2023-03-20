import { Inter } from '@next/font/google';
import { createGlobalStyle } from 'styled-components';

const inter = Inter({ subsets: ['latin'] });

export const theme = {
    primaryColor: '#00F388',
    secondaryColor: '#00c16c',
    thirdColor: '#d3d3d321',
    backgroundColor: '#131313',
    textColor: 'rgba(255, 255, 255, 1)',
    greyColor: '#1e1e1e',
    greyColor2: '#2a2a2a',
    fontFamily: inter.style.fontFamily,
    fontSize: '16px',
    fontSizeMd: '15px',
    fontSizeSm: '14px',
};

export const GlobalStyles = createGlobalStyle`
    :root {
        color-scheme: light dark;
        color: ${(props) => props.theme.textColor};
        background-color: ${(props) => props.theme.backgroundColor};
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }


    html {
        box-sizing: border-box;
        font-size: ${(props) => props.theme.fontSize};

        @media only screen and (max-width:1440px){
            font-size: ${(props) => props.theme.fontSizeMd};
        }
      
        @media only screen and (max-width:1200px){
            font-size: ${(props) => props.theme.fontSizeSm};
        }
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    body {
        font-family: ${(props) => props.theme.fontFamily};
        font-size: 100%;
        font-weight: 400;
        line-height: 1.5;
        padding: 0;
        margin: 0;
    }

    a{
        text-decoration: none;
        transition: all 0.3s ease;
    }
`;
