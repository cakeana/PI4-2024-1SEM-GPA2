import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCupHotFill } from "react-icons/bs"
import { LiaEditSolid } from "react-icons/lia"
import { MdKeyboardArrowDown } from "react-icons/md"
import Modal from '../../utils/Modal'
import ModalUsuario from './ModalUsuario'
import { useBlogContexto } from '../../Contexto/Contexto'

const HomeHeader = () => {
  const [modal, setModal] = useState(false)
  const { usuarioAtual } = useBlogContexto();

  return (
    <header className='border-b border-gray-200 flex justify-center'>
      <div className='size h-[60px] flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Link to={"/"}>
            <span className='text-5xl'>
              <BsCupHotFill />
            </span>
          </Link>
        </div>
        <div className='flex items-center gap-3 sm:gap-7'>
          <Link to={"/contatos"} className='flex font-bold items-center text-gray-500'>
            <span className='text-sm'>Contatos</span>
          </Link>
          <Link to={"/forum"} className='hidden md:flex items-center gap-1 text-gray-500'>
            <span className='text-3xl'>
              <LiaEditSolid />
            </span>
            <span className='text-sm'>Forum</span>
          </Link>
          <div className='flex items-center relative'>
            <img onClick={() => setModal(true)} className='w-[2.3rem] hr-[2.3rem] object-cover rounded-full cursor-pointer'
              src={usuarioAtual.photoURL} alt='' />
            <span onClick={() => setModal(true)} className='text-gray-500 cursor-pointer'>
              <MdKeyboardArrowDown />
            </span>
            <Modal modal={modal} setModal={setModal}>
              <div className={`${modal ? "visible opacity-100%" : "invisible opacity-0"} transition-all duration-100`}>
                <ModalUsuario />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader
