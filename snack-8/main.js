// creo un array di numeri interi
const listNumbers = [1, 2, 3, 4, 5];
// prendo dalla mia lista tutti i numeri, se sono in posizione dispari, li sommo

let total = 0;
for(let i = 0; i < listNumbers.length; i++){
    if (i % 2 === 1) {
       total += listNumbers[i]; 
    }
}
console.log(total);
