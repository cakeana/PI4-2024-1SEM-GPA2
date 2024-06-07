import React from 'react';
import { LiaUser, LiaEditSolid } from 'react-icons/lia';
import { useBlogContexto } from '../../Contexto/Contexto';
import { Link } from 'react-router-dom';

const ModalUsuario = () => {
  const usuarioAtual = useBlogContexto();
  const userModal = [
    {
      title: "Perfil",
      icon: <LiaUser />,
      path: `/perfil/${usuarioAtual?.uid}`
    }
  ];

  return (
    <section className='absolute w-[18rem] p-6 bg-white right-0 top-[100%]
    shadows rounded-md z-50 text-gray-500'>
      <Link to={"/write"} className='flex md:hidden items-center gap-1 text-gray-500'>
        <span className='text-3xl'>
          <LiaEditSolid />
        </span>
        <span className='text-sm mt-2'>Write</span>
      </Link>
      <div className='flex flex-col gap-4 border-b border-gray-300 pb-5'>
        {userModal.map((link, i) => (
          <Link key={i} to={link.path} className='flex items-center gap-2 text-gray-500 hover:text-black/70'>
            <span className='text-2xl'>{link.icon}</span>
            <h2 className='text-md'>{link.title}</h2>
          </Link>
        ))}
      </div>
      <button className='flex flex-col pt-5 cursor-pointer hover:text-black/70'>
        Sair
      </button>
    </section>
  );
}

export default ModalUsuario;
