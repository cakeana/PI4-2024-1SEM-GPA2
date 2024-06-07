package com.projeto.integrador.clinica.domain;

import java.util.List;

public class ClinicaResponse {
	private String id;
	private String nome;
	private String descricao;
	private String horario;
	private String atendimento;
	private List<String> especialidades;
	private String telefone;
	private String endereco;
	private String mapsLink;
	private String img;

	public final String getId() {
		return id;
	}

	public final void setId(String id) {
		this.id = id;
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

	public final String getHorario() {
		return horario;
	}

	public final void setHorario(String horario) {
		this.horario = horario;
	}

	public final String getAtendimento() {
		return atendimento;
	}

	public final void setAtendimento(String atendimento) {
		this.atendimento = atendimento;
	}

	public final List<String> getEspecialidades() {
		return especialidades;
	}

	public final void setEspecialidades(List<String> especialidades) {
		this.especialidades = especialidades;
	}

	public final String getTelefone() {
		return telefone;
	}

	public final void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public final String getEndereco() {
		return endereco;
	}

	public final void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public final String getMapsLink() {
		return mapsLink;
	}

	public final void setMapsLink(String mapsLink) {
		this.mapsLink = mapsLink;
	}

	public final String getImg() {
		return img;
	}

	public final void setImg(String img) {
		this.img = img;
	}

}
