import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import Login from '../Pages/login';
import Contact from '../Pages/Contact';
import Signup from '../Pages/Signup';





const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

             
                <Route exact path="/" element={<Home></Home>} />
                <Route exact path="Login" element={<Login></Login>} />
                <Route exact path="Contact" element={<Contact></Contact>} />
                <Route exact path="Signup" element={<Signup></Signup>}/>
                

            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;