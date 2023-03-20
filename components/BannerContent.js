import { StyledBannerContent } from "@/styles/BannerStyled"
import Link from "next/link"
import { ButtonGroup, PrimaryButton, PrimaryButtonLink } from "./Buttons"

const BannerContent = () => {
  return (
    <StyledBannerContent>
        <h1>Discover and Collect the <strong>UrbanVyali</strong> Exclusive <strong>NFTs</strong> from our Store</h1>
        <p>Get started with the easiest and most secure platform to buy and trade digital ART and NFTs. Start exploring our exclusives.</p>
        <ButtonGroup paddingTop>
            <PrimaryButtonLink href={'/exclusives'} title={'Explore Now'} />
            <PrimaryButton title={'Connect to Wallet'} grey={true} />
        </ButtonGroup>
    </StyledBannerContent>
  )
}

export default BannerContent