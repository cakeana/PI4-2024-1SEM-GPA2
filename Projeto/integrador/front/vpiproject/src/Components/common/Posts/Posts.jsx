import React, { useEffect, useState } from 'react'
import Loading from '../../loading/Loading'
import PostCard from './PostCard'

const Posts = () => {
  const[loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/publicacao/listar') 
      .then(response => response.json())
      .then(data => {
        setPosts(data.list);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);
  return (
    <section className='flex flex-col gap-[0.5rem]'>
      {loading ? <Loading /> : posts.map(post => <PostCard key={post.id} post={post} />)}
    </section>
  )
}

export default Posts