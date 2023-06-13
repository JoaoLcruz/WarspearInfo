var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/graficos", function (req, res) {
    graficoController.buscarResultadosFaccao(req, res)
})

router.get("/graficos2", function (req, res) {
    graficoController.buscarResultadosRaca(req, res)
})

router.post("/quiz", function (req, res) {
    graficoController.PostarPonto(req, res)
})

router.get("/quizValores",  function (req, res) {
    graficoController.PegarValores(req, res)
})
module.exports = router;