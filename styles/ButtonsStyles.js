import Link from "next/link";
import styled from "styled-components";

export const StyledButtonGroup = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: ${(props)=> props.justify ? props.justify : 'flex-start' };
    grid-gap: 0.75rem;
    margin-top: ${(props)=> props.marginTop ? '1.5em' : '0' };
    margin-bottom: ${(props)=> props.marginBottom ? '1.5em' : '0' };
    padding-top: ${(props)=> props.paddingTop ? '1.5em' : '0' };
    padding-bottom: ${(props)=> props.paddingBottom ? '1.5em' : '0' };
`;

export const StyledIconButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 1.5rem;
    outline: none;
    border: none;
    background-color: ${(props)=> props.grey ? props.theme.thirdColor : props.theme.primaryColor};
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: ${(props)=> props.grey ? 'blur(3px)' : 'blur(0px)'};
    color: ${(props)=> props.grey ? props.theme.textColor : props.theme.backgroundColor};

    svg{
        width: 1.25rem;
        height: auto;
        display: block;
    }

    &:hover{
        background-color: ${(props)=> props.grey ? props.theme.textColor : props.theme.textColor};
        color: ${(props)=> props.grey ? props.theme.backgroundColor : props.theme.backgroundColor};
    }
`;

export const StyledPrimaryButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 0.5em;
    width: auto;
    padding: 0 1.5em;
    height: 2.75rem;
    border-radius: 1.5rem;
    outline: none;
    border: none;
    background-color: ${(props)=> props.grey ? props.theme.thirdColor : props.theme.primaryColor};
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    color: ${(props)=> props.grey ? props.theme.textColor : props.theme.backgroundColor};
    font-weight: 600;
    backdrop-filter: ${(props)=> props.grey ? 'blur(3px)' : 'blur(0px)'};

    span{
        position: relative;
        display: block;
    }

    svg{
        display: block;
        width: 1rem;
        height: auto;
        color: ${(props)=> props.grey ? props.theme.textColor : props.theme.backgroundColor};
    }

    &:hover{
        background-color: ${(props)=> props.grey ? props.theme.textColor : props.theme.textColor};
        color: ${(props)=> props.grey ? props.theme.backgroundColor : props.theme.backgroundColor};
    }
`

export const StyledPrimaryButtonLink = StyledPrimaryButton.withComponent(Link);

export const StyledIconButtonLink = StyledIconButton.withComponent(Link);