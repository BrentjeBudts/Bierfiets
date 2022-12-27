import React from "react";
import {Card, CardGroup, Container} from "react-bootstrap";

export function Home() {
    //TODO other picture
    return (
        <Container style={{margin : "auto"}}>

            <h1>WELKOM</h1>
            <CardGroup>
                <HomeCard title="Springkastelen"
                          src="https://firebasestorage.googleapis.com/v0/b/bar-kar.appspot.com/o/springkasteel.jpg?alt=media&token=450a1bda-7115-4d82-a6e1-18444549e6d4">
                    Hallo
                </HomeCard>
                <HomeCard title="Bierfietsen"
                          src="https://firebasestorage.googleapis.com/v0/b/bar-kar.appspot.com/o/bierfiets.jpg?alt=media&token=e64bcfd4-bf20-4f8c-8978-11e27b7af46f">
                    Hallo
                </HomeCard>
                <HomeCard title="Al onze attracties"
                          src="https://firebasestorage.googleapis.com/v0/b/bar-kar.appspot.com/o/bierfiets.jpg?alt=media&token=e64bcfd4-bf20-4f8c-8978-11e27b7af46f">
                    Hallo
                </HomeCard>
            </CardGroup>
        </Container>
    )
}

function HomeCard(props) { 
    const {src, title, children} = props;
    return (
        <Card>
            <Card.Img variant="top" className="cardImg" src={src}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {props.children}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}