
import { createContext, useContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword,  signOut,  
            onAuthStateChanged, } from "firebase/auth";
import {auth} from '../firebase/firebaseConfig';
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null); 
const [loading, setLoading] = useState(true);

//Acá tengo que hacer las funciones de auth

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setUser(user);
    setLoading(false);
  });

  return unsubscribe;
}, []);

return (
    <AuthContext.Provider value={{ user }}>
      {!loading && children}
    </AuthContext.Provider>
  );}


export const useAuth = () => useContext(AuthContext)
