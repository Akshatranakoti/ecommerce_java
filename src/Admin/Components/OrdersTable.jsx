import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOrder, deleteOrder, deliverdOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action'
import { Menu, MenuItem } from '@mui/material'

import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Avatar, Button, Card, CardHeader, AvatarGroup } from '@mui/material'

function OrdersTable() {
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event,index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget

    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray=[...anchorEl];
    newAnchorElArray[index]=null

    setAnchorEl(newAnchorElArray);
  };
  const dispatch = useDispatch()
  const { adminOrder } = useSelector(store => store)
  useEffect(() => {
    dispatch(getOrders())
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered,adminOrder.deletedOrder])

  console.log("admin orders", adminOrder)

  const handleShippedOrder = (orderId) => {
    dispatch(shipOrder(orderId))
    console.log(" handle shipped order", orderId)
    handleClose()
  }
  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId))
    console.log("handle Confirmed order", orderId)
    handleClose()
  }
  const handleDeliverOrder = (orderId) => {
    dispatch(deliverdOrder(orderId))
    console.log("handle delivered order", orderId)
    handleClose()
  }
  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId))
    console.log("handle delete order", orderId)
    handleClose()
  }


  return (
    <div className='p-10'>
      <Card className='mt-2 ' >
        <CardHeader title='All Orders' />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">ID</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left"> Status</TableCell>

                <TableCell align="left"> Update</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder?.orders?.map((item,index) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                  <TableCell align="">
                    <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderItem) => <Avatar src={orderItem.product.imageUrl}></Avatar>)}
                    </AvatarGroup>

                  </TableCell>
                  <TableCell align='left' scope="row">
                    {item.orderItems.map((orderItem) => <p >{orderItem.product.title}</p>)}
                    {/* {item.title} */}
                  </TableCell>

                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left"> <span className={` text-black px-5 py-2 rounded-full 
                  ${item.orderStatus === "CONFIRMED" ? "bg-[green]"
                      : item.orderStatus === "SHIPPED" ? "bg-[blue]"
                        : item.orderStatus == "PENDING" ? "bg-[yellow]"
                          : item.orderStatus == "PLACED" ? "bg-[gray]"
                            : "bg-[red]"}`}>{item.orderStatus}</span></TableCell>

                  <TableCell align="left">
                    <Button onClick={(event)=>handleClick(event,index)}
                      id="basic-button"
                   
                      aria-haspopup="true"
                  
                      aria-controls={`basic-menu-${item.id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${item.id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={()=>handleClose(index)}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={() => handleConfirmedOrder(item.id)}>Confirmed Order</MenuItem>
                      <MenuItem onClick={() => handleShippedOrder(item.id)}>Shipped Order</MenuItem>
                      <MenuItem onClick={() => handleDeliverOrder(item.id)}>Delivered Order</MenuItem>
                    </Menu>
                  </TableCell>

                  <TableCell align="left">
                    <Button onClick={() => handleDeleteOrder(item.id)} variant='outlined'
                    
                      >Delete</Button>
                  </TableCell>


                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  )
}

export default OrdersTable