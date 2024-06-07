package com.projeto.integrador.publicacao.domain;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class PublicacaoListResponse {
	
	private List<PublicacaoResponse> list;

	public final List<PublicacaoResponse> getList() {
		return list;
	}

	public final void setList(List<PublicacaoResponse> list) {
		this.list = list;
	}
}
