// Idade para dirigir 

const pessoas = [
    {name: "Fabiana Araújo", age: 23},
    {name: "Gabriel Gomes", age: 25},
    {name: "Fernando Henrique", age: 17},
    {name: "Ana Luiza", age: 2},
    {name: "Geralda do Nascimento", age: 93},
    {name: "Miguel Souza", age: 70},
    {name: "Antonio Miguel", age: 69},
  ]
  
  function maioresDeIdade() {
    let pessoaMaiorIdade = new Array();
    for (let i = 0; i < pessoas.length; i++) {
      if(pessoas[i].age >= 18){
        pessoasMaiorIdade.push(pessoas[i]);
      }   
    }
    return pessoaMaiorIdade;
  }
  
  console.log(maiorDeIdade());
