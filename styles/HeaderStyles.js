import Link from "next/link";
import styled from "styled-components";

export const StyledHeader = styled.header`
    position: relative;
    display: block;
    width: 100%;
    padding: 1.25rem 0;
`;

export const StyledNavWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledNavContent = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 2rem;
`;

export const StyledNavLogo = styled.div`
    position: relative;
    display: block;
    width: auto;

    a{
        position: relative;
        display: block;
        width: auto;
        height: 3rem;

        img{
            position: relative;
            display: block;
            width: auto;
            height: 100%;
        }
    }
`;

export const StyledNavList = styled.nav`
    position: relative;
    display: block;
    width: auto;

    ul{
        position: relative;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        grid-gap: 1.25em;

        li{
            position: relative;
            display: block;
        }
    }
`;

export const StyledNavLink = styled(Link)`
    position: relative;
    display: block;
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme.textColor};

    &:hover{
        color: ${(props) => props.theme.primaryColor};
    }
`;

export const StyledSearchForm = styled.form`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 2.75rem;
    border-radius: 1.5rem;
    width: 20rem;
    background-color: ${(props)=> props.theme.thirdColor};
    backdrop-filter: ${(props)=> props.grey ? 'blur(3px)' : 'blur(0px)'};
    
    input{
        position: relative;
        display: block;
        padding: 0 1em;
        background: none;
        font-weight: 600;
        border: none;
        height: 100%;
        flex: auto;
        outline: none;
        box-sizing: border-box;

        &::placeholder{
            font-weight: 500;
        }
    }

    button{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${(props)=> props.theme.greyColor};
        height: 2.75rem;
        width: 2.75rem;
        border-radius: 1.5rem;
        border: none;
        outline: none;
        transform: scale(0.7);
        transform-origin: center;
        cursor: pointer;
        transition: all 0.3s ease;

        svg{
            color: ${(props)=> props.theme.textColor };
            width: 1.25rem;
            height: auto;
            display: block;
            transition: all 0.3s ease;
        }

        &:hover{
            background-color: ${(props)=> props.theme.primaryColor };

            svg{
                color: ${(props)=> props.theme.backgroundColor};
            }
        }
    }
`;