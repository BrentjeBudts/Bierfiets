import React from "react";
import {Bike, BikePage} from "./BikePage";
import {BouncyHousePage} from "./BouncyHousePage";
import {Container} from "react-bootstrap";

export function AttractionsPage(props){
    const {bikes, houses} = props;
    return(
        <Container>
            <h1>Attracties die u kan huren:</h1>
            <BikePage bikes={bikes}/>
            <BouncyHousePage houses={houses}/>
        </Container>
    )
}
