const mongoose = require("mongoose");
const Tarefa = require("../models/model_tarefas");

async function validarDados(req, res, next) {
  const tarefa = new Tarefa(req.body);
  try {
    await tarefa.validate();
    next();
  } catch (err) {
    res.status(422).json({ msg: "Dados da tarefa inválidos" });
  }
}

async function criar(req, res) {
  const tarefa = await Tarefa.create(req.body);
  res.status(201).json(tarefa);
}

async function obterTodas(req, res) { 
  const tarefas = await Tarefa.find({});
  res.json(tarefas);
}

async function buscarPeloId(req, res, next) {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const tarefa = await Tarefa.findOne({ _id: id });
    if (tarefa) {
      next();
    } else {
      res.status(404).json({ msg: "Tarefa não encontrada" });
    }
  } catch (err) {
    res.status(400).json({ msg: "Id inválido" });
  }
}

async function obter(req, res) {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const tarefa = await Tarefa.findOne({ _id: id });
  res.json(tarefa);
}

async function atualizar(req, res) {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const tarefa = await Tarefa.findOneAndUpdate({ _id: id }, req.body);
  res.json(tarefa);
}

async function remover(req, res) {
  const id = new mongoose.Types.ObjectId(req.params.id);
  await Tarefa.findOneAndDelete({ _id: id });
  res.status(204).end();
}

module.exports = {
  validarDados,
  criar,
  obterTodas,
  buscarPeloId,
  obter,
  atualizar,
  remover,
};
