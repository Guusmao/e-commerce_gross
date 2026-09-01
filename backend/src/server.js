const app = require('./app');
// 1. Importe a instância da classe Database
const database = require('./database');

const PORT = process.env.PORT || 3001;

// 2. Autentique no banco de dados e inicie o servidor
database.connection.authenticate().then(() => {
  app.listen(PORT, () => {
    console.log(`\n✅ Servidor rodando na porta ${PORT}`);
    console.log('✅ Banco de dados conectado com sucesso.');
  });
}).catch(err => {
  console.error('❌ Não foi possível conectar ao banco de dados:', err);
});