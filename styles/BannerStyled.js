import styled from 'styled-components';

export const StyledBannerSection = styled.section`  
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-top: 5rem;
`;

export const StyledBannerWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 60% calc(40% - 5vw);
    grid-gap: 5vw;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 1em 0;
`;

export const StyledBannerContent = styled.div`
    position: relative;
    display: block;
    width: 100%;

    h1{
        position: relative;
        display: block;
        font-size: 3rem;
        font-weight: 600;
        margin: 0;
        line-height: 1.25;
        strong{
            color: ${({theme})=> theme.primaryColor };
        }
    }

    p{
        position: relative;
        display: block;
        opacity: 0.9;
        font-size: 1.25rem;
        width: 90%;
        line-height: 1.75;
    }
`

export const StyledBannerNFT = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: auto;
`