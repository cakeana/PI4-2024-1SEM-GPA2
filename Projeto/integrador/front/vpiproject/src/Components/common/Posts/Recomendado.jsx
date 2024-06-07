import React from 'react'
import { useNavigate } from 'react-router-dom'

const Recomendado = ({ postList, currentPostId }) => {
  const navigate = useNavigate()

  const filteredPosts = postList.filter(post => post.id !== currentPostId)

  const randomPost = filteredPosts.length > 0 ? filteredPosts[Math.floor(Math.random() * filteredPosts.length)] : null

  return (
    <section className='border-gray-100'>
      <div className='w-[90%] md:w-[90%] lg:w-[60%] mx-auto py-[3rem]'>
        <h2 className='text-xl font-bold'>Leitura Recomendada</h2>
        {randomPost && <Post post={randomPost} navigate={navigate} />}
      </div>
    </section>
  )
}

const Post = ({ post, navigate }) => {
  return (
    <div
      onClick={() => navigate(`/post/${post.id}`)}
      className='w-full cursor-pointer'
    >
      <img src={post.img} alt={post.titulo} className='w-full h-[200px] object-cover' />
      <div className='flex items-center gap-1 py-1'>
        <h3 className='text-sm capitalize'>{post.autor}</h3>
      </div>
      <h2 className='font-extrabold leading-5 line-clamp-2'>{post.titulo}</h2>
      <div
        className='line-clamp-2 my-3 text-gray-500 leading-5'
        dangerouslySetInnerHTML={{ __html: post.conteudo }}
      />
      <p className='text-sm text-gray-600'>{post.data}</p>
    </div>
  )
}

export default Recomendado
