import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../loading/Loading';

const Video = () => {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/video/listar')
      .then(response => response.json())
      .then(data => {
        setVideos(data); 
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className='flex flex-col gap-[0.5rem]'>
      {loading ? (
        <Loading />
      ) : (
        videos.map(video => (
          <div key={video.id} className="border border-gray-300 p-4 rounded-md">
            <Link to={`/video/${video.id}`}>
              <img
                src={video.imgUrl}
                className="w-full max-h-40 object-cover mb-4"
                alt={video.nome}
              />
              <h3 className="text-lg font-semibold mb-2">{video.nome}</h3>
              <p className="text-sm text-gray-600">{video.descricao}</p>
            </Link>
          </div>
        ))
      )}
    </section>
  );
};

export default Video;
