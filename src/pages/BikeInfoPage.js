
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {firestoreDB} from "../services/firestore";
import { doc, updateDoc } from "firebase/firestore";
import Button from "react-bootstrap/Button";


export function BikeInfoPage(props){
    const {id} = useParams();
    const {bikes} = props;
    const [bike, setBike] = useState({});
    useEffect(()=>{
        setBike(bikes.find(b=> id == b.id));
    })

    const updateBike =() =>{

        updateDoc(bikes, bike).then(r => 0);
    }

    return(
        <div>
            <h4>{bike.name}</h4>
            <p>//TODO FORM</p>
            <Button onClick={updateBike}>HIRE</Button>
        </div>
    )
}



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
