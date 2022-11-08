import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Link, Route, Routes,useParams} from "react-router-dom";
import {BikePage} from "./pages/BikePage";
import React, {useEffect, useState} from "react";

import {Home} from "./pages/Home";
import {NavBar} from "./components/NavBar";
import {ContactPage} from "./pages/ContactPage";
import {AttractionsPage} from "./pages/AttractionsPage";

import {collection} from 'firebase/firestore';
import {firestoreDB} from "./services/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";

import {BikeInfoPage} from "./pages/BikeInfoPage";
import {BouncyHousePage} from "./pages/BouncyHousePage";
import {BouncyHouseInfoPage} from "./pages/BouncyHouseInfoPage";
import "./services/firestore"

export const firestoreConverter = {
    toFirestore: function(dataInApp) {
        const dataInDb = {};
        Object.entries(dataInApp).forEach(entry => {
            const [key, value] = entry;
            dataInDb[key] = value;
        });
        return dataInDb;
    },
    fromFirestore: function(snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id, ref: snapshot.ref};
    }
}

function App() {
    const beerBikeRef = collection(firestoreDB,"BeerBikes").withConverter(firestoreConverter);
    const [bikeData, loading, error] = useCollectionData(beerBikeRef);
    const bouncyHouseRef = collection(firestoreDB,"BouncyHouses").withConverter(firestoreConverter);
    const[housesData] = useCollectionData(bouncyHouseRef);
    const ratesRef = collection(firestoreDB,"Rates").withConverter(firestoreConverter);
    return (<HashRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="attractions/bikes/*" element={<BikePage bikes={bikeData}/>}/>
                <Route path="attractions/houses/*" element={<BouncyHousePage houses={housesData}/>}/>
                <Route path="contact" element={<ContactPage rates={ratesRef}/>}/>
                <Route path="attractions" element={<AttractionsPage bikes={bikeData} houses={housesData}/>}/>
                <Route path="/bikes/:id" element={<BikeInfoPage bikes={bikeData}/>}/>
                <Route path="/houses/:id" element={<BouncyHouseInfoPage houses={housesData}/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
