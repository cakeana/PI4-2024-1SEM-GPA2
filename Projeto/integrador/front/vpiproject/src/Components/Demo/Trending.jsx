import React from 'react';

const Trending = () => {
  const trendingDiseases = [
    "Ansiedade",
    "Depressão",
    "Bipolaridade",
    "Borderline",
    "Estresse Pós-Traumático",
    "Esquizofrenia",
    "Transtorno Compulsivo",
    "Déficit de Atenção"
  ];

  const topRow = trendingDiseases.slice(0, 4);
  const bottomRow = trendingDiseases.slice(4, 8);

  return (
    <div className="bg-gray-200 rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-3">Doenças que mais afetam atualmente</h2>
      <div className="flex flex-wrap">
        {topRow.map((disease, index) => (
          <div key={index} className="flex items-center bg-white rounded-lg p-2 mr-2 mb-2">
            <span className="text-purple-600 text-lg font-semibold mr-2">{index + 1}</span>
            <span>{disease}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap mt-4">
        {bottomRow.map((disease, index) => (
          <div key={index} className="flex items-center bg-white rounded-lg p-2 mr-2 mb-2">
            <span className="text-purple-600 text-lg font-semibold mr-2">{index + 5}</span>
            <span>{disease}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
