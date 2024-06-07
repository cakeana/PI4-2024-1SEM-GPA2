import React, { useEffect, useState } from 'react';

const Contatos = () => {
  const [clinicas, setClinicas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/clinica/listar')
      .then(response => response.json())
      .then(data => setClinicas(data.list))
      .catch(error => console.error('Error fetching clinics:', error));
  }, []);

  return (
    <div className='w-[90%] mx-auto py-[3rem]'>
      <header className='text-center mb-10'>
        <h1 className='text-3xl font-bold'>Encontre um Profissional de Saúde</h1>
        <p className='text-gray-600 mt-2'>Procure por clínicas de saúde perto de você e agende uma consulta facilmente.</p>
      </header>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {clinicas.map((clinica, index) => (
          <div key={index} className='border p-4 rounded shadow-lg flex flex-col justify-between h-full'>
            <div>
              <img src={clinica.img} alt={clinica.nome} className='w-full h-48 object-cover mb-4 rounded' />
              <h2 className='text-xl font-bold mb-2'>{clinica.nome}</h2>
              <p className='mb-2'>{clinica.descricao}</p>
              <p><strong>Horário de Atendimento:</strong> {clinica.horario}</p>
              <p><strong>Tipo de Atendimento:</strong> {clinica.atendimento}</p>
              <p><strong>Especialidades:</strong> {clinica.especialidades.join(', ')}</p>
              <p><strong>Telefone:</strong> {clinica.telefone}</p>
              <p>
                <strong>Endereço:</strong>{' '}
                <a href={clinica.mapsLink} target="_blank" rel="noopener noreferrer" className='text-blue-500 underline'>
                  {clinica.endereco}
                </a>
              </p>
              <p className='mt-2'><strong>Avaliação:</strong> {clinica.avaliacao} ⭐</p>
            </div>
            <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
              Agendar Consulta
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contatos;
