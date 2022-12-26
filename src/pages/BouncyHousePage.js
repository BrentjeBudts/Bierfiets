import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import {BouncyHouse} from "../components/BouncyHouse";

export function BouncyHousePage(props){
    const {houses} = props;

    return (<div>
            <Container>
                {houses!==undefined?
                <div>
                    <h4>Springkastelen</h4><Row className="justify-content-start">{houses.map(o => <Col sm="auto" key={o.id}>
                    <BouncyHouse house={o}/></Col>)}</Row></div>:""}
            </Container>
        </div>
    )
}