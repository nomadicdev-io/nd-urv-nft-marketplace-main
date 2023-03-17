import { StyledIconButton } from "@/styles/ButtonsStyles"

export const IconButton = ({children, grey})=> {
    return (
        <StyledIconButton grey={grey}>
            {children}
        </StyledIconButton>
    )
}