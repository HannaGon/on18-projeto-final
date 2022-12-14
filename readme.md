
![Logo](https://i.postimg.cc/g06Xz4wg/projetofinal-postoamigo-on18.png)


# Postinho Amigo

Essa API tem como objetivo catalogar e listar postinhos do SUS com farmácia para distribuição de remédios, incluindo comuns e psicossomáticos.



## Authors

- Hanna Gonçalves ([@HannaGon](https://github.com/HannaGon))


## Rotas

#### GET - Lista todos os postos

```http
  GET /posto/lista
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `N/A` | `N/A` | Retorna **todos** os postos cadastrados. |

#### GET - Busca por ID

```http
  GET /posto/busca/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Retorna apenas o posto com o **id**enviado. |

### POST - Cadastrar novo posto

```http
  POST /posto/cadastro
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `body` | `object` | Cadastra novo posto no sistema. **Autenticação necessária**.|

#### PATCH - Atualizar posto

```http
  PATCH /posto/atualizar/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `body`      | `object` | Atualiza posto cadastrado **Autenticação necessária** |

### DELETE - Apaga cadastro de posto

```http
  GET /posto/apagar/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | Apaga cadastro de posto **Autenticação necessária** |

#### POST - Cadastro de usuário

```http
  POST /posto/u/cadastro
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `body`      | `object` | Cadastra novo usuário no sistema |

### POST - Login de usuário
```http
  POST /posto/u/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `body` | `object` | Efetua login de usuário para rotas com Autenticação |

## Variáveis de ambiente

Para rodar este projeto, é necessário adicionar as seguintes variáveis em seu arquivo .env

`MONGO_URI` Banco de dados

`JWT_SECRET` Secret para geração de token em login

`PORT` Porta de saída para o servidor


## Feedback

Para dúvidas e sugestões, favor entrar em contato através de hanna.goncalves.pro@gmail.com

