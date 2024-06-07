import React from 'react'

import Banner from './Banner'
import Trending from './Trending'
import Descrobrir from './Descobrir'
import PostsDemo from './PostsDemos'

const Demo = () => {
  return (
    <>
     <Banner />
     <Trending />
     <div className='size py-7 flex flex-col-reverse md:flex-row gap-[7rem]'>
      <div className='flex-[1.5]'>
        <PostsDemo />
      </div>
      <div className='flex-[1] h-full relative'>
        <Descrobrir />
      </div>
     </div>
    </>
  )
}

export default Demo