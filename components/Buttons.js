import { StyledButtonGroup, StyledIconButton, StyledPrimaryButton, StyledPrimaryButtonLink, StyledIconButtonLink } from "@/styles/ButtonsStyles"

export const ButtonGroup = ({children, justify, marginTop, marginBottom, paddingTop, paddingBottom})=> {
    return(
        <StyledButtonGroup 
            justify={justify} 
            marginTop={marginTop} 
            marginBottom={marginBottom}
            paddingTop={paddingTop}
            paddingBottom={paddingBottom}
        >
            {children}
        </StyledButtonGroup>
    )
};

export const IconButton = ({children, grey, title})=> {
    return (
        <StyledIconButton grey={grey} title={ title ? title : 'URV'}>
            {children}
        </StyledIconButton>
    )
};

export const IconButtonLink = ({children, grey, title, href})=> {
    return (
        <StyledIconButtonLink href={href} grey={grey} title={ title ? title : 'URV'}>
            {children}
        </StyledIconButtonLink>
    )
};

export const PrimaryButton = ({grey, title, href, children})=> {
    return (
        <StyledPrimaryButton grey={grey} href={href}>
            <span>{title}</span> {children}
        </StyledPrimaryButton>
    )
};

export const PrimaryButtonLink = ({grey, title, href, children})=> {
    return (
        <StyledPrimaryButtonLink href={href} grey={grey}>
            <span>{title}</span> {children}
        </StyledPrimaryButtonLink>
    )
};