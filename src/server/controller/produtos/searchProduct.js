const Produto = require("../../database/modelProduto");

exports.searchProduct = async (req, res) => {
    try {

        const produto = await Produto.findOne({
            where: {
                Nome_Produto: req.body.Nome_Produto
            }
        });

        if(produto){
            return res.status(200).json(produto);
        }else{
            return res.status(404).json({ message: "Item não existe"});
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Ocorreu um erro ao procurar o produto." });
    }
}