import React from 'react'
import { Button, Grid, Typography, Link } from '@mui/material'


function Footer() {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10' container sx={{ bgcolor: "black", color: "white", py: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h-6'>Company</Typography>
                    <div><Button className='pb-5' variant='h-6' gutterBottom>About</Button></div>
                    <div><Button className='pb-5' variant='h-6' gutterBottom>Blog</Button></div>
                    <div><Button className='pb-5' variant='h-6' gutterBottom>press</Button> </div>
                    <div><Button className='pb-5' variant='h-6' gutterBottom>Jobs</Button></div>
                    <div> <Button className='pb-5' variant='h-6' gutterBottom>Partners</Button></div>



                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h-6'>Solutions{" "}</Typography>
                    <div><Button className='pb-5' variant='h-6' gutterBottom>{" "}Analytics{" "}</Button></div>
                    <div><Button className='pb-5' variant='h-6' gutterBottom>{" "}Commerce{" "}</Button></div>
                    <div><Button className='pb-5' variant='h-6' gutterBottom>{" "}insights{" "}</Button> </div>
                    <div><Button className='pb-5' variant='h-6' gutterBottom>{" "}support{" "}</Button></div>
                    <div> <Button className='pb-5' variant='h-6' gutterBottom>{" "}Marketing{" "}</Button></div>


                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h-6'>{" "}Documentation{" "}</Typography>
                    <div><Button className='pb-5' variant='h-6' gutterBottom>{" "} Guides{" "}</Button></div>
                    <div><Button className='pb-5' variant='h-6' gutterBottom>{" "} Api Status{" "}</Button></div>





                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h-6'>{" "} Legal{" "}</Typography>
                    <div><Button className='pb-5' variant='h-6' gutterBottom>{" "} Case{" "}</Button></div>
                    <div><Button className='pb-5' variant='h-6' gutterBottom>{" "} Privacy {" "}</Button></div>
                    <div><Button className='pb-5' variant='h-6' gutterBottom>{" "} Terms{" "}</Button> </div>




                </Grid>
                <Grid className='pt-20' item xs={12}>
                    <Typography variant='body2' component="p" align='center'>&copy; 2024 My Company. All rights reserved </Typography>
                    <Typography variant='body2' component="p" align='center'>Made with love by me </Typography>
                    <Typography variant='body2' component="p" align='center'>Icons made by {' '} </Typography>

                    <Typography variant='body2' component="p" align='center'><Link href="https://www.freepik.com" color="inherit" underline='always'>Freepik</Link>{' '}
                        from {' '}
                        <Link href="https://www.flaticon.com/" color="inherit" underline='always'>www.flaticon.com</Link>{' '}
                    </Typography>



                </Grid>

            </Grid></div>
    )
}

export default Footer