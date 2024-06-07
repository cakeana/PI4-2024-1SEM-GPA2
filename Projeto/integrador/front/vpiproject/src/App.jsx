import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home"
import Demo from "./Components/Demo/Demo"
import Forum from "./Components/Forum/Forum"
import HomeHeader from "./Components/Home/HomeHeader"
import DemoHeader from "./Components/Demo/DemoHeader"
import { useBlogContexto } from './Contexto/Contexto';
import PostUnico from './Components/common/Posts/PostUnico';
import Contatos from './Components/Contatos/Contatos';
import VideoPage from './Components/common/Posts/VideoPage';

const App = () => {
  const { usuarioAtual } = useBlogContexto();
  return (
    <>
    {usuarioAtual ? <HomeHeader /> : <DemoHeader /> }
     <Routes>
        {usuarioAtual && <Route path='/' element={<Home />} />}
        {!usuarioAtual && <Route path='/demo' element={<Demo />} />}
        {usuarioAtual && <Route path='/forum' element={<Forum />} />}
        {usuarioAtual && <Route path='/post/:postId' element={<PostUnico />} />}
        {usuarioAtual && <Route path='/contatos' element={<Contatos />} />}
        {usuarioAtual && <Route path='/video/:id' element={<VideoPage />} />}
        <Route path='*' element={<Navigate to={!usuarioAtual ? "/demo" : "/"}/>} />
     </Routes>
    </>
  );
};

export default App;
