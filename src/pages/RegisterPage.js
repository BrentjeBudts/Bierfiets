import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import {auth, registerWithEmailAndPassword, signInWithGoogle,} from "../services/firestore";


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
        <div>
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name"/>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                <button className="register__btn" onClick={register}>
                    Register
                </button>
                <button onClick={signInWithGoogle}>
                    Register with Google
                </button>
                <div>
                    Already have an account? <Link to="/login">Login</Link> now.
                </div>
            </div>
        </div>
    );
}