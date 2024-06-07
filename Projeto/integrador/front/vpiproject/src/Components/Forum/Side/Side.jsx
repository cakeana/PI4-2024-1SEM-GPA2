import React from "react";

const Side = () => {
  const novosConteudos = [
    "Conteúdo 1",
    "Conteúdo 2",
    "Conteúdo 3",
    "Conteúdo 4",
    "Conteúdo 5"
  ];

  return (
    <div className="mx-4">
      <h3 className="text-2xl font-semibold">Novos Conteúdos</h3>
      <div>
        {novosConteudos.map((conteudo, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4 mb-4 text-center">
            <p className="text-lg">{conteudo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Side;
