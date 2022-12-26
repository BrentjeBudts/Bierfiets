
import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {InfoCardGroup} from "../components/InfoCardGroup";

export function BikeInfoPage(props){
    const {id} = useParams();
    const {bikes} = props;
    const [bike, setBike] = useState({});

    useEffect(()=>{
        if(bikes){
            setBike(bikes.find(b=> id == b.id));
        }
    });

    return(
        <Container>
            <InfoCardGroup img={bike.img} title={bike.name}>
                //TODO add info
                <Link className="btn-light" to={'/bikes/hire/' + bike.id}>HUUR</Link>
            </InfoCardGroup>
        </Container>
    )
}








