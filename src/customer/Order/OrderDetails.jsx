import React from 'react'
import AdressCard from '../components/AdressCard/AdressCard'
import OrderTracker from './OrderTracker'
import { Grid,Box } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

function OrderDetails() {
  return (
    <div className='px:5  lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7 '>Delivery Address</h1>
        <AdressCard/>
            
        </div>
        <div className='py-20'>
            <OrderTracker  activeStep={3}/>
        </div>
        <Grid className='space-y-5 ' container>
            {[1,1,1,1,1].map((item)=> <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center", justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex items-center space-x-4 '>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70" alt="" />
                    <div className='space-y-2 ml-5'>
                        <p className='font-semibold'>Mens slim Rise Kurta</p>
                        <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color: Yellow</span> <span>Size:M</span> </p>
                        <p>Seller: liria</p>
                        <p>$1099</p>
                    </div>
                </div>

            </Grid>
            <Grid item>
                <Box sx={{color:deepPurple[500]}}>
                    <StarBorderIcon  sx={{fontSize:"2rem"}} className='px-2 '/>
                    <span>Rate & Review Product</span>
                </Box>
            </Grid>
           

        </Grid>)}
       
        </Grid>
    </div>
  )
}

export default OrderDetails