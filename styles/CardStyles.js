import Image from 'next/image';
import Link from 'next/link';
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
`;

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
`;

export const StyledSellersCardWrapper = styled(Link)`
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    border-radius: 2.5rem;
    overflow: hidden;
    border: 1px solid ${({theme})=> theme.thirdColor};
    background-color: #4c4c4c21;
    backdrop-filter: blur(3px);
    color: ${({theme})=> theme.textColor};
`;

export const StyledSellersCardTop = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: auto;
`;

export const StyledSellersBanner = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 0;
    padding-top: 65%;

    &:after{
        content: '';
        position: absolute;
        bottom: 2.5rem;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${({theme})=> theme.backgroundColor};
        background: linear-gradient(0deg, rgba(19,19,19,1) 0%, rgba(19,19,19,0) 100%);
    }
`;

export const StyledSellersBannerImage = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 2.5rem);
    object-fit: cover;
`;

export const StyledSellerProfileIcon = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon_{
        position: relative;
        display: block;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        overflow: hidden;
    }
`;

export const StyledSellerContent = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding: 1.15rem;
    text-align: center;

    .seller_name{
        position: relative;
        display: block;
        font-size: 1.25rem;
        font-weight: 600;
    }

    .seller_username{
        position: relative;
        display: flex;
        align-items: center;
        margin: 0.5em 0 1em;
        font-size: 0.9rem;
        font-weight: 500;
        justify-content: center;
        grid-gap: 0.25em;

        span{
            position: relative;
            display: block;
            opacity: 0.75;
        }

        i{
            display: block;
            color: ${({theme})=> theme.primaryColor};

            svg{
                display: block;
                width: 1rem;
                height: auto;
            }
        }
    }

    .volume_{
        position: relative;
        display: inline-block;
        padding: 0.5rem 1.5rem;
        border-radius: 2.5rem;
        background-color: #ffffff1c;
        backdrop-filter: blur(3px);
        width: 100%;
        span{
            position: relative;
            display: block;
            font-size: 0.75rem;
        }

        strong{
            position: relative;
            display: block;
            font-size: 0.9rem;
        }
    }
`;

export const StyledCollectionWrapper = styled(Link)`
    position: relative;
    display: block;
    width: 100%;
    border-radius: 2.5rem;
    overflow: hidden;
    border: 1px solid ${({theme})=> theme.thirdColor};
    background-color: #4c4c4c21;
    backdrop-filter: blur(3px);
    color: ${({theme})=> theme.textColor};

    .title_wrapper{
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        grid-gap: 1.25rem;
        padding: 1.25rem 1.25rem 0;

        .title_with_icon{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            grid-gap: 0.75rem;

            .icon_{
                position: relative;
                display: block;
                width: 2.75rem;
                height: 2.75rem;
                border-radius: 1.5rem;
                overflow: hidden;
            }

            .title_{
                position: relative;
                display: block;

                .name_{
                    position: relative;
                    display: block;
                    font-weight: 600;
                    font-size: 1rem;
                }

                .username_{
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    font-size: 0.9rem;
                    span{
                        position: relative;
                        opacity: 0.75;
                    }

                    i{
                        position: relative;
                        display: block;
                        color: ${({theme})=> theme.primaryColor};
                        
                        svg{
                            position: relative;
                            display: block;
                            width: 1rem;
                            height: auto;
                        }
                    }
                }
            }
        }
    }

    .images_grid{
        position: relative;
        display: block;
        
        .collection_image{
            position: relative;
            display: block;
            width: 100%;
            height: 0;
            padding-top: 75%;
            overflow: hidden;
        }
    }

    .price_info{
        position: relative;
        width: 100%;
        height: auto;
        padding: 1.25rem;
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
    }

    .fav_count{
        position: relative;
        background-color: #ffffff1c;
        backdrop-filter: blur(3px);
        height: 2.75rem;
        width: auto;
        padding: 0 0.75em;
        border-radius: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        z-index: 2;
        grid-gap: 0.75em;

        i{
            position: relative;
            display: block;
            
            svg{
                position: relative;
                display: block;
                width: 1.25rem;
                height: auto;
                color: ${({theme})=> theme.primaryColor};
            }
        }

        span{
            position: relative;
            display: block;
            font-weight: 500;
            font-size: 1.1rem;
        }
    }
`;

export const StyledNFTCard = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: auto;
`;

export const StyledNFTCardLink = styled(Link)`
    position: relative;
    display: block;
    border-radius: 2rem;
    overflow: hidden;
    border: 1px solid ${({theme})=> theme.thirdColor};
    background-color: #4c4c4c21;
    backdrop-filter: blur(3px);
    color: ${({theme})=> theme.textColor};
`;