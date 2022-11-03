
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

import {updateDoc} from "firebase/firestore";
import Button from "react-bootstrap/Button";



export function BikeInfoPage(props){
    const {id} = useParams();
    const {bikes} = props;

    const [bike, setBike] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
        setBike(bikes.find(b=> id == b.id));
    })

    const updateBike = ()=> {
        bikes.forEach(p => {
            if(p.id == id){
                setLoading(false);
                setTimeout(()=>{
                    updateDoc(p.ref, {hired: true}).then(() =>{
                        setLoading(true);
                    });
                },3000);
            }
        })
    }

    return(
        <div>
            <h4>{bike.name}</h4>
            <Button onClick={updateBike}>HIRE</Button>
            {isLoading?"":<div>Loading</div>}
        </div>
    )
}




