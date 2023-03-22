import { StyledCollectionWrapper } from '@/styles/CardStyles'
import React from 'react'
import { MdVerified } from 'react-icons/md';
import { StyledCommonImageAbsolute } from '@/styles/CommonStyles';
import { FiArrowRight } from 'react-icons/fi';
import { FaEthereum, FaHeart } from 'react-icons/fa';
import { IconButton } from '../Buttons';

const CollectionCard = ({data}) => {
  return (
    <StyledCollectionWrapper href={'/'} title={data.name}>
        <div className='images_grid'>
            <div className='collection_image'>
                <StyledCommonImageAbsolute src={data.image[0]} alt={data.name} width={300} height={300}/>
            </div>
        </div>

        <div className='title_wrapper'>
            <div className='title_with_icon'>
                <div className='title_'>
                    <div className='name_'>{data.name}</div>
                    <div className='username_'>
                        <span>@{data.username}</span>
                        {
                         data.isVerified && <i><MdVerified /></i>
                        }
                    </div>
                </div>
            </div>

            <div className='fav_count'>
                <i><FaHeart /></i>
                <span>{data.likes}</span>
            </div>
        </div>

        <div className='price_info'>
            <div className="inner_">
                        
                <div className="price_data">
                    <div className="icon_">
                        <FaEthereum />
                    </div>
                    <div className="price_">
                        <span>Total Volume</span>
                        <strong>{data.totalVolume} ETH</strong>
                    </div>
                </div>

                <IconButton>
                    <FiArrowRight />
                </IconButton>
            </div>
        </div>

    </StyledCollectionWrapper>
  )
}

export default CollectionCard