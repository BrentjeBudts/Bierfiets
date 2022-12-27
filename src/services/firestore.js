import {initializeApp} from "firebase/app";

import {GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut,
} from "firebase/auth";

import {getFirestore, query, getDocs, collection, where, addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyALzDbwYjaIwquLDWhYs3quG1ZympAx8w0",
    authDomain: "bar-kar.firebaseapp.com",
    projectId: "bar-kar",
    storageBucket: "bar-kar.appspot.com",
    messagingSenderId: "456782568537",
    appId: "1:456782568537:web:4a2b46651f87502028a548"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)
export const firestoreDB = getFirestore(firebaseApp);
console.log("initialized firebase connection");

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(firestoreDB, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(firestoreDB, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
                role: "user"
            });
        }
        window.location.reload(false);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

export const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.reload(false);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(firestoreDB, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            role: "user"
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

export const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

export const logout = () => {
    localStorage.setItem("name", "");
    signOut(auth);
    window.location.reload(false);
};