import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const data = fetch("/data.json").then((res) => res.json());

  const googleProvider = new GoogleAuthProvider();
  // creat user function
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // log In function
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // log Out fuction
  const logOut = () => {
    return signOut(auth);
  };
  // google sign in
  const handelGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // Forget password
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
   const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  // set User function
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      return () => {
        unsubscribe();
      };
    });
  }, []);
  const authInFo = {
    data,
    user,
    setUser,
    show,
    setShow,
    createUser,
    userLogin,
    logOut,
    handelGoogleSignIn,
    forgetPassword,
    loading,
    setLoading,
    updateUser,
  };
  return <AuthContext value={authInFo}>{children}</AuthContext>;
};

export default AuthProvider;
