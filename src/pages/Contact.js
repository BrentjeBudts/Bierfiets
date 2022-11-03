import React, {useState} from "react";

import {addDoc} from "firebase/firestore"
import {DatePicker, Rate} from "antd";
import Button from "react-bootstrap/Button";

export function Contact(props){
    const {rates} = props;
    const [rate, setRate] = useState(0);

    const addRate = () =>{
        addDoc(rates, {stars :rate});
    }

    return (
        <div>
            <p>Want to rate us?</p>
            <Rate defaultValue={3} onChange={setRate}/>
            <Button onClick={addRate}>SEND</Button>
        </div>)
}