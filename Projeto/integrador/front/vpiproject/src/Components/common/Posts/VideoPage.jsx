import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../loading/Loading';

const VideoPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/video/listar`) 
      .then(response => response.json())
      .then(data => {
        const foundVideo = data.find(video => video.id === id);
        setVideo(foundVideo);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching video:', error);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="mx-auto max-w-7xl px-4 py-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">{video.nome}</h1>
              <div className="relative overflow-hidden mb-10">
                <video src={video.urlVideo} controls className="w-full"></video>
              </div>
              <p className="text-center text-gray-700">{video.conteudo}</p>
            </div>
          </div>
          <footer className="bg-gray-100 py-2 mt-6">
            <p className="text-center text-gray-500 text-sm">© 2024 SeuSite.com. Todos os direitos reservados.</p>
          </footer>
        </>
      )}
    </>
  );
};

export default VideoPage;
