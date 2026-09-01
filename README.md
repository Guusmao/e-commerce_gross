# Gross E-commerce (front + back juntos)

Este repositório junta os dois projetos num só lugar:

```
gross-ecommerce/
├── frontend/   -> React + Vite + Tailwind (a loja em si)
└── backend/    -> Node + Express + Sequelize + PostgreSQL (Supabase)
```

## Como rodar

**Backend** (precisa estar rodando primeiro, na porta 3001):
```bash
cd backend
npm install
npm run dev
```
O `.env` já está configurado (Supabase + JWT). Confirme se `PORT=3001` está lá — é a porta que o front espera.

**Frontend**:
```bash
cd frontend
npm install
npm run dev
```
Abre em `http://localhost:5173`. Ele já aponta para `http://localhost:3001/v1` (arquivo `frontend/src/services/api.js`).

## O que já está integrado
- **Login** (`/login`): já bate 100% com a rota `POST /v1/usuario/token` do backend.
- **Cadastro** (`/register` → `/completar-cadastro`): ajustei o formulário para chamar de verdade `POST /v1/usuario` e, em seguida, logar automaticamente o usuário. Só um detalhe: o backend pede `firstname`/`surname` separados, mas o formulário só tem "nome completo" — então eu divido o nome no primeiro espaço. Vale revisar se isso é aceitável ou se o formulário deveria ter dois campos.

## O que ainda NÃO está integrado (pendências)
- **Endereço do cliente**: o formulário de cadastro pede CPF, celular, endereço, bairro, cidade, CEP e complemento, mas o backend não tem essas colunas — hoje esses dados são digitados e descartados (não são enviados). Precisa decidir se cria uma tabela de endereços no backend ou se remove esses campos do formulário por enquanto.
- **Produtos**: o front ainda usa o arquivo mockado `frontend/src/data/products.js`. Os campos não batem com o modelo real do backend (marca, gênero, condição, avaliação/estrelas e produtos relacionados não existem no backend). Antes de conectar a listagem/detalhe de produto na API real, é preciso decidir: adaptar as telas para os campos que o backend já tem, ou estender o backend com os campos que faltam.
- **Pedidos, carrinho persistente, pagamento e frete**: não existem no backend ainda. A tela "Meus Pedidos" e o checkout continuam sem integração real.
