package com.projeto.integrador.postagem.domain;

import com.google.cloud.Timestamp;

public class PostListResponseDto {

	private String nome;
	private String conteudo;
	private String imagem;
	private String id;
	private Timestamp time;
	private String photoUrl;

	public final String getNome() {
		return nome;
	}

	public final void setNome(String nome) {
		this.nome = nome;
	}

	public final String getConteudo() {
		return conteudo;
	}

	public final void setConteudo(String conteudo) {
		this.conteudo = conteudo;
	}

	public final String getImagem() {
		return imagem;
	}

	public final void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public final String getId() {
		return id;
	}

	public final void setId(String id) {
		this.id = id;
	}

	public final Timestamp getTime() {
		return time;
	}

	public final void setTime(Timestamp time) {
		this.time = time;
	}
	
	public final String getPhotoUrl() {
		return photoUrl;
	}

	public final void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
	}

}
