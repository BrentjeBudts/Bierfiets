import React, {useState} from "react";

import {addDoc} from "firebase/firestore"
import Button from "react-bootstrap/Button";
import {success} from "../utilities/updateList";
import {Rate} from "antd";

export function ContactPage(props){
    const {rates} = props;
    const [rate, setRate] = useState(0);

    const addRate = () =>{
        addDoc(rates, {stars: rate}).then(()=>success('RATED SUCCESSFULLY'));
    }

    return (
        <div>
            <p>Want to rate us?</p>
            <Rate defaultValue={3} onChange={setRate}/>
            <Button onClick={addRate}>SEND</Button>
        </div>)
}