import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Carousel from 'react-bootstrap/Carousel'
// import './Slideshow.css'
import './Slideshow1.css'

const slideImages = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Coolie/launch/1500x600_Hero-Tall_ft._CB411102282_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Mi_G17/GW_Hero/KV_Refresh/Updated/D19646901_IN_WL_Mi_G71_Launch_DesktopTallHero_1500x600._CB412778460_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Samsung/FPF_DEC/GW_Rv4Family/D19594167_IN_WL_FPF_Samsung_MFamily_DesktopTallHero_1500x600._CB412285055_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Mi_G17/GW_Hero/Post_Launch/Sale_Tomrr/D19646901_IN_WL_Mi_G71_Launch_DesktopTallHero_1500x600_C1._CB411449546_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Wearables/OnePlus/Smart_Band/GW/D19895645_IN_PC_Wearables_OnePlus_Smart_band_1500x600._CB412937077_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Herotator/HeroPC_1500x600_HFC_3._CB413130503_.jpg",
];

const Slideshow = () => {
    return (
<div>
        <Slide easing="ease">
            {slideImages.map((img,i)=>{
                  return(
                    <div className="home__container">
                    <img className="home__image"
                    // src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Mi_G17/GW_Hero/KV_Refresh/Updated/D19646901_IN_WL_Mi_G71_Launch_DesktopTallHero_1500x600._CB412778460_.jpg"
                    src={img} 
                    alt ="Banner" />
                </div>
                  )
              })}

        </Slide>
      </div>
    )

};

export default Slideshow;