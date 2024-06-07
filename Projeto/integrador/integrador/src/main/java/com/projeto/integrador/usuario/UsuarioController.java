package com.projeto.integrador.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.integrador.usuario.domain.UsuarioRequest;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping("/criar")
	public void criar(@RequestBody UsuarioRequest request)  {
		usuarioService.criar(request);
	}
}
