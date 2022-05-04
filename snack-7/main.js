// creo una lista vuota
const listaNomi = [];
// lista nomi
const nomi = ["Gino", "Pino", "Lino"];
// lista cognomi
const cognomi = ["Rossi", "Verdi", "Bianchi"]

// console.log(listaNomi.length);

for (let i = 0; i < 3; i++) {
   const randomPositionNomi =  Math.floor(Math.random() * 3);
   const randomPositionCognomi =  Math.floor(Math.random() * 3);
   console.log(nomi[randomPositionNomi], cognomi [randomPositionCognomi]);
}