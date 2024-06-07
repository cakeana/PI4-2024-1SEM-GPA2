import React from 'react'

const Banner = () => {
  return (
    <div className='bg-banner border-b border-black'>
      <div className='size py-[5rem] flex flex-col items-start gap-[1rem]'>
        <h1 className='font-title text-[3rem] sm:text-[4rem] md:text-[6rem] font-normal'>Descubra Saúde</h1>
        <p className='w-full md:w-[30rem] text-[1.3rem] md:text-[1.5rem] font-medium leading-7'>
          Diversos conteúdos relacionados a saúde mental para aprender
        </p>
      </div>
    </div>
  )
}

export default Banner