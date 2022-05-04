// creo un lista vuota
const nominativi = [];
// creo una lista di nomi 
const nomi = ["Pino", "Gino", "Lino"];
// creo una lista di cognomi
const cognomi = ["Salame", "Prosciutto", "Mortadella"];
// creo dei nominativi con i nomi e i cognomi delle due liste
for (let i= 0; i < nominativi; i++) {
    const nominativo = nomi[i] + cognomi[i];
    nominativi.push (nominativo);
}
console.log(nominativi);