import { StyledBannerNFT } from "@/styles/BannerStyled";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative } from "swiper";

const BannerNFT = () => {
  return (
    <StyledBannerNFT>
        <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
            }}
            modules={[EffectCreative]}
            className="mySwiper"
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
    </StyledBannerNFT>
  )
}

export default BannerNFT