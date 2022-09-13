import React from 'react';
// import '../../App.css';
import { Routes, Route } from 'react-router-dom';
import Products from '../components/Products';
import Home from '../pages/Home';
import Cart from './Cart';
import KidsSection from './KidsSection';
import Login from './Login';
import MenSection from './MenSection';
import Product from './Product';
import ProductList from './ProductList';
// import Product from './Product';
import Register from './Register';
import WomenSection from './WomenSection';
import './section.css';
// import Cart from '../pages/Cart';
// import Categories from '../components/Categories';

const Section = () => {
    return (
        <div className="section">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                {/* <Route path="/products" element={<Product />} /> */}
                <Route path="/register" element={<Register />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/men-collection" element={<MenSection />} />
                <Route path="/women-collection" element={<WomenSection />} />
                <Route path="/kids-collection" element={<KidsSection />} />
                {/* <Route path="/men-shoes" element={<Categories shoesType={"Men"} />}>
                    <Route path="/" element={<ShoesList shoesList={shoesList['men-shoes']} shoesType={"men-shoes"} />} />
                    <Route path=":id" element={<SelectedShoe shoesList={shoesList['men-shoes']} />} />
                </Route>
                <Route path="/women-shoes" element={<Shoes shoesType={"Women"} />}>
                    <Route path="/" element={<ShoesList shoesList={shoesList['women-shoes']} shoesType={"women-shoes"} />} />
                    <Route path=":id" element={<SelectedShoe shoesList={shoesList['women-shoes']} />} />
                </Route>
                <Route path="/kids-shoes" element={<Shoes shoesType={"Kids"} />}>
                    <Route path="/" element={<ShoesList shoesList={shoesList['kids-shoes']} shoesType={"kids-shoes"} />} />
                    <Route path=":id" element={<SelectedShoe shoesList={shoesList['kids-shoes']} />} />
                </Route>
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<h2>Page Not Found!</h2>} /> */}
            </Routes>
        </div>
    )
}

export default Section