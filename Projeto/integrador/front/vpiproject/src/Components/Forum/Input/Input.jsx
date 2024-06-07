import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import { FaCameraRetro } from "react-icons/fa";
import { storage } from "../../../firebase/firebase"; 
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Input = ({ onPostSuccess, displayName, photoUrl }) => {
  const [conteudo, setConteudo] = useState("");
  const [imagem, setImagem] = useState(null);
  const [nomeArquivo, setNomeArquivo] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (imagem) {
      const storageRef = ref(storage, `images/${imagem.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imagem);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
        },
        (error) => {
          console.error("Erro ao fazer upload da imagem:", error);
        },
        async () => {
          const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
          enviarDados(imageUrl);
        }
      );
    } else {
      enviarDados(null);
    }
  };

  const enviarDados = async (imageUrl) => {
    const data = {
      nome: displayName,
      conteudo: conteudo,
      imagem: imageUrl,
      photoUrl: photoUrl, 
    };

    try {
      const response = await fetch("http://localhost:8080/post/criar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Dados enviados com sucesso!");
        onPostSuccess();
        setConteudo("");
        setImagem(null);
        setNomeArquivo("");
      } else {
        console.error("Erro ao enviar dados para o backend.");
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  };

  const handleImagemChange = (event) => {
    const arquivo = event.target.files[0];
    setImagem(arquivo);
    setNomeArquivo(arquivo.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white shadow-md rounded-md p-6 mb-8">
        <div className="flex items-center mb-4">
          <Avatar src={photoUrl} />
          <textarea
            placeholder="O que está acontecendo?"
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
            className="border-b border-gray-300 p-2 ml-4 resize-y flex-1"
          />
        </div>
        <div className="flex items-center mt-3">
          <label htmlFor="imagemInput" className="cursor-pointer">
            <FaCameraRetro className="text-gray-600 text-2xl mr-2" />
          </label>
          <input
            id="imagemInput"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={handleImagemChange}
            className="hidden"
          />
          {nomeArquivo && <span className="text-blue-500 mr-2">{nomeArquivo}</span>}
          <div className="flex-grow"></div>
          <Button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg">
            Enviar
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Input;
