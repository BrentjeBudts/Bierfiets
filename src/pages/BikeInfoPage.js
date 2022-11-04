
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {Spin} from "antd";
import {updateList} from "../utilities/updateList";
import {Card, CardGroup, Container} from "react-bootstrap";
import {InfoCardGroup} from "../components/InfoCardGroup";



export function BikeInfoPage(props){
    const {id} = useParams();
    const {bikes} = props;

    const [bike, setBike] = useState({});
    const [isLoading, setLoading] = useState(false);


    useEffect(()=>{
        if(bikes){
            setBike(bikes.find(b=> id == b.id));
        }
    });

    return(
        <Container>
            <InfoCardGroup img={bike.img} title={bike.name}>
                <Button onClick={updateList(bikes,setLoading,id)}>HIRE</Button>
                {isLoading?<Spin name="ball-clip-rotate-multiple" color="blue"/> :""}
            </InfoCardGroup>
        </Container>
    )
}








