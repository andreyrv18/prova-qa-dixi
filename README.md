# Documentação

## Instalando Dependências

- clone o projeto:

  ```bash
  git clone git@github.com:andreyrv18/prova-qa-dixi.git
  cd prova-qa-dixi
  ```

## Executando aplicação

  > Docker

- Para usar o MySQL com Docker realize o comando na raiz do monorepo `prova-qa-dixi`
  
  ```bash
  docker compose up -d
  ```

- Para rodar sem utilizar docker utilize:

  > Back-end a partir da pasta raiz

    ```bash
    cd ./backend/prova-qa-dixi/

    mvn spring-boot:run
    ```

  > Front-end a partir da pasta raiz

    ```bash
     cd ./frontend/

    npm install
    
    next dev
    ```

## Referencias

### Java
[Converting-Base-encoded-String-Image](https://coderanch.com/t/482256/java/Converting-Base-encoded-String-Image)
[Escrever arquivos em Java - dev.java](https://dev.java/learn/modernio/#writing-text-files)

### Relógio monotônico

[Performance.now() - Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)

[Nível de tempo de alta resolução 2](https://www.w3.org/TR/hr-time-2/)

---

### Utiliza Convencional Commits para padronizar a forma que é feito os commits

[Convencional Commits Site](https://www.conventionalcommits.org/en/v1.0.0/#specification)

---
### Algoritmo De Cristian
[Github - Filipe Navas](https://github.com/FilipeNavas/AlgoritmoDeCristian/tree/master)

[Github - Nicolas Matos](https://github.com/nicolasmatos/algoritmoCristian/tree/master)

[Ceretta - Sincronização](https://www-usr.inf.ufsm.br/~ceretta/elc1018/sincronizacao.pdf)