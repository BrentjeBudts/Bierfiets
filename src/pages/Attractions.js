import React from "react";
import {Bike, BikePage} from "./BikePage";
import {BouncyHousePage} from "./BouncyHousePage";

export function Attractions(props){
    const {bikes, houses} = props;
    return(
        <div>
            <BikePage bikes={bikes}/>
            <BouncyHousePage houses={houses}/>
        </div>
    )
}
