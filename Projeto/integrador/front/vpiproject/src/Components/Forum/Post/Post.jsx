import React, { useState } from "react";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const Post = ({ postInfo }) => {
  const { nome, conteudo, imagem, time, photoUrl } = postInfo;
  const [clickedIcons, setClickedIcons] = useState({
    favorite: false,
    dissatisfied: false,
    satisfied: false,
  });

  const handleIconClick = (icon) => {
    setClickedIcons((prevState) => ({
      ...prevState,
      [icon]: !prevState[icon],
    }));
  };

  return (
    <div className="post bg-white shadow-md rounded-md p-6 mb-8">
      <div className="flex items-center mb-4">
        <div className="postImg">
          <Avatar src={photoUrl} />
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-800">{nome}</h4>
          <p className="text-sm text-gray-600">{conteudo}</p>
        </div>
      </div>
      {imagem && <img src={imagem} alt="Imagem da postagem" className="w-full rounded-md mb-4" />}
      <div className="flex justify-between">
        <div className="flex items-center">
          <FavoriteBorderIcon
            className={`text-red-700 cursor-pointer ${clickedIcons.favorite && "text-red-900"}`}
            onClick={() => handleIconClick("favorite")}
          />
          <SentimentDissatisfiedIcon
            className={`text-yellow-700 cursor-pointer ml-4 ${clickedIcons.dissatisfied && "text-yellow-900"}`}
            onClick={() => handleIconClick("dissatisfied")}
          />
          <SentimentSatisfiedAltIcon
            className={`text-green-700 cursor-pointer ml-4 ${clickedIcons.satisfied && "text-green-900"}`}
            onClick={() => handleIconClick("satisfied")}
          />
        </div>
        <div className="text-xs text-gray-500">{new Date(time.seconds * 1000).toLocaleString()}</div>
      </div>
    </div>
  );
};

export default Post;
