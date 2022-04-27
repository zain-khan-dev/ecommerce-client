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
import SellerAppBar from './components/Navbar/SellerAppBar';

const App:React.FC = () => { 
  return (
    <Box sx={{backgroundColor:"beige", height:"100vh"}} >
      <Container maxWidth="xl" >
        <Router>
          <SellerAppBar />
          <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/allproducts" element={<AllProducts />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/individual/:id" element={<IndividualProduct />} />
              <Route path="/seller" element={<SellerHome />} />
            </Routes>
          </Router>
      </Container>
    </Box>
  );
}

export default App;
