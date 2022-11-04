import {Card, CardGroup} from "react-bootstrap";
import React from "react";

export function InfoCardGroup(props){
    const {img,title,children} = props;
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src={img}/>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div>{children}</div>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}
