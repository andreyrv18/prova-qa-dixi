package com.example.prova_qa_dixi.repository;

import com.example.prova_qa_dixi.model.Marcacao;
import org.springframework.data.repository.CrudRepository;

public interface MarcacaoRepository extends CrudRepository<Marcacao, Long> {

    Marcacao findTopByStatusOrderByDataMarcacaoDesc(String status);
}