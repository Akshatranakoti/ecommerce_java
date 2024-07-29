import { ListItemText, useTheme } from '@mui/material'

import { ListItem, Toolbar, useMediaQuery, ListItemIcon, ListItemButton, List, Drawer, CssBaseline } from '@mui/material';
import { border, Box } from '@mui/system';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashBoard from './AdminDashBoard';
import CreateProductForm from './CreateProductForm';
import ProductsTable from './ProductsTable';
import OrdersTable from './OrdersTable';
import CustomersTable from './CustomersTable';
import AdminDashBoard from './AdminDashBoard';

const menu = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon></DashboardIcon> },
    { name: "Prducts", path: "/admin/products", icon: <CategoryIcon></CategoryIcon> },
    { name: "Customers", path: "/admin/customers", icon: <SupportAgentIcon></SupportAgentIcon> },
    { name: "Orders", path: "/admin/orders", icon: <LocalMallIcon></LocalMallIcon> },
    { name: "AddProduct", path: "/admin/product/create", icon: <AddShoppingCartIcon></AddShoppingCartIcon> },
    // {name:"", path:""},
]


function Admin() {
    const theme = useTheme();
    const islargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState();
    const navigate = useNavigate();
    const drawer = (
        <Box sx={{ overflow: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>

            {/* {islargeScreen && <Toolbar/>} */}
            <List>
                {menu.map((item, index) => <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                    <ListItemButton>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText>{item.name}</ListItemText>
                    </ListItemButton>
                </ListItem>)}
            </List>

            <List>
                <ListItem disablePadding >
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />

                        </ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    return (


        <div className=' relative flex h-[100vh]  '>

            <CssBaseline >
                <div className=' shadow-lg shadow-gray-600 w-[15%] border border-r-gray-300 h-full fixed top-0  ' >
                    {drawer}
                </div>
                <div className='w-[85%] h-full ml-[15%] '>
                    <Routes>
                        <Route path="/" element={<AdminDashBoard></AdminDashBoard>}></Route>
                        <Route path="/product/create" element={<CreateProductForm></CreateProductForm>}></Route>
                        <Route path="/products" element={<ProductsTable></ProductsTable>}></Route>
                        <Route path="/orders" element={<OrdersTable></OrdersTable>}></Route>
                        <Route path="/customers" element={<CustomersTable></CustomersTable>}></Route>
                    </Routes>
                </div>
            </CssBaseline>
        </div>

    )
}

export default Admin