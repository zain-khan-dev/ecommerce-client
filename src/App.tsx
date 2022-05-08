import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
import { purple } from '@mui/material/colors';
import { Container } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AllProducts from './pages/AllProducts';
import Categories from './pages/Categories';
import IndividualProduct from './pages/IndividualProduct';
import { Box } from '@mui/system';
import AppBar from "./components/Navbar/AppBar"
import SellerHome from "./pages/SellerHome"
import SignupForm from "./components/SignupForm"
import Login from "./components/Login"
import Orders from "./pages/Orders"
import Cart from "./pages/Cart"



const App:React.FC = () => { 
  return (
    <Box sx={{backgroundColor:"beige", height:"100vh"}} >
      <Container maxWidth="xl" >
        <Router>
          <AppBar />
          <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/allproducts" element={<AllProducts />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/register" element={<SignupForm />} />
              <Route path="/login" element={<Login />} />
              <Route path="/individual/:id" element={<IndividualProduct />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/login" element={<Login />} />
              <Route path="register" element={<SignupForm />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
      </Container>
    </Box>
  );
}

export default App;
