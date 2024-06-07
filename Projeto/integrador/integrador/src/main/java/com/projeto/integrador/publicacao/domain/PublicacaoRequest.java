package com.projeto.integrador.publicacao.domain;

import java.util.Date;

import com.google.cloud.firestore.annotation.ServerTimestamp;

public class PublicacaoRequest {

	private String autor;
	private String titulo;
	private String conteudo;
	private @ServerTimestamp Date time;
	private String descricao;
	private String img;
	private String id;

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

	
	public final Date getTime() {
		return time;
	}

	public final void setTime(Date time) {
		this.time = time;
	}

	public final String getImg() {
		return img;
	}

	public final void setImg(String img) {
		this.img = img;
	}

	public final String getId() {
		return id;
	}

	public final void setId(String id) {
		this.id = id;
	}
	
	

}
