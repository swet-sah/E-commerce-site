import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import Layout from './components/Layout';
import About from './components/About';
import Contact from './components/Contact';
import Loginpage from './pages/loginPage/Loginpage';
import Home from './pages/homepage/Home';
import Singlepage from './pages/singlePage/Singlepage';
import Product from './pages/Products/Product';
import Error from './pages/Error';
import Cartpage from './pages/Cart/Cartpage';
import AddtoCart from './pages/Cart/AddtoCart';
import Compare from './pages/Compare';
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route path='mycart' element={<Cartpage/>}/>
                        <Route path='login' element={<Loginpage />} />
                        <Route path='about' element={<About />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='our-store' element={<Product />} />
                        <Route path='/singleproduct/:id' element={<Singlepage />} />
                        <Route index element={<Home />} />
                    </Route>
                    <Route path='compare-product' element={<Compare />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
