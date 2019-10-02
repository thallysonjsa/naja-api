# Naja API

<h2>Todas requisições são feitas nessa url: </h2>
<p>https://najapp.herokuapp.com/</p>

Requisição| URL | Body | Params | Retorno
----------|------|------|-----------|--------
GET | /products/ | | | lista de todos os produtos cadastrados.
POST | /products/ | name, price, quantity, category, image | | retorna o produto cadastrado.
DELETE | /products/ | id | | retorna o produto removido.
PUT | /products/ | id, quantity | type | retorna o produto com sua quantidade atualizada.
GET | /products/search | | category | retorna todos os produtos da categoria, ordenados por quantidade.
POST | /users/oauth/google | access_token | | retorna o token de validação do usuário.