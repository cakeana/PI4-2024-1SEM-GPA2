import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import Loading from '../Components/loading/Loading';

const BlogContexto = createContext();

const Contexto = ({ children }) => {
  const [usuarioAtual, setUsuarioAtual] = useState(false);
  const[isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    const incrito = onAuthStateChanged(auth, (user) =>{
      if(user)
        setUsuarioAtual(user);
      else{
        setUsuarioAtual(null);
      }
      setIsLoading(false);
    });
    return () => incrito();
  }, [usuarioAtual])
  return (
    <BlogContexto.Provider value={{ usuarioAtual, setUsuarioAtual }}>
      {isLoading ? <Loading /> : children}
    </BlogContexto.Provider>
  );
};

export default Contexto;
export const useBlogContexto = () => useContext(BlogContexto);
