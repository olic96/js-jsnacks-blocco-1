// chiedo 10 volte all'utente di inserire un numero,
let total = 0

for( let i = 1; i < 10; i++) {
   const number = Number(prompt("Type a number"));
   total += number;
}

console.log(total);

// stampa la somma di tutti i numeri inseriti.
