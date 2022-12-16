
![Logo](https://i.postimg.cc/PrN1p3Fn/postinho-amigo-com-stroke-do-git.png)


# Postinho Amigo

Essa API tem como objetivo catalogar e listar postinhos do SUS com farmácia para distribuição de remédios, incluindo comuns e psicossomáticos.



## Authors

- Hanna Gonçalves ([@HannaGon](https://github.com/HannaGon))


## Rotas

#### Lista de rotas padrão da API

| Rota | Caminho     | Descrição                |
| :-------- | :------- | :------------------------- |
| `GET` | `/posto/lista` | Retorna **todos** os postos cadastrados. |
| `GET`      | `/posto/busca/:id` | Retorna apenas o posto com o **id**enviado. |
| `POST` | `/posto/cadastro` | Cadastra novo posto no sistema. **Autenticação necessária**.|
| `PATCH`      | `/posto/atualizar/:id` | Atualiza posto cadastrado **Autenticação necessária** |
| `DELETE` | `/posto/apagar/:id` | Apaga cadastro de posto **Autenticação necessária** |

#### Lista de rotas de autenticação da API

| Rota | Caminho     | Descrição                |
| :-------- | :------- | :------------------------- |
| `POST`      | `/posto/u/cadastro` | Cadastra novo usuário no sistema |
| `POST` | `/posto/u/login` | Efetua login de usuário para rotas com Autenticação |

## Variáveis de ambiente

Para rodar este projeto, é necessário adicionar as seguintes variáveis em seu arquivo .env

`MONGO_URI` Banco de dados

`JWT_SECRET` Secret para geração de token em login

`PORT` Porta de saída para o servidor


## Feedback

Para dúvidas e sugestões, favor entrar em contato através de hanna.goncalves.pro@gmail.com

