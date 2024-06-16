const express = require("express");

const controllerTarefas = require("../controllers/controller_tarefas");

const validarToken = require('../middlewares/auth');

const router = express.Router();

router.post("/", controllerTarefas.validarDados, controllerTarefas.criar);

router.get("/", validarToken, controllerTarefas.obterTodas);

router.get("/:id", controllerTarefas.buscarPeloId, controllerTarefas.obter);

router.put(
  "/:id",
  controllerTarefas.buscarPeloId,
  controllerTarefas.validarDados,
  controllerTarefas.atualizar 
);

router.delete("/:id", 
  controllerTarefas.buscarPeloId,
  controllerTarefas.remover
);

module.exports = router;
