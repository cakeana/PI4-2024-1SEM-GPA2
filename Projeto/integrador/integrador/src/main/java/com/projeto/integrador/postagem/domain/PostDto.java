package com.projeto.integrador.postagem.domain;

import java.util.Date;

import com.google.cloud.firestore.annotation.ServerTimestamp;

public class PostDto {

	private String nome;
	private String conteudo;
	private String imagem;
	private String id;
	private @ServerTimestamp Date time;
	private String photoUrl;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getConteudo() {
		return conteudo;
	}

	public void setConteudo(String conteudo) {
		this.conteudo = conteudo;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public final String getImagem() {
		return imagem;
	}

	public final void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public final Date getTime() {
		return time;
	}

	public final void setTime(Date time) {
		this.time = time;
	}

	public final String getPhotoUrl() {
		return photoUrl;
	}

	public final void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
	}
	
	
}
