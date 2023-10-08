const Produto = require("../../database/modelProduto");

exports.registerProduct = async (req, res) => {
    try {

        const Validacao = (req.body);

        if(Validacao.Estoque_Produto < 0){
            return res.json({ message: "O estoque só pode ser positivo"});
        }if(Validacao.Preco_Produto < 0){
            return res.json({ message: "O preco só pode ser positivo"});
        }
        
        await Produto.create(req.body);
        console.log(req.body);
        return res.status(200).json({ message: "Produto criado com sucesso!" });
        
    } catch (error) {
        console.error(error);

        if(error.code === "ER_DUP_ENTRY"){
            return res.status(400).json({ message: "Não pode registrar um produto com o mesmo nome" });
        }
        return res.status(500).json({ message: "Ocorreu um erro ao criar o produto." });
    }
}
