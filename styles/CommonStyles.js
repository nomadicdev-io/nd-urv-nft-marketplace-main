import Image from 'next/image';
import styled from 'styled-components';

export const StyledContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1280px;
    min-width: 1280px;
    padding-inline: 15px;
    margin-inline: auto;

    @media only screen and (max-width: 1360px){
        max-width: 1024px;
        min-width: 1024px;
    }

    @media only screen and (min-width: 768px) and (max-width: 1200px) and (orientation: portrait) {
        max-width: 90%;
        min-width: 90%;
    }

    @media only screen and (max-width: 767px){
        max-width: 100%;
        min-width: 100%;
    }

`;

export const StyledPageBG = styled.div`
    position: fixed;
    width: 100%;
    height: auto;
    z-index: -1;
    pointer-events: none;
    filter: blur(150px);
    opacity: 0.75;
`;

export const StyledPageBGImage = styled(Image)`
    position: relative;
    display: block;
    width: 100%;
    height: auto;
`