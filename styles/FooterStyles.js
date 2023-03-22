import Link from "next/link";
import styled from "styled-components";

export const StyledFooter = styled.footer`
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    padding: 5rem 0 1.5rem;
    margin-top: 6.5em;
    background-color: ${({theme})=> theme.backgroundColor};
`;

export const StyledFooterBottom = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    text-align: center;
    padding-top: 1.5rem;
    border-top: 1px solid ${({theme})=> theme.thirdColor};
    p{
        position: relative;
        display: block;
        margin: 0;
        font-size: 0.9rem;
        font-weight: 300;
    }
`;

export const StyledFooterTop = styled.div`
    position: relative;
    display: block;
    width: 100%;

    .inner_grid{
        position: relative;
        display: grid;
        grid-template-columns: 1.5fr repeat(3, 1fr);
        grid-gap: 5vw;
        width: 100%;
        margin-bottom: 2.5em;

        @media only screen and (max-width: 767px){
            grid-template-columns: 100%;
            grid-gap: 2rem;
        }

        .footer_item{
            position: relative;
            display: block;
            width: 100%;

            h4{
                position: relative;
                display: block;
                margin: 0;
                color: 1.5rem;

                strong{
                    color: ${({theme})=> theme.primaryColor}    
                }
            }

            &>ul{
                position: relative;
                display: block;
                width: 100%;
                padding: 0;
                margin: 1em 0;
                font-size: 0.9rem;

                li{
                    position: relative;
                    display: block;
                    margin-bottom: 0.75em;

                    a{
                        position: relative;
                        display: block;
                        color: ${({theme})=> theme.textColor};
                        line-height: 1.75;
                        font-size: 0.9rem;
                        opacity: 0.8;

                        &:hover {
                            color: ${({theme})=> theme.primaryColor};
                            opacity: 1;
                        }
                    }
                }
            }

            .footer_about{
                position: relative;
                display: block;

                p{
                    position: relative;
                    display: block;
                    opacity: 0.8;
                    font-size: 0.9rem;
                    line-height: 1.75;
                }
                
            }
        }

    }
`;

export const StyledFooterSocial = styled.ul`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 0.75rem;
    padding: 0;

    li{
        position: relative;
        display: block;
    }
`;

export const StyledFooterApp = styled.div`
    position: relative;
    display: block;
    width: 100%;
    padding: 3.5rem;
    border-radius: 2.5rem;
    overflow: hidden;
    border: 1px solid ${({theme})=> theme.thirdColor};
`;

export const StyledFooterAppBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img{
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        opacity: 0.25;
    }

    &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #4c4c4c21 ;
    }
`;

export const StyledFooterAppContent = styled.div`
    position: relative;
    display: block;
    width: 100%;
    text-align: center;

    h2{
        position: relative;
        display: block;
        margin: 0;
        font-size: 2rem;
        font-weight: 500;

        span{
            color: ${({theme})=> theme.primaryColor};
        }
    }

    ul{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        grid-gap: 1rem;
        padding: 0;
        margin: 1.5em 0 0;
        
        li{
            position: relative;
            display: block;

            img{
                position: relative;
                display: block;
                width: auto;
                height: 60px;
            }
        }
    }
`