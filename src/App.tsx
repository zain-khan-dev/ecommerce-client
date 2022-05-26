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
import SignupForm from "./components/SignupForm"
import Orders from "./pages/Orders"
import Cart from "./pages/Cart"
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import CategoryType from './pages/CategoryType';
import Comments from "./components/Comments"


const App:React.FC = () => { 
  return (
    <div className="mx-auto md:w-3/4 bg-blue-200">
      <Router>
        <Navbar />
        <div className="border-2 border-yellow-600 mt-2 mb-2" />
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/category/:type" element={<CategoryType />} />
            <Route path="/category" element={<Categories />} />
            <Route path="/register" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/individual/:id" element={<IndividualProduct />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="register" element={<SignupForm />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<IndividualProduct />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
