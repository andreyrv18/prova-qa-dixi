package com.example.prova_qa_dixi.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/time")
public class ServerTimeController {

    @GetMapping("/sync")
    public ResponseEntity<Map<String, Long>> serverTime() {
        long serverTime = System.currentTimeMillis();

        Map<String, Long> response = Map.of("server time", serverTime);

        return ResponseEntity.ok().header("Cache-Control", "no-store, max-age=0").body(response);
    }
}
