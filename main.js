/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

/*
PALINDROMA
Un parametro che é la parola inserita in input
casto a stringa perché sono un cane
creo un'array che é input rovesciato
creo una stringa che é input rovesciato
poi faccio un controllo tra stringa rovesciata e input
*/


console.log(isPalindrome(prompt("Inserisci la stringa da controllare.")));

function isPalindrome(input) {
    input = String(input);
    let reversedArr = [];
    for (let i = 0; i < input.length; i++) {
        reversedArr.unshift(input[i]);
    }
    let reversedStr = reversedArr.join("");
    return reversedStr === input;
}
