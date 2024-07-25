import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import { Button } from '@mui/material'
import { Grid,Box,TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import {createOrder} from '../../../State/Order/Action'
import { useNavigate } from 'react-router-dom'

function DeliveryAdressForm() {
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
       
        const data =new FormData(e.currentTarget);
        const address={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            streetAddress:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zipCode:data.get("zip"),
            mobile:data.get("phoneNumber")


        }
        const orderData={address,navigate}
        dispatch(createOrder(orderData))
        console.log("address",address)

    }
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5 rem] overflow-y-scroll">

                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AdressCard />
                        <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='contained'>Deliver Here</Button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="firstName" name='firstName' label="first Name" fullWidth autoComplete='given-name'></TextField>
                                   
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="lastName"  name='lastName' label="last Name" fullWidth autoComplete='given-name'></TextField>
                                   
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField required id="address"  name='address' label="Address " fullWidth autoComplete='given-name' multiline rows={4}></TextField>
                                   
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="city"  name='city' label="City" fullWidth autoComplete='given-name'></TextField>
                                   
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="state"  name='state' label="State/Province/Region" fullWidth autoComplete='given-name'></TextField>
                                   
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="zip"  name='zip' label="Zip/Postal code" fullWidth autoComplete='shipping postal-code'></TextField>
                                   
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="phoneNumber"  name='phoneNumber' label="phoneNumber" fullWidth autoComplete='given-name'></TextField>
                                   
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <Button sx={{py:1.5, mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='contained' type='submit'>Deliver Here</Button>
                                   
                                </Grid>
                                
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAdressForm