// Retornar os nomes das pessoas 

const pessoas = [
    {name: "Fabiana Araújo", age: 23},
    {name: "Gabriel Gomes", age: 25},
    {name: "Fernando Henrique", age: 17},
    {name: "Ana Luiza", age: 2},
    {name: "Geralda do Nascimento", age: 93},
    {name: "Miguel Souza", age: 70},
    {name: "Antonio Miguel", age: 69},
  ]

  function retornaPrimeiroNome() {
    let primeiroNome = new Array();
    for (let i = 0; i < pessoas.length; i++) {
      primeiroNome.push(pessoas[i].name.split(" ")[0]);
    }
    return primeiroNome;
  }
  console.log(retornaPrimeiroNome());