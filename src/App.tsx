import React from 'react';
import './App.css';
import Home from "./pages/Home"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AllProducts from './pages/AllProducts';
import Categories from './pages/Categories';
import IndividualProduct from './pages/IndividualProduct';
import AppBar from "./components/Navbar/AppBar"
import SignupForm from "./components/SignupForm"
import Login from "./components/Login"
import Orders from "./pages/Orders"
import Cart from "./pages/Cart"



const App:React.FC = () => { 
  return (
    <div  >
      <div >
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
      </div>
    </div>
  );
}

export default App;
