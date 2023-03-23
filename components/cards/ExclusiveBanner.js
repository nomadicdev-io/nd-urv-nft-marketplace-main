import { StyledExclusiveBanner } from "@/styles/CardStyles"
import { ButtonGroup, PrimaryButtonLink } from "../Buttons"
import { FiArrowUpRight } from "react-icons/fi"
import { StyledCommonImageAbsolute } from "@/styles/CommonStyles"
import { exbanner } from "@/styles/constatns"

const ExclusiveBanner = () => {
  return (
    <StyledExclusiveBanner>

        <div className="bg_">
            <StyledCommonImageAbsolute src={exbanner} width={1440} height={720} alt={'Exclusives'} />
        </div>

        <div className="content_">
            <h2>Checkout our exclusive Kurukshetra Collections. Magical <strong>NFTs</strong> from Mahabharata.</h2>

            <ButtonGroup marginTop={true}>
                <PrimaryButtonLink href={'/'} title={'Check Exclusives'}>
                    <FiArrowUpRight />
                </PrimaryButtonLink>
            </ButtonGroup>
        </div>
    </StyledExclusiveBanner>
  )
}

export default ExclusiveBanner