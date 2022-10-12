
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

export function BikeInfoPage(props){
    const {id} = useParams();
    const {bikes} = props;
    const [bike, setBike] = useState({});
    useEffect(()=>{
        setBike(bikes.find(b=> id == b.id));
    })
    return(
        <div>
            <h4>{bike.name}</h4>
            <p>//TODO FORM</p>
        </div>
    )
}