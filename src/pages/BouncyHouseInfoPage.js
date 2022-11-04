import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {updateList} from "../utilities/updateList";
import {Spin} from "antd";
import {Container} from "react-bootstrap";
import {InfoCardGroup} from "../components/InfoCardGroup";

export function BouncyHouseInfoPage(props){
    const {id} = useParams();
    const {houses} = props;
    const [house, setHouse] = useState({});
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        if(houses){
            setHouse(houses.find(b=> id == b.id));
        }
    })
    return(
        <Container>
            <InfoCardGroup img={house.img} title={house.name}>
                <Button onClick={updateList(houses,setLoading,id)}>HIRE</Button>
                {isLoading?<Spin name="ball-clip-rotate-multiple" color="blue"/> :""}
            </InfoCardGroup>
        </Container>
    )
}