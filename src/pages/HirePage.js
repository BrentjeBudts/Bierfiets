import {Container} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {updateList} from "../utilities/updateList";
import {DatePicker, Input, Space, Spin} from "antd";
import {useParams} from "react-router-dom";

export function HirePage(props){
    const {id} = useParams();
    const {list} = props;
    const [isLoading,setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    const onChange = (date, dateString) => {
        setDate(dateString);
    };

    return(
        <Container className="mt-5">
            <Space direction="vertical" size="large">
                <DatePicker onChange={onChange} />
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name"/>
                <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address"/>
                <Button onClick={updateList(list,setLoading,id, name, email, date)}>HIRE</Button>
                {isLoading?<Spin name="ball-clip-rotate-multiple" color="blue"/> :""}
            </Space>
        </Container>
    )

}