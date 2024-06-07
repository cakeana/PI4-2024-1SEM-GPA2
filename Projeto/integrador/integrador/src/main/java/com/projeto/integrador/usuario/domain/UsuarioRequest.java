package com.projeto.integrador.usuario.domain;

public class UsuarioRequest {
	private String id;
	private String email;
	private String nomeUsuario;
	private String photoURL;

	public final String getId() {
		return id;
	}

	public final void setId(String id) {
		this.id = id;
	}

	public final String getEmail() {
		return email;
	}

	public final void setEmail(String email) {
		this.email = email;
	}

	public final String getNomeUsuario() {
		return nomeUsuario;
	}

	public final void setNomeUsuario(String nomeUsuario) {
		this.nomeUsuario = nomeUsuario;
	}

	public final String getPhotoURL() {
		return photoURL;
	}

	public final void setPhotoURL(String photoURL) {
		this.photoURL = photoURL;
	}

}
