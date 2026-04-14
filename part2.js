
let produto = {
    nome: "Camiseta",
    cor: "Preta",
    estoque: 50
};

// A
console.log("Nome:", produto.nome);

// B
console.log("Preço:", produto["preco"]);

// C
produto.estoque = 80;

// D
for (let chave in produto) {
    console.log(chave + ": " + produto[chave]);

}