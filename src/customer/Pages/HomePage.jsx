import React from 'react'
import MainCrosel from '../components/HomeCarosel/MainCrosel'
import HomeSectionCarosel from '../components/HomeSectionCarosel/HomeSectionCarosel';
import { mens_kurta } from '../../Data/mens_kurta';
import { womens_dresses } from '../../Data/womens_dresses';
import { mens_jeans } from '../../Data/mens_jeans';
import { womens_saree } from '../../Data/womens_saree';


const HomePage = () => {
  return (
    <div>
        <MainCrosel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-5'>
        <HomeSectionCarosel data = {mens_kurta}  sectionName={"Mens Kurta"}/>
        <HomeSectionCarosel data = {mens_jeans} sectionName={"Mens Jeans"} />
        <HomeSectionCarosel data = {mens_kurta} sectionName={"Mens Shirt"} />
        <HomeSectionCarosel data = {womens_saree} sectionName={"Womens Saree"}/>
        <HomeSectionCarosel data = {womens_dresses} sectionName={"Womens Dress"} />
        
        
        </div>
    </div>
  )
}

export default HomePage;