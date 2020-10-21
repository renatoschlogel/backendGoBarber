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

## upload de imagens:
  1. yarn add multer;
  2. Enviar imagem com o tipo MultPart Form;

## Tratamento de exceções;
 1. yarn add express-async-errors;


# Area de negócio

## Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por e-mail para resetar a senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

## Atualização do perfil

**RF**

- O usuário deve poder atualizar seu perfil

**RN**

- O usuário não pode alterar seu email para um email ja utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

## Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações;

**RNF**

- Os agendamentos do prestador devem no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no mongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;



## Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horarios disponiveis em um dia especifico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponiveis entre as 8h e 18h;
- O usuário não pode agendar em um horario já ocupado;
- O usuário não pode agendar em um horario que já passou;
- O usuário não pode agendar em um horario consigo mesmo;







<hr>
<p align="center"> by Renato Welinton Schlogel </p>
