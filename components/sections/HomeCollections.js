import { StyledContainer, StyledContentWrapper } from "@/styles/CommonStyles"
import PageSection from "../PageSection"
import { SectionTItle } from "../SectionTItle"

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { ncp1, ncp2, ncp3, nde1, nde2, nde3, niv1, niv2, niv3, nrw1, nrw2, nrw3 } from "@/styles/constatns";
import CollectionCard from "../cards/CollectionCard";
import { PrimaryButtonLink } from "../Buttons";

import { FiArrowRight } from 'react-icons/fi';

const HomeColelctions = () => {

    const data = [
        {
            id: '01',
            name: 'Cyber Pharaohs',
            username: 'urbanvyali',
            isVerified: true,
            image: [ncp1, ncp2, ncp3],
            totalVolume: 68,
            likes: 245
        },
        {
            id: '02',
            name: 'DMT Entities',
            username: 'urbanvyali',
            isVerified: true,
            image: [nde1, nde2, nde3],
            totalVolume: 42,
            likes: 190
        },
        {
            id: '03',
            name: 'Gods of Indian Vedas',
            username: 'urbanvyali',
            isVerified: true,
            image: [niv1, niv2, niv3],
            totalVolume: 128,
            likes: 182
        },
        {
            id: '04',
            name: 'Rulers Of The World',
            username: 'urbanvyali',
            isVerified: true,
            image: [nrw1, nrw2, nrw3],
            totalVolume: 38,
            likes: 170
        },
     
    ]

  return (
    <PageSection>
        <StyledContainer>

            <SectionTItle title={'Trending Collections'} justify={'space-between'}>
                <PrimaryButtonLink grey={true} href={'/collections'} title={'View Collections'}>
                    <i><FiArrowRight /></i>
                </PrimaryButtonLink>
            </SectionTItle>

            <StyledContentWrapper>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        data.map((item)=> (
                            <SwiperSlide key={item.id}>
                              <CollectionCard data={item} />
                            </SwiperSlide>
                        ))
                    }
                  
                </Swiper>
            </StyledContentWrapper>

        </StyledContainer>
    </PageSection>
  )
}

export default HomeColelctions