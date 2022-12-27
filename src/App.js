import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import {BikePage} from "./pages/BikePage";
import React from "react";

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
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {ResetPage} from "./pages/ResetPasswordPage";
import {HirePage} from "./pages/HirePage";
import {LoadingProvider} from "./contexts/LoadingContext";
import {createContext, useContext, useMemo, useState} from "react";


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

const BikesContext = createContext();

export function BikesProvider(props) {
    const beerBikeRef = collection(firestoreDB,"BeerBikes").withConverter(firestoreConverter);
    const [bikeData] = useCollectionData(beerBikeRef);

    console.log({bikeData});

    const api = useMemo(() => ({
        bikeData
    }), [bikeData]);

    return <BikesContext.Provider value={api}>
        {props.children}
    </BikesContext.Provider>
}

export const useBikeContext = () => useContext(BikesContext);

function App() {
    const beerBikeRef = collection(firestoreDB,"BeerBikes").withConverter(firestoreConverter);
    const [bikeData] = useCollectionData(beerBikeRef);
    const bouncyHouseRef = collection(firestoreDB,"BouncyHouses").withConverter(firestoreConverter);
    const[housesData] = useCollectionData(bouncyHouseRef);
    const ratesRef = collection(firestoreDB,"Rates").withConverter(firestoreConverter);

    return (<div>
            <HashRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="attractions/bikes/*" element={<BikesProvider><BikePage bikes={bikeData}/></BikesProvider>}/>
                    <Route path="attractions/houses/*" element={<BouncyHousePage houses={housesData}/>}/>
                    <Route path="/houses/hire/:id" element={<LoadingProvider><HirePage list={housesData}/></LoadingProvider>}/>
                    <Route path="/bikes/hire/:id" element={<LoadingProvider><HirePage list={bikeData}/></LoadingProvider>}/>
                    <Route path="contact" element={<ContactPage rates={ratesRef}/>}/>
                    <Route path="attractions" element={<BikesProvider><AttractionsPage houses={housesData}/></BikesProvider>}/>
                    <Route path="/bikes/:id" element={<BikeInfoPage bikes={bikeData}/>}/>
                    <Route path="/houses/:id" element={<BouncyHouseInfoPage houses={housesData}/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="register" element={<RegisterPage/>}/>
                    <Route path="reset" element={<ResetPage/>}/>
                </Routes>
            </HashRouter>
    </div>
    );
}

export default App;
