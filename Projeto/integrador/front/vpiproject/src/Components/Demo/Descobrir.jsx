import React from 'react'
import { descoberta } from '../../data'

const Descobrir = () => {
  return (
    <div className='stricky top-[6rem]'>
      <div className='border-b border-gray-400 pb-7'>
        <h2 className='font-semibold'>Veja os temas que temos aqui</h2>
        <div className='my-2 flex items-center gap-3 flex-wrap'>
          {descoberta.map((item, i) => ( 
            <button key={i} className='bg-gray-300 py-2 px-3 text-sm rounded'>{item}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Descobrir