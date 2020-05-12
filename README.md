# Go Barber API


## Roteiro da Construção (Ao final sera transferido para o notion):

  1. Adicionar a lib uuidv4 para gerar o id : yarn add uuidv4;
  2. lib para trabalhar com datas e horarios : yarn add date-fns


## Criando container docker com postgres:

  1. criando: docker container run --name gostack_postgress -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres;
  2. Startando container já criado: docker container start gostack_postgress;


## Configurando o typeORM

  1. Criar arquivo ormconfig.json na raiz do projeto;
  2. inatalar o typeorm e o driver do postgres : yarn add typeorm pg;








<hr>
<p align="center"> by Renato Welinton Schlogel </p>
