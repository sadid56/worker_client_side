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

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bids, setBids] = useState([])

  // google login
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //create user
  const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // update user profile
  const profileUpdate = (name, photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
    })
  }

  //login
  const loginUser = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //log Out user
  const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
  }



  useEffect(()=>{
      fetch('http://localhost:5000/bids')
      .then(res => res.json())
      .then(data => setBids(data))
  },[])


  const handleAccept = id =>{
      // console.log('updare');
      fetch(`http://localhost:5000/bids/${id}`, {
          method: 'PATCH',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify({status: 'accept'})
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if(data.acknowledged){
              const remaining = bids.filter(bid => bid._id !== id)
              const update = bids.find(bid => bid._id === id)
              update.status = 'accept'
              const updateAccept = [update, ...remaining]
              setBids(updateAccept)
          }
      })
  }

  const hanldeReject = id => {
    fetch(`http://localhost:5000/bids/${id}`, {
      method: 'PATCH',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify({status: 'reject'})
  })
  .then(res => res.json())
  .then(data => {
      console.log(data);
      if(data.acknowledged){
          const remaining = bids.filter(bid => bid._id !== id)
          const update = bids.find(bid => bid._id === id)
          update.status = 'reject'
          const updateAccept = [update, ...remaining]
          setBids(updateAccept)
      }
  })
  }
  const handleComplete = id => {
    fetch(`http://localhost:5000/bids/${id}`, {
      method: 'PATCH',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify({status: 'complete'})
  })
  .then(res => res.json())
  .then(data => {
      console.log(data);
      if(data.acknowledged){
          const remaining = bids.filter(bid => bid._id !== id)
          const update = bids.find(bid => bid._id === id)
          update.status = 'complete'
          const updateAccept = [update, ...remaining]
          setBids(updateAccept)
      }
  })
  }

  //current user observe
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);
  const authInfo = { user, loading, googleLogin,createUser,profileUpdate,loginUser, logOut, handleAccept, bids, hanldeReject, handleComplete };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
