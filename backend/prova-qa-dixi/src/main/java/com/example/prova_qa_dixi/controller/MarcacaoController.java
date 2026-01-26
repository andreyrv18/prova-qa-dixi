package com.example.prova_qa_dixi.controller;

import com.example.prova_qa_dixi.model.Marcacao;
import com.example.prova_qa_dixi.repository.MarcacaoRepository;
import com.example.prova_qa_dixi.service.MarcacaoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
class MarcacaoController {

    public MarcacaoRepository marcacaoRepository;
    public MarcacaoService marcacaoService;

    @GetMapping("/")
    public ResponseEntity<Map<String, String>> helloWord() {
        return ResponseEntity.ok(Map.of("message", "Hello World!"));
    }

    @GetMapping(path = "/all")
    public String listarMarcacoes() {
        return marcacaoRepository.findAll().toString();
    }


    @PostMapping("/marcacoes")
    public ResponseEntity<Marcacao> criarMarcacao(@RequestBody Marcacao marcacao) {

        Marcacao marcacaoSalva = marcacaoService.marcacaoService(marcacao);
        return new ResponseEntity<>(marcacaoSalva, HttpStatus.CREATED);
    }
}
