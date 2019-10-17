# Naja API

Esse repositório é destinado ao desenvolvimento da API do gerenciamento de estoque da loja Naja.

A abordagem utilizada no desenvolvimento dessa API, ou seja, o padrão do projeto, foi o MVC(Model, View, Controller). Nele, são definidos os modelos dos elementos que compõem a aplicação em estruturas chamadas Models. Todas as funcionalidades relacionadas a cada modelo, fica isolada em estruturas conhecidas como Services. Já a ligação entre as requisições HTTP e todo o sistema, fica restrito ao que conhecemos por Controllers, que é o responsável por criar uma ponte entre o cliente e o servidor.

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
