const express =  require("express");
const router = express.Router();
const cors =  require('cors');
 	
const conectaBancoDeDados = require('./bancoDeDados');
conectaBancoDeDados();

const Mulher = require('./mulherModel');

const app = express();
app.use(express.json())
const porta = 3333;
app.use(cors());

//Method GET
async function mostraMulheres(request, response) {
	try{
		const mulherVindasDoBancoDeDados = await Mulher.find();

		response.json(mulherVindasDoBancoDeDados);		
	}catch(erro){
		console.log(erro)
	}
}

//Method POST
async function criaMulher(request, response) {
	const novaMulher = new Mulher({
		nome: request.body.nome,
		imagem: request.body.imagem,
		minibio: request.body.minibio,
		citacao: request.body.citacao
	})

	try{
		const mulherCriada = await novaMulher.save();
		response.status(201).json(mulherCriada);

	}catch(erro){
		console.log(erro)
	}
}

//Method PATCH
async function corrigeMulher(request, response) {
	try{
		const mulherEncontrada = await Mulher.findById(request.params.id);

		if(request.body.nome){
			mulherEncontrada.nome = request.body.nome;
		}
		if(request.body.imagem){
			mulherEncontrada.imagem = request.body.imagem;
		}
		if(request.body.minibio){
			mulherEncontrada.minibio = request.body.minibio;
		}
		if(request.body.citacao){
			mulherEncontrada.citacao = request.body.citacao;
		}

		const mulherAtualizada = await mulherEncontrada.save();
		response.json(mulherAtualizada);

	}catch(erro){
		console.log(erro);
	};
}

//Method DELETE
async function deletaMulher(request, response){
	try{
		await Mulher.findByIdAndDelete(request.params.id);

		response.json({messagem: 'Mulher foi deletada com sucesso!'});
	}catch(erro){
		console.log(erro)
	}
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulheres', mostraMulheres));
app.use(router.post('/mulheres', criaMulher));
app.use(router.patch('/mulheres/:id', corrigeMulher));
app.use(router.delete('/mulheres/:id', deletaMulher));


app.listen(porta, mostraPorta);