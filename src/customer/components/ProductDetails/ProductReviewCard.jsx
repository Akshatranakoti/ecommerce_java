import React from 'react'
import { Avatar,Grid ,Box,Rating} from '@mui/material'

function ProductReviewCard() {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white ' sx={{width:56, height:56, bgcolor:"#9155fd"}}>
                     R
                    </Avatar>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p>Ram</p>
                        <p>April 5,2024</p>
                    </div>
                </div>
                <Rating value={4.5} name='half-rating'/>
                <p>
                nice product,Really liked it!
                </p>

            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard