package com.projeto.integrador.video.domain;

public class VideoResponse {

	private String id;
	private String urlVideo;
	private String nome;
	private String descricao;
	private String conteudo;
	private String imgUrl;

	public final String getId() {
		return id;
	}

	public final void setId(String id) {
		this.id = id;
	}

	public final String getUrlVideo() {
		return urlVideo;
	}

	public final void setUrlVideo(String urlVideo) {
		this.urlVideo = urlVideo;
	}

	public final String getNome() {
		return nome;
	}

	public final void setNome(String nome) {
		this.nome = nome;
	}

	public final String getDescricao() {
		return descricao;
	}

	public final void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public final String getConteudo() {
		return conteudo;
	}

	public final void setConteudo(String conteudo) {
		this.conteudo = conteudo;
	}

	public final String getImgUrl() {
		return imgUrl;
	}

	public final void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	
	

}
