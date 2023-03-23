import { StyledSellerContent, StyledSellerProfileIcon, StyledSellersBanner, StyledSellersBannerImage, StyledSellersCardTop, StyledSellersCardWrapper } from "@/styles/CardStyles"
import { StyledCommonImageAbsolute } from "@/styles/CommonStyles"
import { MdVerified } from 'react-icons/md';

const BestSellerCard = ({data}) => {
  return (
    <StyledSellersCardWrapper href={'/'} title={data.name}>

      <StyledSellersCardTop>
        <StyledSellersBanner>
          <StyledSellersBannerImage src={data.banner} alt={data.name} width={320} height={180}/>
        </StyledSellersBanner>

        <StyledSellerProfileIcon>
          <div className="icon_">
            <StyledCommonImageAbsolute alt={data.name} src={data.image} width={100} height={100}/>
          </div>
        </StyledSellerProfileIcon>

      </StyledSellersCardTop>

      <StyledSellerContent>
        <div className="seller_name">{data.name}</div>
        <div className="seller_username">
          <span>@{data.username}</span>
          {
            data.isVerified && <i><MdVerified /></i>
          }
        </div>
        <div className="volume_">
          <span>Volume</span>
          <strong>{data.totalValue} ETH</strong>
        </div>
      </StyledSellerContent>

    </StyledSellersCardWrapper>
  )
}

export default BestSellerCard