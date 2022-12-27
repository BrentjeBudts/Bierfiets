import {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {Link, useNavigate} from "react-router-dom";
import {auth,signInWithGoogle,logInWithEmailAndPassword} from "../services/firestore";
import {getMouseEventProps} from "@testing-library/user-event/dist/keyboard/getEventProps";

export function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) navigate("/");
    }, [user, loading]);
    return (
        <div>
            <div >
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                <button onClick={() => logInWithEmailAndPassword(email, password)}>
                    Login
                </button>
                <button onClick={signInWithGoogle}>
                    Login with Google
                </button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </div>
        </div>
    );
}