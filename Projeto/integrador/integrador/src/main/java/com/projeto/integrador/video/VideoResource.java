package com.projeto.integrador.video;

import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.integrador.video.domain.VideoRequest;
import com.projeto.integrador.video.domain.VideoResponse;

@RestController
@RequestMapping("/video")
public class VideoResource {

	@Autowired
	private VideoService service;

	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping("/criar")
	public void criar(@RequestBody VideoRequest request) {
		service.criar(request);
	}

	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping("/listar")
	public List<VideoResponse> listar() throws InterruptedException, ExecutionException {
		return service.listar();
	}
}
