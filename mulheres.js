const express =  require("express");
const router = express.Router();

const app = express();
const porta = 3333;

const mulheres = [
	{
		nome: 'Ada Lovelace',
		imagem: 'https://www.alura.com.br/artigos/assets/mulheres-historia-tecnologia-programacao/ada-lovelace.jpg',
		minibio: 'Criadora do primeiro algoritmo de programação'
	},
	{
		nome: 'Grace Hopper',
		imagem: 'https://www.alura.com.br/artigos/assets/mulheres-historia-tecnologia-programacao/grace-hopper.jpg',
		minibio: 'Criadora do termo bug'
	},
	{
		nome: 'Carol Shaw',
		imagem: 'https://www.alura.com.br/artigos/assets/mulheres-historia-tecnologia-programacao/carol-shaw.jpg',
		minibio: 'Pioneira no desenvolvimento de jogos'
	}
]

function mostraMulheres(request, response) {
	response.json(mulheres);
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get("/mulheres", mostraMulheres));
app.listen(porta, mostraPorta);