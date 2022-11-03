
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

import {updateDoc} from "firebase/firestore";
import Button from "react-bootstrap/Button";
import {Modal} from "antd";



export function BikeInfoPage(props){
    const {id} = useParams();
    const {bikes} = props;

    const [bike, setBike] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        if(bikes){
            setBike(bikes.find(b=> id == b.id));
        }
    });




    return(
        <div>
            <h4>{bike.name}</h4>
            <Button onClick={updateList(bikes,setLoading,id)}>HIRE</Button>
            {isLoading?<div>Loading</div>:""}
        </div>
    )
}

export function updateList(list,setLoading, id){

    const updateBike = ()=> {
        setLoading(true);
        list.forEach(p => {
            if(p.id == id){
                setTimeout(()=>{
                    updateDoc(p.ref, {hired: true}).then(() =>{
                        success()
                    });
                },3000);
            }
        });
    }

    const success = () => {
        setLoading(false);
        Modal.success({
            content: 'HIRED SUCCESSFULLY',
        });
    };

    return updateBike;
}





