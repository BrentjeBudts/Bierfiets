import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {updateList} from "../utilities/updateList";
import {Spin} from "antd";
import {Card, Container} from "react-bootstrap";
import {InfoCardGroup} from "../components/InfoCardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
                <Card.Body>
                    <Row className="mb-5">
                        <Col>Grootte van het springKasteel :</Col>
                        <Col>{house.size}</Col>
                    </Row>
                    <Row>
                        <Col>Prijs van het springKasteel per dag :</Col>
                        <Col>{house.price}€</Col>
                    </Row>
                </Card.Body>
                <div className="mt-5">
                    <Button onClick={updateList(houses,setLoading,id)}>HIRE</Button>
                    {isLoading?<Spin name="ball-clip-rotate-multiple" color="blue"/> :""}
                </div>
            </InfoCardGroup>
        </Container>
    )
}