import React from 'react';
import Modal from '../../../utils/Modal';
import { LiaTimesSolid } from 'react-icons/lia';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const Autenticador = ({ modal, setModal }) => {
  const navigate = useNavigate();

  const googleAutenticacao = async () => {
    try {
      const criarUsuario = await signInWithPopup(auth, provider);
      const novoUsuario = criarUsuario.user;

      const usuarioData = {
        id: novoUsuario.uid,
        email: novoUsuario.email,
        nomeUsuario: novoUsuario.displayName,
        photoURL: novoUsuario.photoURL
      };

      const response = await fetch('http://localhost:8080/usuario/criar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarioData)
      });

      navigate("/");
      setModal(false);
    } catch (error) {
      console.error('Erro ao fazer login com Google:', error);
      throw error;
    }
  };

  return (
    <Modal modal={modal} setModal={setModal}>
      <section className={`z-50 fixed top-0 bottom-0 left-0 md:left-[10rem] overflow-auto right-0 md:right-[10rem] bg-white shadows ${modal ? "visible opacity-100" : "invisible opacity-0 transition-all duration-500"}`}>
        <button onClick={() => setModal(false)} className='absolute top-8 right-8 text-2xl hover:opacity-50'><LiaTimesSolid /></button>
        <div className='flex flex-col justify-center items-center gap-[3rem]'>
          <h2 className='text-2xl pt-[5rem]'>Bem Vindo</h2>
          <button onClick={googleAutenticacao} className='flex items-center gap-10 sm:w-[20rem] border border-black px-3 py-2 rounded-full'><FcGoogle className='text-2xl' />Entrar Com Google</button>
        </div>
      </section>
    </Modal>
  );
};

export default Autenticador;
