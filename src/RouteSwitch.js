import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Lost from './components/Lost'
import Won from "./components/Won";
import Home from "./components/Home";

const RouteSwitch = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/prep" element={<App />}/>
                <Route path = "/won" element={<Won />} />
                <Route path = "/lost" element={<Lost />} />
                <Route path = "/" element={<Home />} />

            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;