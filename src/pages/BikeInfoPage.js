
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {firestoreDB} from "../services/firestore";
import {collection, doc, updateDoc, query, where, getDocs} from "firebase/firestore";
import Button from "react-bootstrap/Button";
import {useCollectionData} from "react-firebase-hooks/firestore";


export async function BikeInfoPage(props) {
    const {id} = useParams();
    const {bikes} = props;
    const [bike, setBike] = useState({});
    const collectionRef = collection(firestoreDB, "BeerBikes").withConverter(firestoreConverter);
    const queryRef = query(collectionRef, where("id", "==", id));
    const value = await getDocs(queryRef);

    console.log(value);

    return (
        <div>
            <h4>{bike.name}</h4>
            <p>//TODO FORM</p>
            <Button>HIRE</Button>
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
