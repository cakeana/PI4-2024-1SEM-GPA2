package com.projeto.integrador.postagem.domain;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class PostListResponse {

	private List<PostListResponseDto> list;

	public final List<PostListResponseDto> getList() {
		return list;
	}

	public final void setList(List<PostListResponseDto> list) {
		this.list = list;
	}

}
