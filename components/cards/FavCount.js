import { StyledFavCount } from "@/styles/CardStyles"
import { FaHeart } from 'react-icons/fa';

const FavCount = ({likes}) => {
  return (
    <StyledFavCount>
        <i><FaHeart /></i>
        <span>{likes}</span>
    </StyledFavCount>
  )
}

export default FavCount