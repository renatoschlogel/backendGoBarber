# Backend Go Barber;

## Configurando a estrutura:
  1. criando projeto               : yarn init;
  2. adicionando o express         : yarn add express;
  3. criar pasta src;
  4. Criar arquivos app.js, routes.js e server.js;  

  - Faz o carregamento automatico das alteracoes feitas;

## Nodemon e Sucrase:
  1. adicionando a dependencias    : yarn add sucrase nodemon -D;
  - Sucrase é utilizado para usar a nova syntaxe (import);
    * requirq -> import
    * module.export -> export default
  - Nodemon faz o carregamento automatico das alteracoes feitas;
  - scripts: 
  ```
   "scripts": {
    "dev": "nodemon src/server.js",
    "dev:debug": "nodemon --inspect src/server.js"
  },
  ```
  - Criar arquivo nodemon.json na raiz e colocar o seguinte conteudo:
  ```
  {
  "execMap": {
    "js": "node -r sucrase/register"
  }
}
  ```
  - no arquivo lauch.json do debug alterar:
  ```
   "request": "attach",
    "protocol": "inspector"
  ```

## ESlint, Prettier & EditorConfig

  * Adicionar a depencia eslint     : yarn add eslint -D
  * iniciar arquivo de configuração : yarn eslint --init
  * Prettier :yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

## Configurando o Sequelize;
  * Adicionando dependencia: yarn add sequelize;
  * Adicionando dependencia: yarn add sequelize-cli -D;

# Cadastro e Autenticação de usuario:

## Migration de Usuario:
  1. Criando a migration        : yarn sequelize migration:create --name=create-users;
  2. rodar migration            : yarn sequelize db:migrate;
  2. defazer a ultima migration : yarn sequelize db:migrate:undo;

## Gerar hash da senha
  1. para criptografar          : yarn add bcryptjs

# JWT - token
  1 . para gerar o token        : yarn add jsonwebtoken;

# Validação dos dados de entrada
  1. para efetuar as validaçãoes: yarn add yup 

