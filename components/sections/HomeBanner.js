import { StyledBannerSection, StyledBannerWrapper } from "@/styles/BannerStyled"
import { StyledContainer } from "@/styles/CommonStyles"
import BannerContent from "../BannerContent"
import BannerNFT from "../BannerNFT"
import PageMain from "../PageMain"

const HomeBanner = () => {
  return (

    <StyledBannerSection>
        <StyledContainer>
            <StyledBannerWrapper>

                <BannerContent />
                <BannerNFT />

            </StyledBannerWrapper>
        </StyledContainer>
    </StyledBannerSection>
    
  )
}

export default HomeBanner