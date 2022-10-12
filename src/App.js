import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Link, Route, Routes,useParams} from "react-router-dom";
import {BikePage} from "./pages/BikePage";
import React from "react";

import {Home} from "./pages/Home";
import {NavBar} from "./components/NavBar";
import {Contact} from "./pages/Contact";
import {Attractions} from "./pages/Attractions";
import {BIER_FIETSEN, SPRINGKASTELEN} from "./data/data";

import {BikeInfoPage} from "./pages/BikeInfoPage";
import {BouncyHousePage} from "./pages/BouncyHousePage";
import {BouncyHouseInfoPage} from "./pages/BouncyHouseInfoPage";
import "./services/firestore"

function App() {
    return (<HashRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="attractions/bikes/*" element={<BikePage bikes={BIER_FIETSEN}/>}/>µ
                <Route path="attractions/houses/*" element={<BouncyHousePage houses={SPRINGKASTELEN}/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="attractions" element={<Attractions bikes={BIER_FIETSEN} houses={SPRINGKASTELEN}/>}/>
                <Route path="/bikes/:id" element={<BikeInfoPage bikes={BIER_FIETSEN}/>}/>
                <Route path="/houses/:id" element={<BouncyHouseInfoPage houses={SPRINGKASTELEN}/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
