import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

export function BouncyHouseInfoPage(props){
    const {id} = useParams();
    const {houses} = props;
    const [house, setHouse] = useState({});
    useEffect(()=>{
        setHouse(houses.find(b=> id == b.id));
    })
    return(
        <div>
            <h4>{house.name}</h4>
        </div>
    )
}