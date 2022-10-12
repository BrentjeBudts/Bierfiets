import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import React from "react";


export function Attraction(props){
    const {children,attraction} = props;
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={"/img/"+attraction.img} />
            <Card.Body>
                <Card.Title>{attraction.name}</Card.Title>
                <Card.Text>
                    //TOE TE VOEGEN
                    INFO OVER ATTRACTIE
                </Card.Text>
                {children}
            </Card.Body>
        </Card>
    )
}