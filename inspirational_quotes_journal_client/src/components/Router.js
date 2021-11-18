import React from "react";
//switch allows us to navigate between different routes and it gives us a little bit of performance optimization by making sure that it finds exact route
//and that the first route matches where we're navigating to 
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import InspirationalQuotesList from "./InspirationalQuotesList";
import About from "./About";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/InspirationalQuotes' element={<InspirationalQuotesList/>} />
        </Routes>
    );
};

export default Router;