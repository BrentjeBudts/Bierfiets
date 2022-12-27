import {Container} from "react-bootstrap";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import {UpdateList} from "../utilities/updateList";
import {DatePicker, Input, Space, Spin} from "antd";
import {useParams} from "react-router-dom";
import {useLoadingContext} from "../contexts/LoadingContext";


export function HirePage(props){
    const {id} = useParams();
    const {list} = props;
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const {isLoading} = useLoadingContext();
    const onChange = (date, dateString) => {
        setDate(dateString);
    };

    return(
        <Container className="mt-5">
            <Space direction="vertical" size="large">
                <DatePicker onChange={onChange} />
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name"/>
                <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address"/>
                <Button onClick={UpdateList(list,id, name, email, date)}>HIRE</Button>
                {isLoading?<Spin name="ball-clip-rotate-multiple" color="blue"/> :""}
            </Space>
        </Container>
    )
}