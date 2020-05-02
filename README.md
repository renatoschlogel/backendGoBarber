# gostack-n2-primeiro-projeto-node - Primeiro projeto com Node.js e TypeScript

###### Este projeto, é um passo a passo para a criação de um projeto em NodeJs com TypeScript, utiliando ferramentas  ts-node-dev, ESLint, Prettier e EditorConfig, o de forma a padronizar o o desenvolvimento entre todos os desenvolvedores. Também possui possui a explicação da utilização do Debug no VSCode.
 
 
## Tecnologias utilizadas
  - NodeJs;
  - TypeScript;
  - Yarn;
  - Express;
  - ESLint;
  - Prettier;
  - ts-node-dev;
  - EditorConfig;
  
  
## Utilizando este Projeto:

   1. Fazer o clone no mesmo;
   2. Acessar a parta do projetos e instalar as dependencias: yarn install;
   3. Executar a aplicação como dev: yarn dev:server;
   4. Acessar a aplicação no navegado : http://localhost:3333
   
###### Buildar o projeto: yarn build
   Ao fazer o build da apricação, sera criado a pasta dist, na raiz do projeto, com a mesma estrutura que a srv, com os fontes buildados;
  
  
## Passado a passo utilizado para a construção e configuração deste projeto

### Configurando Estrutura

  Criando e configurando um projeto node com typescript

  1. Criar pasta e acessa-la;
  2. iniciar projeto node     : yarn init -y;
  3. Adicionar express        : yarn add express;
  4. Adicionar o typescript   : yarn add typescript -D;
  5. iniciar configuração do typescript (tsconfig.json): yarn tsc --init;
  6. Criar pasta src ;
  7. apostar esta pasta no tsconfig.json;
     "outDir": "./dist",
     "rootDir": "./src",
  8. Comando para converter os qrquivos ts em js: yarn tsc;
  9. instalar a lib de tipos do express: yarn add @types/express -D;
  10. Adicionar ts-node-dev: yarn add ts-node-dev -D;
  11. Configurar Scrips build e dev:server  no package.json;
  12. utilizar o comando a seguir par starta o server de dev: yarn dev:server;


### EditorConfig

  Ferramenta para padronizar configurações entre diferentes editores de codigo;

  1. Instalar plugin EditorConfig no VcCode;
  2. Clicar com botão direito na raiz do projeto e e selecionar o Generate .editorConfig;
    * sera gerado o arquivo .editorConfig;


### ESLint

  Ferramenta para padronização de codigo do projeto;

  1. Instalar o ESLint : yarn add eslint -D;
  2. Iniciar ESlint no projeto : yarn eslint --init;

    1. How would you like to use ESLint? To check syntax, find problems,   and enforce code style
    2. What type of modules does your project use? JavaScript modules (import/export)
    3. Which framework does your project use? None of these
    4. Does your project use TypeScript? Yes
    5. Where does your code run? Node
    6. How would you like to define a style for your project? Use a popular style guide
    7. Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
    8. What format do you want your config file to be in? JSON
    9. Would you like to install them now with npm? No
    10. yarn add -D  @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.20.1 @typescript-eslint/parser@latest
  3. para automatizar os ajuste, no settings.json do seu editor, incluir as seguintes configurações:
```
   "[javascript]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
    "[javascriptreact]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
    "[typescript]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
    "[typescriptreact]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
```

### Importando Arquivos TS

  1. Adiconar a biblioteca a seguir: yarn add -D eslint-import-resolver-typescript;
  2. Incluir no arquivo .selintrc.json a seguinte configuração:
  ```
    "settings": {
      "import/resolver": {
        "typescript": {}
      }
    }
  ```

  3.No objeto rules do .selintrc.json incluir a config abaixo para não precisar incluir a estenxao ts nos import;
```  
    "import/extensins": [
      "error",
      "ignorePackages",
      {
        "ts": "never"
      }
    ]
 ```

### Prettier

  Ferramenta para deixar o código mais Bonito;

  1. Adicionar as sequintes dependencias:
     yarn add -D prettier eslint-config-prettier eslint-plugin-prettier;
  2. Adicionar as regras a seguir no extends do arquivo .eslintrc.json:
```
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
```
  3. Adicionar o plugin "prettier" no .eslintrc.json;
  4. Adicionar o o rule "prettier/prettier": "error", no .eslintrc.json;
  5. Criar na raiz do projeto o arquivo  prettier.config.js com o seguinte conteudo:
```
    module.exports = {
      singleQuote: true, // utilizar aspas simples
      trailingComma: 'all', // incluir vigula o ultimo  value dos objetos
      arrowParens: 'avoid', // não colocar () em arrow Functions com apenas um parametro
    };
 ```
  6. Criar .eslintignore na raiz do projeto com o seguinte conteudo:```
```
    /*.js
    node_modules
    dist
 ```

### Debugando NodeJS (VSCode)

  1. Na opção de Debug e mandar criar o .vscode/launch.json (ver configuração no arquivo);
  2. No script dev:server incluir a flag --inspect



<hr>
<p align="center"> com :green_heart: Renato Welinton Schlogel </p>




