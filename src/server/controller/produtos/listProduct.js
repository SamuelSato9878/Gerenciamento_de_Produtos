const Produto = require("../../database/modelProduto");

exports.listProduct = async (req, res) => {
    try {

        const produtos = await Produto.findAll();

        if (produtos.length > 0) {
            return res.status(200).json(produtos);
        } else {
            return res.status(404).json({ message: 'Nenhum produto encontrado' });
        }
        
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Ocorreu um erro ao listar o produto." });
    }
}
