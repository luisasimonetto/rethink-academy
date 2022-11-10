// função que retorna os dados de uma pessoa pelo nome passado via parâmetros.

const pessoas = [
    {name: "Fabiana Araújo", age: 23},
    {name: "Gabriel Gomes", age: 25},
    {name: "Fernando Henrique", age: 17},
    {name: "Ana Luiza", age: 2},
    {name: "Geralda do Nascimento", age: 93},
    {name: "Miguel Souza", age: 70},
    {name: "Antonio Miguel", age: 69},
  ]

  function retornaPessoa(nome) {
    for (let i = 0; i < pessoas.length; i++) {
      if(pessoas[i].name == nome){
        return pessoas[i];
      }   
    }
  }
  console.log(retornaPessoa("Gabriel Gomes"));
