// import Product from "./pages/Product";
import React from 'react';
// import Home from "./pages/Home";
import { BrowserRouter as Router } from 'react-router-dom';
// import ProductList from './pages/ProductList';
import Section from './pages/Section';
import './App.css';
// import ProductList from "./pages/ProductList";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <Router>
        <Section/>
      </Router>
      {/* <Router>
        <Product/>
      </Router>
      <Router>
        <ProductList/>
      </Router> */}
      {/* <Router>
        <Product />
      </Router>
      <Router>
        <ProductList />
      </Router> */}
    </div>
  )
};

export default App;
