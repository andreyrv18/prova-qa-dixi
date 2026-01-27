package com.example.prova_qa_dixi.service;

import com.example.prova_qa_dixi.model.Marcacao;
import com.example.prova_qa_dixi.repository.MarcacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.UUID;

@Service
public class MarcacaoService {

    private final String UPLOAD_DIR = "uploads/";
    private final long MINUTO_EM_MILISEGUNDOS = 60000;
    @Autowired
    private MarcacaoRepository marcacaoRepository;

    public Marcacao add(Marcacao novaMarcacao) {
        try {
            if (novaMarcacao.getImagemUrl() != null && !novaMarcacao.getImagemUrl().isEmpty()) {
                String caminhoDoArquivo = salvarImagemEmUploads(novaMarcacao.getImagemUrl());
                novaMarcacao.setImagemUrl(caminhoDoArquivo);
            }

            String status = "considerado";
            Marcacao ultimaMarcacao = marcacaoRepository.findTopByStatusOrderByDataMarcacaoDesc(status);

            if (ultimaMarcacao != null) {
                long marcacaoAtual = novaMarcacao.getDataMarcacao().getTime();
                long marcacaoAnterior = ultimaMarcacao.getDataMarcacao().getTime();

                long diferenca = marcacaoAtual - marcacaoAnterior;

                if (diferenca < MINUTO_EM_MILISEGUNDOS && diferenca >= 0) {
                    status = "desconsiderado";
                }
            }

            novaMarcacao.setStatus(status);
            return this.marcacaoRepository.save(novaMarcacao);
        } catch (Exception e) {
            throw new RuntimeException("Erro ao salvar marcacao: " + e.getMessage());
        }

    }

    private String salvarImagemEmUploads(String base64String) throws Exception {
        Path uploadPath = Paths.get(UPLOAD_DIR);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }
        String fileName = UUID.randomUUID() + "_" + System.currentTimeMillis() + ".jpg";
        Path filePath = uploadPath.resolve(fileName);

        String partePuraBase64;
        if (base64String.contains(",")) {
            partePuraBase64 = base64String.split(",")[1];
        } else {
            partePuraBase64 = base64String;
        }


        byte[] decodedBytes = Base64.getDecoder().decode(partePuraBase64);

        try (OutputStream out = Files.newOutputStream(filePath)) {
            out.write(decodedBytes);
        }
        return UPLOAD_DIR + fileName;
    }
}
