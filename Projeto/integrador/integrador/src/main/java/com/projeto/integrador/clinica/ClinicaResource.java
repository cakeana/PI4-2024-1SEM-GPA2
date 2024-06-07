package com.projeto.integrador.clinica;

import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.integrador.clinica.domain.ClinicaListResponse;
import com.projeto.integrador.clinica.domain.ClinicaRequest;

@RestController
@RequestMapping("/clinica")
public class ClinicaResource {
    
    @Autowired
    private ClinicaService service;
    
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/criar")
    public void criar(@RequestBody ClinicaRequest request)  {
        service.criar(request);
    }
    
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/listar")
    public ClinicaListResponse listar() throws InterruptedException, ExecutionException  {
        return service.listar();
    }
}
