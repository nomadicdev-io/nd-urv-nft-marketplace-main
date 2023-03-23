import { StyledNFTCard, StyledNFTCardLink } from "@/styles/CardStyles"
import { StyledCommonImageAbsolute, StyledFlexWrapper } from "@/styles/CommonStyles"
import { FiArrowUpRight } from "react-icons/fi"
import { IconButton } from "../Buttons"
import CardTitle from "./CardTitle"
import { PriceInfoSimple } from "./PriceInfo"

const NFTCard = ({data}) => {
  return (
    <StyledNFTCard>
        <StyledNFTCardLink href={'/'} title={data.name}>
            <div className="image_">
              <StyledCommonImageAbsolute src={data.image} alt={data.name} width={250} height={250}/>
            </div>

            <div className="content_">
              <CardTitle 
                name={data.name}
                username={data.username}
                isVerified={data.isVerified}
              />

              <StyledFlexWrapper haveMargin={true}>
                <PriceInfoSimple price={data.price} priceTitle={'Current Price'} />
                <IconButton grey={true}>
                  <FiArrowUpRight />
                </IconButton>
              </StyledFlexWrapper>

            </div>

        </StyledNFTCardLink>
    </StyledNFTCard>
  )
}

export default NFTCard