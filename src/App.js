import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Link, Route, Routes,useParams} from "react-router-dom";
import {BikePage} from "./pages/BikePage";
import React from "react";

import {Home} from "./pages/Home";
import {NavBar} from "./components/NavBar";
import {Contact} from "./pages/Contact";
import {Attractions} from "./pages/Attractions";

import {collection} from 'firebase/firestore';
import {firestoreDB} from "./services/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";

import {BikeInfoPage} from "./pages/BikeInfoPage";
import {BouncyHousePage} from "./pages/BouncyHousePage";
import {BouncyHouseInfoPage} from "./pages/BouncyHouseInfoPage";
import "./services/firestore"

const idConverter = {
    toFirestore: undefined,
    fromFirestore: function(snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id};
    }
}


function App() {
    const beerBikeRef = collection(firestoreDB,"BeerBikes").withConverter(idConverter);
    const [datab, loading, error] = useCollectionData(beerBikeRef);
    const bouncyHouseRef = collection(firestoreDB,"BouncyHouses").withConverter(idConverter);
    const[housesData] = useCollectionData(bouncyHouseRef);

    return (<HashRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="attractions/bikes/*" element={<BikePage bikes={datab}/>}/>
                <Route path="attractions/houses/*" element={<BouncyHousePage houses={housesData}/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="attractions" element={<Attractions bikes={datab} houses={housesData}/>}/>
                <Route path="/bikes/:id" element={<BikeInfoPage bikes={datab}/>}/>
                <Route path="/houses/:id" element={<BouncyHouseInfoPage houses={housesData}/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
