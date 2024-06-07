package com.projeto.integrador.clinica.domain;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class ClinicaListResponse {
	private List<ClinicaResponse> list;

	public final List<ClinicaResponse> getList() {
		return list;
	}

	public final void setList(List<ClinicaResponse> list) {
		this.list = list;
	}

}
