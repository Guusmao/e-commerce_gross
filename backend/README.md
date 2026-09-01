# 🚀 Projeto Back-End

API back-end desenvolvida com Node.js utilizando Express, Sequelize e PostgreSQL (Supabase).

## 📌 Sobre o projeto

Este projeto tem como objetivo fornecer uma API REST para gerenciamento de dados, com autenticação via JWT e integração com banco de dados PostgreSQL hospedado no Supabase.

## 🛠️ Tecnologias utilizadas

- Node.js  
- Express  
- Sequelize (ORM)  
- PostgreSQL (Supabase)  
- JWT (JSON Web Token)  
- Dotenv  
- Nodemon  

## 📁 Estrutura do projeto

projeto-back-end/

src/
  config/        # Configurações do banco
  controllers/   # Lógica das rotas
  models/        # Modelos do Sequelize
  routes/        # Definição de rotas
  server.js      # Arquivo principal

tests/           # Testes
.env             # Variáveis de ambiente
.gitignore
package.json

## ⚙️ Configuração do ambiente

### 1. Clone o repositório

git clone <url-do-repositorio>  
cd projeto-back-end  

### 2. Instale as dependências

npm install  

### 3. Configure o arquivo .env

PORT=3000  

DB_HOST=seu_host  
DB_USER=seu_usuario  
DB_PASSWORD=sua_senha  
DB_NAME=seu_banco  

JWT_SECRET=sua_chave_secreta  

## ▶️ Como rodar o projeto

npm run dev  

## 🔐 Autenticação

Authorization: Bearer seu_token_aqui  

## 👨‍💻 Autor

Desenvolvido por Guusmão 🚀# projeto-back-end-gt3
