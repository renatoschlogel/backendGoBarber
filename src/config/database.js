module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,   // savar nome das tabelas com _ ex : Model: nomeTabela tabela nome_tabela
    underscoredAll: true  // mesmo de cima, só que as colunas
  }
}