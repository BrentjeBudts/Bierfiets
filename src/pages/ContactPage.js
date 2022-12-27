import React, {useState} from "react";

import {addDoc} from "firebase/firestore"
import Button from "react-bootstrap/Button";
import {success} from "../utilities/updateList";
import {Rate} from "antd";
import {Container} from "react-bootstrap";
import {useRateContext} from "../contexts/RateContext";

export function ContactPage(props){
    const {rates} = props;
    const {rate, setRate} = useRateContext();

     const addRate = async () => {
         await addDoc(rates, {stars: rate}).then(() => success('RATED SUCCESSFULLY'));
     }

    return (
        <Container className="mt-5">
            <h2>Heeft u een vraag of een probleem? Contacteer ons!</h2>
            <p>Email: 123@fakeEmail.com</p>
            <p>Telefoon: 0470827040</p>
            <p>Blij met onze hulp? Geef ons een beoordeling!?</p>
            <Rate defaultValue={3} onChange={setRate}/>
            <Button onClick={addRate}>SEND</Button>
        </Container>)
}