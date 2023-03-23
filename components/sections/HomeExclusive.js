import { StyledContainer, StyledContentWrapper, StyledGridWrapper } from "@/styles/CommonStyles"
import ExclusiveBanner from "../cards/ExclusiveBanner"
import PageSection from "../PageSection"

const HomeExclusive = () => {
  return (
    <PageSection>
        <StyledContainer>
            <StyledContentWrapper>

                <ExclusiveBanner />

            </StyledContentWrapper>
        </StyledContainer>
    </PageSection>
  )
}

export default HomeExclusive