import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import InspirationalQuotesList from "./InspirationalQuotesList";
import About from "./About";
import LiveCodingComponent from "./LiveCodingComponent";


const Router = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/InspirationalQuotes' element={<InspirationalQuotesList/>} />
            <Route exact path='/LiveCodingComponent' element={<LiveCodingComponent/>} />
        </Routes>
    );
};

export default Router;