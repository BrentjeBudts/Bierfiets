import {Card, CardGroup} from "react-bootstrap";
import React from "react";

export function InfoCardGroup(props){
    const {img,title,children} = props;
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" className="cardImg" src={img}/>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title className="text-center">{title}</Card.Title>
                    <div className="text-center">{children}</div>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}
