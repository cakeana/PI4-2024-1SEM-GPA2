import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../loading/Loading'
import Recomendado from './Recomendado'

const PostUnico = () => {
  const { postId } = useParams()
  const [post, setPost] = useState(null)
  const [postList, setPostList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8080/publicacao/listar')
      .then(response => response.json())
      .then(data => {
        const foundPost = data.list.find(post => post.id === postId)
        setPost(foundPost)
        setPostList(data.list)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching posts:', error)
        setLoading(false)
      })
  }, [postId])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <section className='w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-[3rem]'>
            <h2 className='text-5xl font-extrabold capitalize'>{post.titulo}</h2>
            <div className='capitalize'>
              <span>{post.autor}</span>
            </div>
            <div className='border-b border-gray-500 mt-3' />
            <div className='mt-[3rem]'>
              <img
                className='w-full h-[400px] object-cover'
                src={post.img}
                alt={post.titulo}
              />
            </div>
            <div className='mt-6' dangerouslySetInnerHTML={{ __html: post.conteudo }} />
          </section>
          <Recomendado postList={postList} currentPostId={postId} />
        </>
      )}
    </>
  )
}

export default PostUnico
