// Array de objetos
let produtos = [
    { nome: "Camiseta", preco: 50, estoque: 10 },
    { nome: "Calça", preco: 120, estoque: 5 },
    { nome: "Tênis", preco: 200, estoque: 8 },
    { nome: "Boné", preco: 30, estoque: 15 },
    { nome: "Jaqueta", preco: 250, estoque: 3 },
    { nome: "Meia", preco: 10, estoque: 50 },
    { nome: "Short", preco: 60, estoque: 12 },
    { nome: "Blusa", preco: 80, estoque: 7 },
    { nome: "Relógio", preco: 300, estoque: 4 },
    { nome: "Óculos", preco: 150, estoque: 6 }
];

// Percorrer e mostrar
for (let i = 0; i < produtos.length; i++) {
    console.log("Nome:", produtos[i].nome);
    console.log("Preço:", produtos[i].preco);
    console.log("Estoque:", produtos[i].estoque);
    console.log("------------------");
}