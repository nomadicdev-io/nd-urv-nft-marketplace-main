import { StyledContainer, StyledContentWrapper } from "@/styles/CommonStyles"
import PageSection from "../PageSection"
import { SectionTItle } from "../SectionTItle"

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { u1, u2, u3, u4, u5, u6, ub1, ub2, ub3, ub4, ub5, ub6  } from "@/styles/constatns";
import BestSellerCard from "../cards/BestSellerCard";


const HomeBestSellers = () => {

    const data = [
        {
            id: '01',
            name: 'Lost Sailor',
            username: 'lostsailor',
            isVerified: true,
            image: u1,
            banner: ub1,
            totalValue: 12.890
        },
        {
            id: '02',
            name: 'Nomadic Dev',
            username: 'nomadicdev',
            isVerified: true,
            image: u2,
            banner: ub2,
            totalValue: 12.568
        },
        {
            id: '03',
            name: 'Yippe Irshad',
            username: 'yippeirshad',
            isVerified: true,
            image: u3,
            banner: ub3,
            totalValue: 11.980
        },
        {
            id: '04',
            name: 'John Twenty',
            username: 'twentyjohn',
            isVerified: true,
            image: u4,
            banner: ub4,
            totalValue: 11.654
        },
        {
            id: '05',
            name: 'Anish Valsan',
            username: 'valsananish',
            isVerified: true,
            image: u5,
            banner: ub5,
            totalValue: 11.254
        },
        {
            id: '06',
            name: 'NV Designs',
            username: 'nvdesigns',
            isVerified: true,
            image: u6,
            banner: ub6,
            totalValue: 10.821
        },
    ]

  return (
    <PageSection>
        <StyledContainer>

            <SectionTItle title={'Best Sellers'} justify={'space-between'}/>

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
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        data.map((item)=> (
                            <SwiperSlide key={item.id}>
                                <BestSellerCard data={item} />
                            </SwiperSlide>
                        ))
                    }
                  
                </Swiper>
            </StyledContentWrapper>

        </StyledContainer>
    </PageSection>
  )
}

export default HomeBestSellers