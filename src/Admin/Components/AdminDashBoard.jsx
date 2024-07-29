import React from 'react'
import { Grid } from '@mui/material'
import Achievements from './Achievements'
import MonthlyOverview from './MonthlyOverview'
import ProductsTable from './ProductsTable'
import OrderTableView from '../view/OrderTableView'
import ProductTableView from '../view/ProductTableView'
function AdminDashBoard() {
  return (
    <div className='p-10'>
   <Grid container spacing={2}>
    <Grid   item xs={12} md={4}>
      <div className='shadow-lg shadow-gray-600' >  <Achievements/></div>
     
    </Grid>
    <Grid   item xs={12} md={8}>
      <div className='shadow-lg shadow-gray-600'> <MonthlyOverview/></div>
     
    
    </Grid>
    <Grid  item xs={12} md={6}>
      <div className='shadow-lg shadow-gray-600'><OrderTableView/></div>
     
    </Grid>

    <Grid  item xs={12} md={6}>
      <div className='shadow-lg shadow-gray-600'><ProductTableView/></div>
     
    </Grid>

   </Grid>
    </div>
  )
}

export default AdminDashBoard