# CRUD de Anotações  

Este projeto é um sistema simples de **CRUD de anotações** (Create, Read, Update, Delete).  
Ele permite que o usuário crie, edite, visualize e exclua anotações de forma prática, com persistência em banco de dados local.  

---

## Tecnologias utilizadas
- **Frontend:** [React](https://reactjs.org/)  
- **Backend:** [NestJS](https://nestjs.com/)  
- **Banco de Dados:** [SQLite](https://www.sqlite.org/) (com TypeORM)  
- **Comunicação:** API REST com [Axios](https://axios-http.com/)  

---

##  Estrutura do projeto
```
backend   -> API em NestJS (rotas, serviços, banco)
frontend  -> Interface do usuário em React
```

---

## Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Rodar o Backend
```bash
cd backend
npm install
npm run start:dev
```
O servidor será iniciado em **http://localhost:3000**  

### 3. Rodar o Frontend
```bash
cd frontend
npm install
npm start
```
A aplicação React será iniciada em **http://localhost:3001**  

Certifique-se de que o **backend esteja rodando antes do frontend**.  

---

## Como foi feito
1. O **backend em NestJS** foi configurado com banco local SQLite via TypeORM.  
   - Entidade principal: `Note` (id, conteúdo, data de criação).  
   - Endpoints da API:  
     - `POST /notes` → criar anotação  
     - `GET /notes` → listar anotações  
     - `PATCH /notes/:id` → editar anotação  
     - `DELETE /notes/:id` → excluir anotação  

2. O **frontend em React** se comunica com o backend via Axios.  
   - Lista todas as anotações em cards  
   - Permite criar, editar e excluir  
   - Layout responsivo, com rolagem em textos longos e botão de excluir destacado  

3. O **banco SQLite** garante persistência local sem necessidade de instalação de um servidor de banco de dados.  

