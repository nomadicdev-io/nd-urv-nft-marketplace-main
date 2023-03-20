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
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.65rem;
    outline: none;
    border: none;
    background-color: ${(props)=> props.grey ? props.theme.greyColor : props.theme.primaryColor};
    cursor: pointer;
    transition: all 0.3s ease;

    svg{
        color: ${(props)=> props.grey ? props.theme.textColor : props.theme.backgroundColor};
        width: 1.25rem;
        height: auto;
        display: block;
    }

    &:hover{
        transform: translateY(-10%);
        box-shadow: 1px 6px 10px ${(props)=> props.grey ? props.theme.greyColor : props.theme.secondaryColor};
    }
`;

export const StyledPrimaryButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding: 0 1.5em;
    height: 2.75rem;
    border-radius: 0.75rem;
    outline: none;
    border: none;
    background-color: ${(props)=> props.grey ? props.theme.thirdColor : props.theme.primaryColor};
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    color: ${(props)=> props.grey ? props.theme.textColor : props.theme.backgroundColor};
    font-weight: 600;

    &:hover{
        transform: translateY(-10%);
        box-shadow: 1px 6px 10px ${(props)=> props.grey ? props.theme.thirdColor : props.theme.secondaryColor};
    }
`

export const StyledPrimaryButtonLink = StyledPrimaryButton.withComponent(Link);