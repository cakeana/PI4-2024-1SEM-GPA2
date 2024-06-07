package com.projeto.integrador.postagem;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.integrador.postagem.domain.PostDto;
import com.projeto.integrador.postagem.domain.PostListResponse;
import com.projeto.integrador.postagem.domain.PostResponse;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/post")
public class PostResource {

	@Autowired
	PostService service;

	@PostMapping("/criar")
	public PostResponse criarPost(@RequestBody PostDto request)
			throws InterruptedException, ExecutionException, IOException {
		return service.createPost(request);
	}

	@GetMapping("/listar")
	public PostListResponse getPost() throws InterruptedException, ExecutionException {

		return service.getPostList();
	}

}
