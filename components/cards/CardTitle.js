import { StyledUserTitle } from "@/styles/CardStyles"
import { StyledCommonImageAbsolute } from "@/styles/CommonStyles"
import { MdVerified } from 'react-icons/md';

const CardTitle = ({icon, name, username, isVerified}) => {
  return (
    <StyledUserTitle>
        {
            icon && 
            <div className="icon_">
                <StyledCommonImageAbsolute src={icon} alt={name} width={100} height={100}/>
            </div>
        }
        <div className="title_">
            <div className="name_">{name}</div>
            <div className='username_'>
                <span>@{username}</span>
                {
                    isVerified && <i><MdVerified /></i>
                }
            </div>
        </div>
    </StyledUserTitle>
  )
}


export default CardTitle