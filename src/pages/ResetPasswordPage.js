import {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, sendPasswordReset} from "../services/firestore";
import {Link, useNavigate} from "react-router-dom";
import {sendPasswordResetEmail} from "firebase/auth";

export function ResetPage(){
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) navigate("/dashboard");
    }, [user, loading]);
    return (
        <div>
            <div>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address"/>
                <button onClick={() => sendPasswordReset(email)}>
                    Send password reset email
                </button>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </div>
        </div>
    );
}