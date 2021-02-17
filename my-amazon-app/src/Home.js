import React from 'react'
import './Home.css'
import Product from "./Product"
import Slideshow from './Slideshow'



function Home() {
    const slideImages = [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Mi_G17/GW_Hero/KV_Refresh/Updated/D19646901_IN_WL_Mi_G71_Launch_DesktopTallHero_1500x600._CB412778460_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Samsung/FPF_DEC/GW_Rv4Family/D19594167_IN_WL_FPF_Samsung_MFamily_DesktopTallHero_1500x600._CB412285055_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Mi_G17/GW_Hero/Post_Launch/Sale_Tomrr/D19646901_IN_WL_Mi_G71_Launch_DesktopTallHero_1500x600_C1._CB411449546_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Wearables/OnePlus/Smart_Band/GW/D19895645_IN_PC_Wearables_OnePlus_Smart_band_1500x600._CB412937077_.jpg",
    ];
    return (
        <div className="home">
            
            <Slideshow/>
            <div className="home__row">
                <Product id = "1" title="Logitech C270 HD Webcam, HD 720p/30fps, Widescreen HD Video Calling, HD Light Correction, Noise-Reducing Mic, for Skype, FaceTime, Hangouts, WebEx, PC/Mac/Laptop/MacBook/Tablet - Black"
                image="https://images-na.ssl-images-amazon.com/images/I/61yo4swj-PL._SL1500_.jpg"
                price={199}
                rating={4}/>
                <Product id = "2" title="Healthgenie 3911M 2.5 HP Peak Motorized Treadmill for Home Use & Fitness Enthusiast (Free Installation Assistance)"
                image="https://m.media-amazon.com/images/I/61yn0q1YVCL._AC_UL320_.jpg"
                price={100}
                rating={4}/>
                <Product id = "3" title="Just launched | realme smart cam 360°"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Camera/RealMe/R03/758x608_pc_cc._SY304_CB413493385_.jpg"
                price={99}
                rating={4}/>
                <Product id = "4" title="Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black"
                image="https://m.media-amazon.com/images/I/31N2n4tGvGL._AC_SY200_.jpg"
                price={89}
                rating={4}/>
                
            </div>
            <div className="home__row">
            <Product id = "3"title="Mi Smart Band 5-1.1” AMOLED Color Display, 2 Weeks Battery Life, 5ATM Water Resistant"
                image="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg"
                price={990}
                rating={4}/>
            <Product id = "4" title="Home Centre New Napster Half Leather Sofa 1 Seater - Single Seat - Beige"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_4._SY116_CB414480869_.jpg"
                price={199}
                rating={4}/>
            <Product id = "4"title="Redmi Note 9 Pro Max (Aurora Blue, 6GB RAM, 64GB Storage)- 64MP Quad Camera & Latest 8nm Snapdragon 720G & Alexa Hands-Free | Upto 12 Months No Cost EMI"
                image="https://images-na.ssl-images-amazon.com/images/I/81DvimWN5xL._SL1500_.jpg"
                price={299}
                rating={4}/>

            </div>
            <div className="home__row">
            <Product id = "5"title="HP Pavilion Gaming DK0268TX 15.6-inch Laptop (Core i5-9300H/8GB/512GB SSD/Windows 10"
                image="https://m.media-amazon.com/images/I/51wwWM-rhLL.__AC_SY200_.jpg"
                price={399}
                rating={4}/>

            </div>
        </div>
        
    )
}

export default Home
