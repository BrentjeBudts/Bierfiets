import React, {useState} from "react";
import {Bike} from "../components/Bike";
import {Container} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";


export function BikePage(props) {
    const {bikes} = props;
    return (<div>
            <Container>
                {bikes !== undefined ?
                    <div>
                        <h4>Bier fietsen</h4>
                        <Row className="justify-content-start">{bikes.map(o => <Col sm="auto" key={o.id}><Bike
                            bike={o}/></Col>)}</Row>
                    </div> : ""}
            </Container>
        </div>
    )
}

