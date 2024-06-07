package com.projeto.integrador.publicacao.domain;


import com.google.cloud.Timestamp;

public class PublicacaoResponse {

	private String id;
	private String autor;
	private String titulo;
	private String conteudo;
	private Timestamp time;
	private String descricao;
	private String img;

	public final String getUid() {
		return id;
	}

	public final void setUid(String uid) {
		this.id = uid;
	}

	public final String getAutor() {
		return autor;
	}

	public final void setAutor(String autor) {
		this.autor = autor;
	}

	public final String getTitulo() {
		return titulo;
	}

	public final void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public final String getConteudo() {
		return conteudo;
	}

	public final void setConteudo(String conteudo) {
		this.conteudo = conteudo;
	}


	public final String getDescricao() {
		return descricao;
	}

	public final void setDescricao(String descricao) {
		this.descricao = descricao;
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

	public final String getImg() {
		return img;
	}

	public final void setImg(String img) {
		this.img = img;
	}

	
	

}
