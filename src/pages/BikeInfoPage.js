
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {firestoreDB} from "../services/firestore";
import {collection, doc, updateDoc} from "firebase/firestore";
import Button from "react-bootstrap/Button";
import {useCollectionData} from "react-firebase-hooks/firestore";


export function BikeInfoPage(props){
    const {id} = useParams();
    const {bikes} = props;

    const [bike, setBike] = useState({});
    useEffect(()=>{
        setBike(bikes.find(b=> id == b.id));
    })

    const updateBike = ()=> {
        bikes.forEach(p => {
            if(p.id == id) updateDoc(p.ref, { hired : true});
        })
    }

    return(
        <div>
            <h4>{bike.name}</h4>
            <p>//TODO FORM</p>
            <Button onClick={updateBike}>HIRE</Button>
        </div>
    )
}




