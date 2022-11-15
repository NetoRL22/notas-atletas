let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function GetMediaValida(notas){
  let menorNota = notas[0];
  notas.forEach(function(nota){
    if (nota < menorNota){
      menorNota = nota;
    }
  })
  
  let maiorNota = notas[0];
   notas.forEach(function(nota){
    if (nota > maiorNota){
      maiorNota = nota;
    }
  })
  
 let media = notas.reduce(function(total,atual){
   return total+atual; 
  },0)-menorNota-maiorNota;
  
  media = media / (notas.length - 2);
  return media;
 
}

function GetDadosDosAtletas(atletas){
  data = atletas.map(function (atleta){
    return `
    Atleta: ${atleta.nome}
    Notas Obtidas: ${atleta.notas}
    Média Válida: ${GetMediaValida(atleta.notas)}
    `
  });
 
  return data;
}

let dadosDosAtletas = GetDadosDosAtletas(atletas).join("");
console.log(dadosDosAtletas);
