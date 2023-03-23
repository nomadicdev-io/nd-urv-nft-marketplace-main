import { StyledPriceInfo, StyledPriceInfoSimple } from "@/styles/CardStyles"
import { FaEthereum} from 'react-icons/fa';
import { IconButton, IconButtonLink } from '../Buttons';
import { FiArrowRight } from 'react-icons/fi';

const PriceInfo = ({price, priceTitle, isLink}) => {
  return (
    <StyledPriceInfo>
        <div className="price_data">
            <div className="icon_">
                <FaEthereum />
            </div>
            <div className="price_">
                <span>{priceTitle}</span>
                <strong>{price} ETH</strong>
            </div>
        </div>

        {
            isLink ? 
            <IconButtonLink href={isLink} title={'Details'}>
                <FiArrowRight />
            </IconButtonLink>
            :
            <IconButton>
                <FiArrowRight />
            </IconButton>
        }

        
    </StyledPriceInfo>
  )
}

export const PriceInfoSimple = ({price, priceTitle})=> {
    return (
        <StyledPriceInfoSimple>
            <div className="price_">
                <span>{priceTitle}</span>
                <strong>{price} ETH</strong>
            </div>
        </StyledPriceInfoSimple>
    )
}


export default PriceInfo