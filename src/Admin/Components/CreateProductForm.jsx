import React from 'react'
import { useState } from 'react'
import { Typography } from '@mui/material'
import { Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { createProduct } from '../../State/Product/Action'


const initialSizes = [
    { name: "S", quantity: 0 },
    { name: "M", quantity: 0 },
    { name: "L", quantity: 0 },

]

function CreateProductForm() {
    const [productData, setProductData] = useState({
        imageUrl: "",
        brand: "",
        title: "",
        color: "",
        discountedPrice: "",
        price:"",
        discountPersent:"",
        size: initialSizes,
        quantity: "",
        topLevelCategory: "",
        secondLevelCategory: "",
        thirdLevelCategory: "",
        description: "",
    });
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevState) => ({
             ...prevState, 
             [name]: value
             }));
    }
    const handleSizeChange = (e, index) => {
        let { name, value } = e.target;
        name === "size_quantity" ? name = "quantity" : name = e.target.name;
        const sizes = [...productData.size];
        sizes[index][name] = value;
        setProductData((prevState) => ({
            ...prevState,
            size: sizes,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(productData))
        console.log(productData)

    }
    return (

        <div className='p-10' >
            <Typography variant='h3' sx={{ textAlign: "center" }} className='py-10 text-center'>Add New Product</Typography>
            <form onSubmit={handleSubmit} className=' min-h-screen '>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Image Url" name='imageUrl' value={productData.imageUrl} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Brand" name='brand' value={productData.brand} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Title" name='title' value={productData.title} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Color" name='color' value={productData.color} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Quantity" name='quantity' value={productData.quantity} onChange={handleChange} type='number' />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <TextField fullWidth label="Price" name='price' value={productData.price} onChange={handleChange} type='number' />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <TextField fullWidth label="Discounted Price" name='discountedPrice' value={productData.discountedPrice} onChange={handleChange} type='number' />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <TextField fullWidth label="Discount Percentage" name='discountPersent' value={productData.discountPersent} onChange={handleChange} type='number' />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Top Level Category</InputLabel>
                            <Select name="topLevelCategory" value={productData.topLevelCategory} onChange={handleChange} label='Top Level Category'>
                                <MenuItem value="men">Men</MenuItem>
                                <MenuItem value="women">Women</MenuItem>
                                <MenuItem value="kids">Kids</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Second Level Category</InputLabel>
                            <Select name="secondLevelCategory" value={productData.secondLevelCategory} onChange={handleChange} label='Second Level Category'>
                                <MenuItem value="clothing">Clothing</MenuItem>
                                <MenuItem value="accessories">Accessories</MenuItem>
                                <MenuItem value="brands">Brands</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Third Level Category</InputLabel>
                            <Select name="thirdLevelCategory" value={productData.thirdLevelCategory} onChange={handleChange} label='Third Level Category'>
                                <MenuItem value="top">Tops</MenuItem>
                                <MenuItem value="dresses">Dresses</MenuItem>
                                <MenuItem value="t-shirts">T-shirts</MenuItem>
                                <MenuItem value="lengha_choli">Lengha Choli</MenuItem>
                                <MenuItem value="mens_kurta">Mens Kurta</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} >
                        <TextField id='outlined-multiline-static' multiline fullWidth label="Description" name='description' rows={3} value={productData.description} onChange={handleChange}  />
                    </Grid>
                    {productData.size.map((size,index)=>(
                        <Grid container item spacing={3}>
                            <Grid item xs={12} sm={6}>
                            <TextField   fullWidth label="Size Name" name="name" rows={3} value={size.name} onChange={(event)=>handleSizeChange(event,index)} required   />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField   fullWidth label="Quantity" name='size_quantity' rows={3}  onChange={(event)=>handleSizeChange(event,index)} type='number' required   />

                            </Grid>
                
                        </Grid>
                    ))}
                    <Grid item sx={12}>
                        <Button variant='contained' sx={{p:1.8}} className='py-20' size='large' type='submit'>Add New Product</Button>
                    </Grid>
                

                </Grid>
            </form>
        </div>
    )
}

export default CreateProductForm