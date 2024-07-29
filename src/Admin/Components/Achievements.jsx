import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'

const TriangleImg = styled("img")({
    right: 0,
    bottom: 0,
    height: 170,
    position: "absolute"
});

const TrophyImg = styled("img")({
    right: 36,
    bottom: 20,
    height: 98,
    position: 'absolute'
});

function Achievements() {
    return (
        <Card className='' sx={{ position: "relative", backgroundColor: "#242B2E", color: "white" }}>
            <CardContent>
                <Typography variant='h6' sx={{ letterSpacing: ".25px" }}>Shop with Akshat</Typography>
                <Typography variant='body2'>Congratulations  🥳</Typography>
                <Typography variant='h5' sx={{ my: 3.1 }}>420.8k</Typography>
                <Button size='small' variant='contained'>View Sales</Button>
                <TriangleImg className='h-full w-[50%]' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAA1BMVEUkKy4ymCNAAAAALElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgZViQAAd2fpbUAAAAASUVORK5CYII=' />
                <TrophyImg src='https://img.freepik.com/free-vector/winner-background-first-place-competition_91128-1582.jpg?size=626&ext=jpg&ga=GA1.1.1652102865.1722188395&semt=sph' />
            </CardContent>
        </Card>
    )
}

export default Achievements
