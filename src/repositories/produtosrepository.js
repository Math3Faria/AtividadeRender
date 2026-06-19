import { connection } from "../config/Database.js";

const produtoModel = {

    cadastrar: async (p) => {
        const sql = 'insert into produtos (id_categoria, nome_produto, valor_produto, vinculo_imagem, data_cad) values (?, ?, ?, ?, NOW());';

        const values = [p.idCategoria, p.nomeProduto, p.valorProduto, p.vinculoImagem];
        const [rows] = await connection.execute(sql, values);
        return rows;
    },

    listarTodos: async () => {
     
        const sql = `Select p.*, c.descricaoCategoria from produtos p inner join categoria c on p.id_categoria = c.idCategoria;`;
        const [rows] = await connection.execute(sql);
        return rows;
    },

    listarId: async (id) => {
        const sql = `select p.*, c.descricaoCategoria from produtos p inner join categoria c ON p.id_categoria = c.idCategoria where p.id_produto = ?;`;
        const [rows] = await connection.execute(sql, [id]);
        return rows[0];
    },

    atualizar: async (id, p) => {
        const sql = 'update produtos set id_categoria=?, nome_produto=?, valor_produto=?, vinculo_imagem=? where id_produto=?;';
        const values = [p.idCategoria, p.nomeProduto, p.valorProduto, p.vinculoImagem, id];
        const [rows] = await connection.execute(sql, values);
        return rows;
    },

    excluir: async (id) => {
        const sql = 'delete from produtos where id_produto = ?;';
        const [rows] = await connection.execute(sql, [id]);
        return rows;
    }
};

export default produtoModel;
