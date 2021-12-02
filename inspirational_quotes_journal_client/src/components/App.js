import React from 'react';
import Router from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './NavbarComp';
import '../App.css'

const App = () => {
    return (
        <div className="App">
            <NavbarComp />
                <div className="container">
                    <Router />
                </div>
        </div>
    );
};

export default App;