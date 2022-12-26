
import React from "react";
import {Card} from "react-bootstrap";


export function Attraction(props){
    const {children,attraction} = props;
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img className="cardImg"  variant="top" src={attraction.img} />
            <Card.Body>
                <Card.Title>{attraction.name}</Card.Title>
                <Card.Text>
                    //TODO TOE TE VOEGEN
                    INFO OVER ATTRACTIE
                </Card.Text>
                {children}
            </Card.Body>
        </Card>
    )
}