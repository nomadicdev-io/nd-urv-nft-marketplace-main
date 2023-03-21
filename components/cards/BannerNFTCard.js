import { StyledBannerNFTAuthor, StyledBannerNFTCardWrapper, StyledBannerNFTTitle, StyledCardImage, StyledCardImageBox } from "@/styles/CardStyles"
import { FiArrowRight } from 'react-icons/fi';
import { FaEthereum, FaHeart } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { IconButton, IconButtonLink } from "../Buttons";

const BannerNFTCard = ({data}) => {
  return (
    <StyledBannerNFTCardWrapper>
        <StyledCardImageBox paddingTop={'135%'}>
            <StyledCardImage alt={data.name} src={data.image}/>
        </StyledCardImageBox>

        <StyledBannerNFTAuthor>
            <div className="title_">
                <p>{data.name}</p>
                <div className="author_">
                    <span>by {data.author}</span>
                    {
                        data.isVerified && <i><MdVerified /></i>
                    }
                </div>
            </div>

            <IconButton grey={true}>
                <FaHeart />
            </IconButton>
        </StyledBannerNFTAuthor>

        <StyledBannerNFTTitle>
            <div className="inner_">
                
                <div className="price_data">
                    <div className="icon_">
                        <FaEthereum />
                    </div>
                    <div className="price_">
                        <span>Current Price</span>
                        <strong>{data.price} ETH</strong>
                    </div>
                </div>

                <IconButtonLink href={'/'}>
                    <FiArrowRight />
                </IconButtonLink>
            </div>
        </StyledBannerNFTTitle>
    </StyledBannerNFTCardWrapper>
  )
}

export default BannerNFTCard