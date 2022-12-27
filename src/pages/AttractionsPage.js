import React, {useState} from "react";
import {Bike, BikePage} from "./BikePage";
import {BouncyHousePage} from "./BouncyHousePage";
import {useBikeContext} from "../App";

export function AttractionsPage(props){
    const {houses} = props;
    const {bikes} = useBikeContext();
    //TODO add title
    return(
        <div>
            <BikePage bikes={bikes}/>
            <BouncyHousePage houses={houses}/>
        </div>
    )
}
