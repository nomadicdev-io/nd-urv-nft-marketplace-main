import { StyledCollectionWrapper } from '@/styles/CardStyles'
import React from 'react'
import { StyledCommonImageAbsolute } from '@/styles/CommonStyles';
import CardTitle from './CardTitle';
import FavCount from './FavCount';
import PriceInfo from './PriceInfo';

const CollectionCard = ({data}) => {
  return (
    <StyledCollectionWrapper href={'/'} title={data.name}>
        <div className='images_grid'>
            <div className='collection_image'>
                <StyledCommonImageAbsolute src={data.image[0]} alt={data.name} width={300} height={300}/>
            </div>
        </div>

        <div className='title_wrapper'>
            <CardTitle 
                name={data.name}
                username={data.username}
                isVerified={data.isVerified}
            />

            <FavCount likes={data.likes} />
        </div>

        <div className='price_info'>
           <PriceInfo 
            name={data.name}
            priceTitle={'Total Volume'}
            price={data.totalVolume}
           />
        </div>

    </StyledCollectionWrapper>
  )
}

export default CollectionCard