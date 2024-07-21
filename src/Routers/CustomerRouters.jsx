import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import HomePage from '../customer/Pages/HomePage'
import Navigation from '../customer/components/Navigation/Navigation.jsx'
import Cart from '../customer/components/Cart/Cart.jsx'
import Footer from '../customer/components/Footer/Footer.jsx'
import Product from '../customer/components/Product/Product.jsx'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails.jsx'
import Checkout from '../customer/components/Checkout/Checkout.jsx'
import Order from '../customer/Order/Order.jsx'
import OrderDetails from '../customer/Order/OrderDetails.jsx'
function CustomerRouters() {
  return (
    <div>
        <div>
        <Navigation/>

        </div>
        <Routes>
        <Route path='/login' element={<HomePage/>}></Route>
        <Route path='/register' element={<HomePage/>}></Route>
         <Route path='/' element={<HomePage/>}></Route>
         <Route path='/cart' element={<Cart/>}></Route>
         <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
         <Route path='/product/:productId' element={<ProductDetails/>}></Route>
         <Route path='/checkout' element={<Checkout/>}></Route>
         <Route path='/account/order' element={<Order/>}></Route>
         <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
         


         
        </Routes>
        <div>
        <Footer/>
        </div>
    </div>
  )
}

export default CustomerRouters