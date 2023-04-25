const express =  require("express");
const router = express.Router();

const app = express();
const porta = 3333;

function mostraMulher(request, response) {
	response.json({
		nome: 'Kamilla Aragao',
		imagem: 'https://avatars.githubusercontent.com/u/90700215?v=4',
		minibio: 'Chatbot Developer Intern'
	})
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)