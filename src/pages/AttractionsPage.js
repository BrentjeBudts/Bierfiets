import React from "react";
import {Bike, BikePage} from "./BikePage";
import {BouncyHousePage} from "./BouncyHousePage";

export function AttractionsPage(props){
    const {bikes, houses} = props;
    //TODO add title
    return(
        <div>
            <BikePage bikes={bikes}/>
            <BouncyHousePage houses={houses}/>
        </div>
    )
}
