import { StyledSectionTitle, StyledSectionTitleWrapper } from "@/styles/CommonStyles"

export const SectionTItle = ({align, justify, title, children}) => {
  return (
    <StyledSectionTitleWrapper
        align={align}
        justify={justify}
    >

        <StyledSectionTitle>{title}</StyledSectionTitle>

        {children}
    
    </StyledSectionTitleWrapper>
  )
}
