import { StyledButtonGroup, StyledIconButton, StyledPrimaryButton, StyledPrimaryButtonLink } from "@/styles/ButtonsStyles"

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

export const PrimaryButton = ({grey, title, href})=> {
    return (
        <StyledPrimaryButton grey={grey} href={href}>
            {title}
        </StyledPrimaryButton>
    )
};

export const PrimaryButtonLink = ({grey, title, href})=> {
    return (
        <StyledPrimaryButtonLink href={href} grey={grey}>
            {title}
        </StyledPrimaryButtonLink>
    )
};