# Go Barber API


## Roteiro da Construção (Ao final sera transferido para o notion):

  1. Adicionar a lib uuidv4 para gerar o id : yarn add uuidv4;
  2. lib para trabalhar com datas e horarios : yarn add date-fns


## Criando container docker com postgres:

  1. criando: docker container run --name gostack_postgress -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres;
  2. Startando container já criado: docker container start gostack_postgress;


## Configurando o typeORM

  1. Criar arquivo ormconfig.json na raiz do projeto;
  2. insatalar o typeorm e o driver do postgres : yarn add typeorm pg;
  3. instalar o reflect-metadata : yarn add reflect-metadata
  4. Importar o reflect-metadata no server.ts
  5. fazer apontamento da pasta do models no ormconfig.json
  ```
        "entities": [
          "./src/models/*.ts"
        ],
  ```

### Comando typeorm:
  obs: ver script typeorm no packeage.json
  1. criar migration       : yarn typeorm migration:create -n CreateAppointments;
  2. Executar as migrations: yarn typeorm migration:run;
  3. desfazer a ultima migration: yarn typeorm migration:revert;
  4. Listar a migrations executadas: yarn typeorm migration:show


## Criptogaafia de senha
  1. yarn add bcryptjs;


## JWT:
  1. yarn add jsonwebtoken;




<hr>
<p align="center"> by Renato Welinton Schlogel </p>
