const Produto = require("../../database/modelProduto");

exports.updateProduct = async (req, res) => {
    try{
       // const {id} = req.params.id;
        const {id, novoNome, novaDescricao, novoPreco, novoEstoque} = req.body;

        const [numRowsUpdated, updatedProduct] = await Produto.update(
          {
             Nome_Produto: novoNome,
             Descricao_Produto: novaDescricao,
             Preco_Produto: novoPreco,
             Estoque_Produto: novoEstoque
          },
          {
            where:{

                id: req.body.id,
                         
            }
          }
        );

        console.log(id);

        if (numRowsUpdated > 0) {
            return res.status(200).json({ message: "Produto atualizado com sucesso!", updatedProduct });
        } else {
            return res.status(404).json({ message: "Produto não encontrado" });
        }

        } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Ocorreu um erro ao procurar o produto." });
    }
}
