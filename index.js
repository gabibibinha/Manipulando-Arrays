// Crie um array chamado notas que armazene as notas de cinco alunos.
let notas = [6.0, 7.5, 8.0, 9.0, 5.5];
// Exiba no console a primeira e a última nota do array.
console.log (notas[0]);
console.log (notas[notas.length]);
//Adicione uma nova nota ao final do array usando push().
console.log (notas.push(6.5));
//Remova a primeira nota do array usando shift().
console.log (notas.shift);
//Exiba o array resultante no console. 
console.log (notas);
//Itere sobre o array notas e exiba cada nota no console.
notas.forEach (function (notas))
    console.log (notas);
//Utilize um loop for ou o método reduce para calcular a média das notas.
const media = notas.reduce ((valor, notas) => {
    return valor + notas;
}, 0) / notas.length;
console.log (notas);
//Use o método filter para criar um novo array com as notas maiores que 7.
console.log (notas.filter (nota => nota > 7));
// Ordene o array notas em ordem crescente utilizando o método sort.
console.log (notas.sort ());
console.log (notas);
//Verifique se a nota 6.5 está presente no array utilizando includes.
console.log (notas.includes (6.5));
// Utilize o método indexOf para encontrar o índice da nota 8.0.
console.log (notas.indexOf (8.0));
// Crie um novo array em que cada nota seja elevada ao quadrado utilizando o método map.
console.log (notas.map(nota => nota * nota));

