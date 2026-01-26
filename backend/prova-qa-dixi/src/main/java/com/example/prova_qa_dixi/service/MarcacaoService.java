package com.example.prova_qa_dixi.service;

import com.example.prova_qa_dixi.model.Marcacao;
import com.example.prova_qa_dixi.repository.MarcacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MarcacaoService {


    private MarcacaoRepository marcacaoRepository;

    public Marcacao marcacaoService(Marcacao marcacao) {
//        System.out.println(marcacao);
//        saved = marcacaoRepository.save(marcacao);
        return marcacaoRepository.save(marcacao);

    }
}
