import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {updateList} from "../utilities/updateList";
import {Spin} from "antd";
import {Card, Container} from "react-bootstrap";
import {InfoCardGroup} from "../components/InfoCardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {HirePage} from "./HirePage";

export function BouncyHouseInfoPage(props){
    const {id} = useParams();
    const {houses} = props;
    const [house, setHouse] = useState({});


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
                <div>
                    <Link className="btn-light" to={'/houses/hire/' + house.id}>HUUR</Link>
                </div>
            </InfoCardGroup>
        </Container>
    )
}