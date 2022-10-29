
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import { doc, updateDoc } from "firebase/firestore";
import {firestoreDB} from "../services/firestore";


export function BikeInfoPage(props){
    const {id} = useParams();
    const {bikes} = props;
    const [bike, setBike] = useState({});
    useEffect(()=>{
        setBike(bikes.find(b=> id == b.id));
    });
    const docRef = doc(firestoreDB, "BeerBikes",bike);
    return(
        <div>
            <h4>{bike.name}</h4>
            <p>//TODO FORM</p>
            <Button onClick={updateDoc(docRef,{hired:true})}></Button>
        </div>
    )
}