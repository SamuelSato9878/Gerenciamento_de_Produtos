const Produto = require("../../database/modelProduto");

exports.deleteProduct = async(req, res) => {
    try {

        const {id, Nome_Produto} = (req.body);

        const de1etedProduct = await Produto.destroy({
            where:{
                id: req.body.id,
                Nome_Produto: req.body.Nome_Produto
            },
        });

        console.log(id)

        if (de1etedProduct) {
            return res.status(200).json({ message: "Produto excluído com sucesso!" });
        } else {
            return res.status(404).json({ message: "Produto não encontrado" });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Ocorreu um erro ao criar o produto." });
    }
}