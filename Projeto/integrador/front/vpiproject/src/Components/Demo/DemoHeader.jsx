import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { nav } from '../../data';
import Autenticador from './Autenticador/Autenticador';

const DemoHeader = () => {
  const [modal, setModal] = useState(false);

  return (
    <header className='border-b border-black sticky top-0 z-50'>
      <div className='size h-[70px] flex items-center justify-between'>
        <Link to={"/"}>
          <img className='h-[3.5rem]' src='https://img.freepik.com/vetores-premium/elemento-de-design-de-lindo-beija-flor-de-vetor-livre-para-banners-cartazes-folhetos-e-folhetos_1009653-1.jpg' alt='logo' />
        </Link>
        <div className='flex items-center gap-5'>
          <div className='hidden text-sm sm:flex items-center gap-5'>
            {nav.map((link, i) => (
              <Link key={i} to={link.path}>{link.titulo}</Link>
            ))}
          </div>
          <div className='relative'>
            <button onClick={() => setModal(true)} className='bg-purple-800 text-white rounded px-2 p-1 text-sm font-medium'>Entrar</button>
            <Autenticador modal={modal} setModal={setModal} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DemoHeader;
