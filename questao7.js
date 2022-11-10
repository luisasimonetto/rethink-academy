// Função que retorna a média das Idades

const pessoas = [
    {name: "Fabiana Araújo", age: 23},
    {name: "Gabriel Gomes", age: 25},
    {name: "Fernando Henrique", age: 17},
    {name: "Ana Luiza", age: 2},
    {name: "Geralda do Nascimento", age: 93},
    {name: "Miguel Souza", age: 70},
    {name: "Antonio Miguel", age: 69},
  ]

  function mediaIdades() {
    let somaIdade = 0;
    for (let i = 0; i < pessoas.length; i++) {
      somaIdade += pessoas[i].age;
    }
    let media = somaIdade/pessoas.length;
    return media;
  }
  
  console.log(mediaIdades());
