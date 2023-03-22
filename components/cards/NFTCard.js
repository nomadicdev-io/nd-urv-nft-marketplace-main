import { StyledNFTCard, StyledNFTCardLink } from "@/styles/CardStyles"

const NFTCard = ({data}) => {
  return (
    <StyledNFTCard>
        <StyledNFTCardLink href={'/'} title={data.name}>
        
        </StyledNFTCardLink>
    </StyledNFTCard>
  )
}

export default NFTCard