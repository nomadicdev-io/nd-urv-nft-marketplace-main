import styled from "styled-components";

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