import Image from 'next/image';
import styled from 'styled-components';

export const StyledContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1280px;
    min-width: 1280px;
    padding-inline: 15px;
    margin-inline: auto;

    @media only screen and (min-width: 1920px){
        max-width: 1440px;
        min-width: 1440px;
    }

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
`;

export const StyledPageMain = styled.main`
    position: relative;
    display: block;
    width: 100%;
`;

export const StyledPageSection = styled.section`
    position: relative;
    display: block;
    width: 100%;
    overflow: hidden;
    padding-top: 6.5rem;
`;

export const StyledSectionTitleWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: ${({align})=> align ? align: 'center'};
    justify-content: ${({justify})=> justify ? justify : 'flex-start'};
    margin-bottom: 1.5rem;
`;

export const StyledSectionTitle = styled.h2`
    position: relative;
    display: block;
    margin: 0 0;
    font-weight: 600;
    font-size: 2.5rem;
`;

export const StyledContentWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    overflow: hidden;
`;

export const StyledCommonImageAbsolute = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const StyledGridWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    grid-gap: 30px;
`