import {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {Link, useNavigate} from "react-router-dom";
import {auth,signInWithGoogle,logInWithEmailAndPassword} from "../services/firestore";
import {getMouseEventProps} from "@testing-library/user-event/dist/keyboard/getEventProps";
import {Container} from "react-bootstrap";
import {Input, Space} from "antd";
import Button from "react-bootstrap/Button";

export function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) navigate("/");
    }, [user, loading]);
    return (
        <Container className="mt-5">
            <Space direction="vertical" size="large">
                <h1>Login:</h1>
                <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address"/>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                <Button onClick={() => logInWithEmailAndPassword(email, password)}>
                    Login
                </Button>
                <Button onClick={signInWithGoogle}>
                    Login with Google
                </Button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </Space>
        </Container>
    );
}