import React from 'react'
import MainCrosel from '../components/HomeCarosel/MainCrosel'
import HomeSectionCarosel from '../components/HomeSectionCarosel/HomeSectionCarosel';
import { mens_kurta } from '../../Data/mens_kurta';

const HomePage = () => {
  return (
    <div>
        <MainCrosel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-5'>
        <HomeSectionCarosel data = {mens_kurta}  sectionName={"Mens Kurta"}/>
        <HomeSectionCarosel data = {mens_kurta} sectionName={"Mens Shoes"} />
        <HomeSectionCarosel data = {mens_kurta} sectionName={"Mens Shirt"} />
        <HomeSectionCarosel data = {mens_kurta} sectionName={"Womens Saree"}/>
        <HomeSectionCarosel data = {mens_kurta} sectionName={"Womens Dress"} />
        
        
        </div>
    </div>
  )
}

export default HomePage;