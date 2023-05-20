const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ObjectId } = require('mongodb');
const app = express();

app.use(bodyParser.urlencoded({'extended': false}));
app.use(bodyParser.json());
app.use(cors());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://senac:senha@clusteraula.m9hh2oa.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const db = client.db('kartCRUD');

async function insereElemento(nome, numero, posicao,categoria){
    const pilotos = db.collection('kart');
    const newPiloto = {nome: nome, numero: numero, posicao: posicao, categoria: categoria};
    await pilotos.insertOne(newPiloto);

}

async function editaElemento(_id, nome, numero, posicao, categoria){
    const pilotos = db.collection('kart');
    const filtro = { _id: new ObjectId(_id) };
    const update = { "$set": { nome: nome, numero: numero, posicao: posicao, categoria: categoria } };
    await pilotos.updateOne(filtro, update);

}

async function removeElemento(nome){
    const pilotos = db.collection('kart');
    pilotos.findOneAndDelete({ nome: nome });
}

async function pegaTodos(res){
    const pilotos = await db.collection('kart').find();
    let pilotosres = [];
    for await (let piloto of pilotos){
        pilotosres.push(piloto);
    }
    res.json(pilotosres);
}


app.post('/pilotos', (req, res) => {
    const {nome, numero, posicao, categoria} = req.body;
    insereElemento(nome, numero, posicao, categoria);
    res.json("Inserido");
})

app.delete('/pilotos', (req, res) => {
    const {nome} = req.body;
    removeElemento(nome);
    res.json("Deletado");
})

app.get('/pilotos', (req, res) => {
    pegaTodos(res);
})

app.put('/pilotos', (req, res) => {
    const {_id, nome, numero, posicao, categoria} = req.body;
    editaElemento(_id, nome, numero, posicao, categoria);
    res.json("Editado");
});




app.listen(3001, () => {
    console.log("Servidor online na porta 3001");
})