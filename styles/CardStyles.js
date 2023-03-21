import Image from 'next/image';
import styled from 'styled-components';

export const StyledBannerNFTCardWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    border-radius: 3rem;
    overflow: hidden;
    border: 1px solid ${({theme})=> theme.thirdColor};
`;

export const StyledCardImageBox = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-top: ${({paddingTop})=> paddingTop ? paddingTop : '100%'};

    &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 60%;
        background: linear-gradient(180deg, rgb(19, 19, 19) 0%, rgba(97, 43, 43, 0) 100%);
    }
`;

export const StyledCardImage = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const StyledBannerNFTTitle = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    padding: 2rem;
    z-index: 2;
    .inner_{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.75rem;
        background-color: #ffffff1c;
        backdrop-filter: blur(3px);
        border-radius: 2.5rem;
    }

    .price_data {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        grid-gap: 1em;

        .icon_{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2.75rem;
            height: 2.75rem;
            border-radius: 50%;
            overflow: hidden;
            background-color: #ffffff1f;
            
            svg{
                position: relative;
                display: block;
                width: 1rem;
                height: auto;
            }
        }

        .price_{
            position: relative;
            display: block;

            span{
                position: relative;
                display: block;
                font-size: 0.75rem;
            }

            strong{
                position: relative;
                display: block;
                font-size: 1rem;
            }
        }
    }
`

export const StyledBannerNFTAuthor = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-gap: 1em;
    padding: 0.5rem 2rem;
    z-index: 2;

    .title_{
        position: relative;
        display: block;
        width: 100%;
        padding: 1rem 0;
        flex: 1;

        p{
            position: relative;
            display: block;
            font-weight: 600;
            margin: 0;
            font-size: 1.25rem;
        }
    }

    .author_{
        position: relative;
        display: flex;
        align-items: center;
        grid-gap: 0.25rem;
        span{
            position: relative;
            display: block;
            font-weight: 500;
            font-size: 0.75rem;
            opacity: 0.75;
        }

        i{
            position: relative;
            display: block;

            svg{
                position: relative;
                display: block;
                color: ${({theme})=> theme.primaryColor};
                width: 0.9rem;
                height: auto;
            }
        }
    }
`