// creo un array vuoto
const numeriDispari = [];
// chiedo x6 volte all'utente di inserire un numero
for(let i = 1; i <= 6; i++) {
    const number = Number(prompt("Type a number"));
    // se è dispari va nell'array
    if(number % 2 === 1) {
        numeriDispari.push (number);
    }
}

console.log(numeriDispari);



