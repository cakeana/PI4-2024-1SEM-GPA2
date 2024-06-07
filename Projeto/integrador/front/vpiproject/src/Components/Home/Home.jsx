import React from 'react'
import Posts from '../common/Posts/Posts'
import Video from '../common/Posts/Video'

const Home = () => {
  return (
    <section className='size flex gap-[5rem] relative'>
      <div className='flex-[2] py-10 mb-[4rem]'>
        <Posts />
      </div>
      <div className='hidden md:inline-block md:w-[21rem] p-7 border-l border-gray-300 '>
        <h3 className="mb-4">Assista aos conteúdos</h3>
        <Video />
      </div>
    </section>
  )
}

export default Home