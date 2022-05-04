// chiedo all'utente di inserire un numero
const userNumber = Number(prompt = ("Inserisci un numero"));

// SE è pari stampo il numero
// ALTRIMENTI stampo il successivo 
if(userNumber % 2 === 0) {
    console.log(userNumber);
} else(userNumber % 2 === 1) {
    let nextNumber = (userNumber + 1);
    console.log(nextNumber);
}