package com.projeto.integrador.publicacao;

import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.integrador.publicacao.domain.PublicacaoListResponse;
import com.projeto.integrador.publicacao.domain.PublicacaoRequest;

@RestController
@RequestMapping("/publicacao")
public class PublicacaoResource {
	
	@Autowired
	private PublicacaoService service;
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping("/criar")
	public void criar(@RequestBody PublicacaoRequest request)  {
		service.criar(request);
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping("/listar")
	public PublicacaoListResponse listar() throws InterruptedException, ExecutionException  {
		return service.listar();
	}

}
