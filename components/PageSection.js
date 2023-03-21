import { StyledContainer, StyledPageSection } from "@/styles/CommonStyles"

const PageSection = ({children}) => {
  return (
    <StyledPageSection>
       {children}
    </StyledPageSection>
  )
}

export default PageSection