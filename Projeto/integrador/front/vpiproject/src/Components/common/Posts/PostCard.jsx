import React from 'react'
import { useNavigate } from 'react-router-dom'

const PostCard = ({ post }) => {

  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate(`/post/${post.id}`)} className='flex flex-col sm:flex-row gap-4 cursor-pointer'>
        <div className='flex-[2.5]'>
          <p className='pb-2 font-semibold capitalize'>{post.autor}</p>
          <h2 className='text-xl font-bold line-clamp-2 leading-6 capitalize'>{post.titulo}</h2>
          <div className='py-1 text-gray-500 line-clamp-2 leading-5' 
          dangerouslySetInnerHTML={{__html: post.descricao}} />
           <p className='text-xs text-gray-600 mt-3 mb-10'>{new Date(post.time.seconds * 1000).toLocaleString()}</p>
        </div>
        <div className='flex-[1]'>
          <img src={post.img} className='w-[53rem]'></img>
        </div>
      </div>
    </>
  )
}

export default PostCard