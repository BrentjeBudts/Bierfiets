import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Attraction} from "./Attraction";

export function Bike(props) {
    const {bike} =props;

    return (<div>
            <Attraction attraction={bike}><Link className="btn-light" to={'/bikes/'+bike.id} key={bike.id}>Huur deze fiets!</Link></Attraction>
        </div>
    )
}

Bike.propTypes = {
    bikes : PropTypes.arrayOf(PropTypes.object)
}