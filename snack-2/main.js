const wordOne = prompt ("Inserisci la prima parola");
const wordTwo = prompt ("Inserisci la seconda parola");

if(wordOne.length < wordTwo.length) {
    console.log(wordOne, wordTwo);
    
} else {
    console.log(wordTwo, wordOne);
}
