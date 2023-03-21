import { StyledBannerNFT } from "@/styles/BannerStyled";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { Autoplay, EffectCreative } from "swiper";

//Images
import img1 from "@/public/exc-nft-01.jpg";
import img2 from "@/public/exc-nft-02.jpg";
import img3 from "@/public/exc-nft-03.jpg";
import authorImage from "@/public/apple-icon.png"
import BannerNFTCard from "./cards/BannerNFTCard";

const BannerNFT = () => {

    const data = [
        {
            id: '01',
            name: 'Levitating Moopan',
            image: img1,
            price: 2.525,
            author: 'UrbanVyali',
            isVerified: true,
            authorImage: authorImage
        },
        {
            id: '02',
            name: 'Ape Monk Meditating',
            image: img2,
            price: 1.986,
            author: 'UrbanVyali',
            isVerified: true,
            authorImage: authorImage
        },
        {
            id: '03',
            name: 'Lord Buddha divine form',
            image: img3,
            price: 2.901,
            author: 'UrbanVyali',
            isVerified: true,
            authorImage: authorImage
        },
    ]

  return (
    <StyledBannerNFT>
        <Swiper
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
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
            modules={[EffectCreative, Autoplay]}
            className="mySwiper"
        >

            {
                data.map((item, index)=> (
                    <SwiperSlide key={index}>
                        <BannerNFTCard data={item}/>
                    </SwiperSlide>
                )
                )
            }
            
        </Swiper>
    </StyledBannerNFT>
  )
}

export default BannerNFT