const mongoose = require('mongoose');
require('dotenv').config();

async function conectaBancoDeDados(){
	try {
		console.log("banco de dados foi iniciado");

		await mongoose.connect(process.env.MONGO_URL);

		console.log("banco de dados iniciado com sucesso!")

	} catch(e){
		console.log("erro")
	}
}

module.exports = conectaBancoDeDados;