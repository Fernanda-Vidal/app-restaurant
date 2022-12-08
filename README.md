<h1>Sobre o projeto</h1>

<div align="justify">
O projeto consiste no backend de uma aplicação para um restaurante que possui tablets nas mesas, para que os clientes façam seus pedidos. Foi desenvolvida uma API Restfull que consome um banco de dados relacional, utilizando Node.js, Express, Typescript e MySQL. As três rotas da aplicação foram testadas utilizando mocha, chai e chai-Http.
</div>

<h2>Pré-requisitos</h2>

<div align="justify">
Para rodar o projeto, é necessário possuir MySQL e Node.
</div>

<h2>Como iniciar o projeto</h2>

<div align="justify">
Após clonar o projeto, rode o comando 'npm install' na raiz e configure as variáveis de ambiente, de acordo com o arquivo .env.example. Inicie o banco de dados utilizando o arquivo 'concent.sql'.

No diretório backend rodar o comando 'npm run dev' e realizar as requisições através de alguma ferramenta de requisições HTTP.

Para rodar os testes da aplicação, rodar o comando 'npm test' no diretório backend.
</div>

<h1>Endpoints</h1>
<br>
<h2>Customer:</h2>

<div align="justify">

- para buscar um cliente:
  GET localhost:3030/customer/:id
<br>

- para fazer o login:
  POST localhost:3030/customer
<br>

- para buscar todos os clientes:
  GET localhost:3030/customer

</div>
<br>

<h2>Dishes:</h2>

<div align="justify">

- para aplicar um filtro pratos ativos:
  GET localhost:3030/dishes/search?q=active
<br>

- para aplicar um filtro por categoria(bebidas, pratos quentes ou pratos frios):
  GET localhost:3030/dishes/search?q=bebidas
<br>

- para inativar um prato (este endpoint não deleta):
  DELETE localhost:3030/dishes/:id
<br>

- para atualizar um prato: 
  PUT localhost:3030/dishes/:id

  Enviar no corpo da requisição um objeto no seguinte contendo a chave(coluna) e o valor a ser atualizado. No seguinte formato: 

      {
          "key": "photo",
          "value": "50"
      }
<br>

- para criar um prato:
  POST localhost:3030/dishes/

  Enviar no corpo da requisição um objeto no seguinte no seguinte formato: 

      {
          "title": "Poke",
          "category": "Pratos Frios",
          "price": 25.00,
          "photo": "https://www.casalcozinha.com.br/shimena-2-1300x825.jpg",
          "finishIn": 15
        }
<br>

- para buscar todos os pratos:
  GET localhost:3030/dishes/

</div>
<br>

<h2>Order:</h2>

<div align="justify">

- para atualizar o status do pedido (Pedido realizado, Em preparo, Finalizado):
  PUT localhost:3030/order/:id/update?q=Finalizado
<br>

- para buscar um pedido pelo seu id:
  GET localhost:3030/order/:id
<br>

- para buscar todos os pedidos que ainda não foram finalizados:
  GET localhost:3030/order/
<br>

- para criar um novo pedido:
  POST localhost:3030/order/

  enviar no corpo da requisição um objeto no seguinte no seguinte formato: 

      {
        "customer_id": 2,
        "dishes": [
          {
          "dish_id": 2,
          "quantity":1
          }, 
          {
          "dish_id": 3,
          "quantity":3
          }
        ]
      }
</div>
