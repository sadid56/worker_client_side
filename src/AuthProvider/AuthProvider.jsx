/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // google login
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const profileUpdate = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //login
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //log Out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //current user observe
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);

      // jwt token related
      const userEmail = currentUser?.email || user?.email;
      const loggerUser = {email: userEmail}
      if(userEmail){
        axios.post('https://assignment11-server-side-alpha.vercel.app/jwt',loggerUser, {withCredentials: true})
        .then(res => console.log(res.data))
        .catch(error => {
          console.log(error.message);
        })
      }
      else{
        axios.post('https://assignment11-server-side-alpha.vercel.app/logOut', loggerUser, {withCredentials: true})
        .then(res => console.log(res.data))
        .catch(error => console.log(error.message))
      }

    });
    return () => unSubscribe();
  }, [user?.email]);
  const authInfo = {
    user,
    loading,
    googleLogin,
    createUser,
    profileUpdate,
    loginUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
