# 🐾 API de Pets – Creche para Animais

## 📌 Apresentação

Este projeto consiste no desenvolvimento de uma **API REST para gestão de animais em uma creche para pets**. A aplicação foi construída utilizando **Node.js** e **Express.js**, com testes realizados via **Postman**.

A API de Pets representa uma excelente oportunidade para colocar em prática conceitos fundamentais do desenvolvimento backend, como **CRUD completo**, **middlewares**, **tratamento de erros** e **boas práticas de organização de código**.

Além disso, este projeto compõe um **portfólio profissional**, demonstrando a capacidade de desenvolver uma API REST funcional e bem estruturada, o que pode agregar valor em processos seletivos e futuras oportunidades na área de desenvolvimento web.

## 🎯 Objetivo do Projeto

Desenvolver uma API REST capaz de gerenciar pets de uma creche, permitindo:

- Cadastro de pets
- Consulta de pets
- Atualização de dados
- Exclusão de registros

Tudo isso seguindo boas práticas de desenvolvimento e organização de código.

## ⚙️ Tecnologias Utilizadas

- **Node.js** – Execução do JavaScript no ambiente server-side  
- **Express.js** – Framework para criação da API REST  
- **Middlewares** – Validação e processamento de requisições  
- **GitHub** – Versionamento e hospedagem do código  
- **Postman** – Testes e documentação das rotas da API  
- **Render** – Deploy da aplicação em produção  

## 📋 Pré-requisitos

Para melhor compreensão e desenvolvimento do projeto, é recomendado conhecimento prévio em:

- JavaScript (ES6+)
- Node.js
- Express.js
- Conceitos de APIs REST
- Git e GitHub
- Postman

## 🐶 Estrutura do Pet

Cada Pet é representado pelos seguintes campos:

- **id**: UUID  
- **nome**: String  
- **raça**: String  
- **idade**: Number  
- **nomeTutor**: String  

## 🔄 Funcionalidades da API

A API oferece um CRUD completo para o gerenciamento de pets:

- **GET** `/pets` – Lista todos os pets  
- **POST** `/pets` – Cadastra um novo pet  
- **GET** `/pets/:id` – Busca um pet pelo ID  
- **PUT** `/pets/:id` – Atualiza os dados de um pet  
- **DELETE** `/pets/:id` – Remove um pet  

## 🧠 Regras e Requisitos Atendidos

✔ Projeto criado com Node.js e Express.js  
✔ Armazenamento dos dados em um arquivo próprio (ex: `pets.js` ou `dados.js`)  
✔ Uso de **middlewares** para validação de dados nas rotas POST e PUT  
✔ Tratamento de erros em todas as rotas  
✔ Testes e documentação realizados no Postman  
✔ Repositório público no GitHub  
✔ Deploy da API realizado no Render  

## 🚀 Como Executar o Projeto Localmente

```bash
# Instalar dependências
npm install

# Executar o servidor
npm run dev

# O servidor estará disponível em:
http://localhost:3000
```

## 📬 Documentação da API

A documentação completa das rotas está disponível no Postman, incluindo exemplos de requisições e respostas.

🔗 **Acesse a documentação:** [https://documenter.getpostman.com/view/22428670/2sBXVhBq7D](https://documenter.getpostman.com/view/22428670/2sBXVhBq7D)

## 🌐 Deploy

A API está disponível em produção através do Render.
 
🔗 **Acesse a aplicação:** [https://growdev-api-pets.onrender.com](https://growdev-api-pets.onrender.com)
