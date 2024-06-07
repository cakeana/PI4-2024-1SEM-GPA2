import React, { useEffect, useState } from 'react';
import Loading from '../loading/Loading';
import PostCard from '../common/Posts/PostCard';

const PostsDemo = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/publicacao/listar') 
      .then(response => response.json())
      .then(data => {
        setPosts(data.list.slice(0, 2)); 
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
  );
}

export default PostsDemo;
