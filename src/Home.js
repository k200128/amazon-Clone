import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
      <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
      </div>
      {/* Products id,title,price, rating,image */}
      <div className="home__row">
       <Product
       id ="1"
       title= "	The Lean Startup How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
       price={66.90}
       rating={4}
       image="https://play-lh.googleusercontent.com/VUJ-ENDVVS_8IhabKfewbXZ6f4_t0a4AbZZ2GURq55gTfZEWeBcxFkYQQ6sCQ-UWuI8adABab7SYQg=s200-rw" 
       />
       <Product
       id ="10"
       title= "All-new Echo Buds (2nd Gen) | Wireless earbuds with active noise cancellation and Alexa | Black"
       price={200}
       rating= {5}
       image="https://images-fe.ssl-images-amazon.com/images/G/35/kindle/journeys/ZDQzMTA3Mzct/ZDQzMTA3Mzct-MjgyZjkwZDQt-w186._SY116_CB649475778_.jpg" 
       />
</div>
<div className="home__row">
       <Product
       id ="20"
       title= "3M Linen Fabric 5 Seater Sofa Bed Modular Recliner Corner Futon Lounge Couch (Full Black)	"
       price={900}
       rating={3}
       image="https://m.media-amazon.com/images/I/81av1x6M-BL._AC_UY327_FMwebp_QL65_.jpg" 
       />
       <Product
       id ="30"
       title= "	Berserk Deluxe Volume 11 Hardcover  12 July 2022"
       price={55}
       rating={5}
       image="https://images-na.ssl-images-amazon.com/images/I/51Z-X5F5ZIL._SY344_BO1,204,203,200_QL70_ML2_.jpg" 
       />
        <Product
       id ="40"
       title= "	Echo Dot (3rd Gen)  Smart speaker with Alexa - Charcoal Fabric"
       price={66}
       rating={5}
       image="https://m.media-amazon.com/images/I/61MdyHSbxHL._AC_SX679_.jpg" 
       />
</div>
<div className="home__row">
       <Product
       id ="50"
       title= "	Ticwatch E3 Smart Watch Wear OS by Google for Men Women Qualcomm Snapdragon Wear 4100 Platform Health Monitor Fitness Tracker GPS NFC Mic Speaker IP68 Waterproof iOS/Android Compatible"
       price={250}
       rating={4}
       image="https://m.media-amazon.com/images/I/61p3TcCeRUS._AC_SX679_.jpg" 
       />
       </div>
    </div>
    
  )
}

export default Home