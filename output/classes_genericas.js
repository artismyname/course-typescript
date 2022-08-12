"use strict";
class CadastroBasico {
    criar(dados) {
        console.log("Criando novo registro");
        return dados;
    }
    selecionar(id) {
        console.log(`Dados do registro de ID ${id}`);
        return {};
    }
    editar(id, dadosAtualizacao) {
        console.log(`Editando o dados do ID ${id}`);
        return dadosAtualizacao;
    }
    excluir(id) {
        console.log(`Excluindo o registro de ID ${id}`);
        return true;
    }
}
class UsuarioModelo extends CadastroBasico {
}
const novoUsuario = new UsuarioModelo();
console.log(novoUsuario.criar({
    id: 1,
    nome: "Glaucio Daniel",
    email: "glaucio_daniel@hcode.com.br",
    senha: "gl@ucio",
    created_at: new Date("2015-06-01"),
    updated_at: new Date("2020-01-20")
}));
class CategoriaModelo extends CadastroBasico {
}
const novaCategoria = new CategoriaModelo();
console.log(novaCategoria.criar({
    id: 1,
    nome: "Glaucio Daniel",
    created_at: new Date("2015-06-01"),
    updated_at: new Date("2020-01-20")
}));
//# sourceMappingURL=classes_genericas.js.map