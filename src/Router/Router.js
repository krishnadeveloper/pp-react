import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";


import Home from "../Component/Home/Home";
import Contact from "../Component/Contact";
import Category from "../Component/Category";
import Product from "../Component/Product";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                
                <Route 
                    exact={true} 
                    path="/" 
                    component={Home}
                />
                <Route 
                    path="/contact" 
                    component={Contact} 
                />
                <Route 
                    path="/category" 
                    component={Category} 
                />
                <Route 
                    path="/product" 
                    component={Product} 
                />

            </Switch>
        </BrowserRouter>
    );
};

export default Router;
