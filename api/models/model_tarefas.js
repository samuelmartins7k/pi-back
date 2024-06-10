const mongoose = require("mongoose");

const tarefaSchema = new mongoose.Schema({
  titulo: { type: String, trim: true, required: true },
  descricao: { type: String, trim: true },
  concluida: { type: Boolean, default: false },
  dataVencimento: { type: Date }
});

module.exports = mongoose.model("Tarefa", tarefaSchema);
