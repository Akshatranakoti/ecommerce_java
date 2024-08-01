
import './App.css';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import HomePage from './customer/Pages/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product.jsx';
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx';
import Checkout from './customer/components/Checkout/Checkout.jsx';
import Order from './customer/Order/Order.jsx';
import OrderDetails from './customer/Order/OrderDetails.jsx';
import { Routes,Route } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters.jsx';
import AdminRouters from './Routers/AdminRouters.jsx';
function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
        <Route path='/admin/*' element={<AdminRouters/>}></Route>
      </Routes>
      
     
     
        
    </div>
  );
}

export default App;
