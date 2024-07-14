import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { mainCarouselData } from './MainCaroselData'

import 'react-alice-carousel/lib/alice-carousel.css';

const MainCrosel = () => {
const items = mainCarouselData.map((item)=><img className='cursor-pointer' role='presentation' 
src={item.image} alt=""/>)
  return (
    <AliceCarousel
        
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      
        
    />
  )
}

export default MainCrosel;