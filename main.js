/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

/*
PALINDROMA
1) Un parametro che é la parola inserita in input
2) casto a stringa perché sono un cane
3) creo un'array che é input rovesciato
4) creo una stringa che é input rovesciato
5) poi faccio un controllo tra stringa rovesciata e input
*/


//console.log(isPalindrome(prompt("Inserisci la stringa da controllare.")));

function isPalindrome(input) {
    input = String(input);
    let reversedArr = [];
    for (let i = 0; i < input.length; i++) {
        reversedArr.unshift(input[i]);
    }
    let reversedStr = reversedArr.join("");
    return reversedStr === input;
}



/* 
PARI E DISPARI
1) due parametri: 
- parDis castato a stringa tolowercase() e validato con typeOf(parDis)
- numero da 1 a 5, validato con Number.isInteger(numero)
2) 
*/