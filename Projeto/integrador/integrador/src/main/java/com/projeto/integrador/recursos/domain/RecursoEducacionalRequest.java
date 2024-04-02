package com.projeto.integrador.recursos.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecursoEducacionalRequest {

	private String titulo;
	private String descricao;
	private String conteudo;
	private TipoRecurso tipo;
	private Integer idImagem;
	private String link;
	private Integer idVideo;

}
