import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Bike} from "./Bike";
import React from "react";
import {Attraction} from "./Attraction";
import {Link} from "react-router-dom";

export function BouncyHouse(props){
    const {house} =props;

    return (<div>
            <Attraction attraction={house}>
                <p>Prijs : {house.price}€</p>
                <p>Grootte : {house.size}</p>
                <Link className="btn-light" to={'/houses/'+house.id} key={house.id}>Huur dit springkasteel!</Link>
            </Attraction>
        </div>
    )
}