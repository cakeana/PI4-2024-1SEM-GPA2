import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import Post from "../Post/Post";
import { useBlogContexto } from "../../../Contexto/Contexto";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const { usuarioAtual } = useBlogContexto();

  useEffect(() => {
    if (usuarioAtual) {
      fetchPosts(); 
    }
  }, [usuarioAtual]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:8080/post/listar");
      const data = await response.json();
      setPosts(data.list);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    }
  };

  const updatePosts = () => {
    fetchPosts(); // Atualize os posts
  };

  return (
    <div className="feed flex-1 min-w-min border-r border-gray-300">
      <div className="feedHeader bg-white z-10 p-4 border-b border-gray-300">
        <h3 className="font-semibold text-xl cursor-pointer">Faça uma postagem</h3>
      </div>
      <Input onPostSuccess={updatePosts} displayName={usuarioAtual.displayName} photoUrl={usuarioAtual.photoURL} />
      {posts.map((post, index) => (
        <Post key={index} postInfo={post} />
      ))}
    </div>
  );
};

export default Feed;
