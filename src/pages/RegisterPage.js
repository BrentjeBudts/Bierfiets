import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import {auth, registerWithEmailAndPassword, signInWithGoogle,} from "../services/firestore";
import {Input, Space} from "antd";
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";


export function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password).then();
    };
    useEffect(() => {
        if (loading) return;
    }, [user, loading]);
    return (
        <Container className="mt-5">
            <Space direction="vertical" size="large">
                <h1>Register here:</h1>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name"/>
                <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address"/>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                <Button className="register__btn" onClick={register}>
                    Register
                </Button>
                <Button onClick={signInWithGoogle}>
                    Register with Google
                </Button>
                <div>
                    Already have an account? <Link to="/login">Login</Link> now.
                </div>
            </Space>
        </Container>
    );
}