import React from 'react';
import './App.css';
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import CustomersList from './components/CustomersList';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import NavBar from './components/NavBar';
import NoMatchPage from './components/NoMatchPage';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <NavBar />
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<CustomersList/>} />
        <Route path="/cart" element ={<ShoppingCart />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
