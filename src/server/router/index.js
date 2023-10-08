const express = require("express");
const ControleProduto = require("../controller/produtos");

const router = express.Router();

router.post("/Cadastro", ControleProduto.registerProduct); 

router.get("/Procurar", ControleProduto.searchProduct);

router.put("/Atualizar", ControleProduto.updateProduct)

router.delete("/DeleteProduto", ControleProduto.deleteProduct);

router.get("/Listar", ControleProduto.listProduct);

module.exports = router;

