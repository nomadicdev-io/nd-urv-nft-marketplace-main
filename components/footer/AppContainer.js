import { StyledContainer } from "@/styles/CommonStyles"
import { StyledFooterApp, StyledFooterAppBg, StyledFooterAppContent } from "@/styles/FooterStyles"
import PageSection from "../PageSection"
import bgImage from "@/public/bg.png"
import Image from "next/image"
import iosicon from "@/public/app-icon-01.svg"
import androidicon from "@/public/app-icon-02.svg"

const AppContainer = () => {
  return (
    <PageSection>
        <StyledContainer>
            <StyledFooterApp>
                <StyledFooterAppBg>
                    <Image src={bgImage} alt={'URV'} />
                </StyledFooterAppBg>

                <StyledFooterAppContent>
                    <h2>Experience the platform on your mobile phones. <br/> <span>Download</span> the app now.</h2>
                    <ul>
                        <li>
                            <Image src={iosicon} alt={'Download iOS'} />
                        </li>
                        <li>
                            <Image src={androidicon} alt={'Download iOS'} />
                        </li>
                    </ul>
                </StyledFooterAppContent>
            </StyledFooterApp>
        </StyledContainer>
    </PageSection>
  )
}

export default AppContainer