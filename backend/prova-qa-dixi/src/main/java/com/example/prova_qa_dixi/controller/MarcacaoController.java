package com.example.prova_qa_dixi.controller;

import com.example.prova_qa_dixi.model.Marcacao;
import com.example.prova_qa_dixi.repository.MarcacaoRepository;
import com.example.prova_qa_dixi.service.MarcacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/")
class MarcacaoController {

    @Autowired
    public MarcacaoRepository marcacaoRepository;
    @Autowired
    public MarcacaoService marcacaoService;

    @GetMapping("/hello")
    public ResponseEntity<Map<String, String>> helloWord() {
        return ResponseEntity.ok(Map.of("message", "Hello World!"));
    }

    @GetMapping(path = "/all")
    public Iterable<Marcacao> listarMarcacoes() {
        return marcacaoRepository.findAll();
    }


    @PostMapping("/marcacoes")
    public ResponseEntity<Marcacao> criarMarcacao(@RequestBody Marcacao marcacao) {

        Marcacao marcacaoSalva = marcacaoService.add(marcacao);
        return new ResponseEntity<>(marcacaoSalva, HttpStatus.CREATED);
    }
}
