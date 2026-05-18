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

alert(isPalindrome(prompt("Inserisci la stringa da controllare.")));

function isPalindrome(input) {
    input = String(input);
    let reversedArr = [];
    for (let i = 0; i < input.length; i++) {
        reversedArr.unshift(input[i]);
    }
    let reversedStr = reversedArr.join("");
    if (reversedStr === input) {
        return "É palindroma!";
    } else {
        return "Non é palindroma!";
    }
}

/* 
PARI E DISPARI
1) due parametri: 
- parDis castato a stringa tolowercase() e validato con typeOf(parDis)
- numero da 1 a 5, validato con Number.isInteger(numero)
2) 
*/

let pariDisp = prompt("Scrivi p (pari) o d (dispari):");

while (pariDisp !== "p" && pariDisp !== "d") {
    pariDisp = prompt("Inserisci 'p' o 'd' !");
}

console.log("pariDisp: ", pariDisp);

let numPlayer = Number(prompt("Inserisci un numero tra 1 e 5:"));

while (numPlayer < 1 || numPlayer > 5 || isNaN(numPlayer) || !Number.isInteger(numPlayer)) {
    numPlayer = Number(prompt("Inserisci un numero tra 1 e 5!"));
}

console.log("numPlayer: ", numPlayer);

const numComputer = genNum();
console.log("numComputer: ", numComputer);

const sum = numPlayer + numComputer;
console.log("sum: ", sum);

const proprieta = parita(sum);
console.log("proprieta: ", proprieta);

if (proprieta === pariDisp) {
    alert("Hai vinto tu!");
} else {
    alert("Ha vinto il computer!");
}

function genNum() {
    let num = 1 + Math.floor(Math.random() * 5);
    return num;
}

function parita(num) {
    let proprieta = "d";
    if (num % 2 === 0) {
        proprieta = "p";
    }
    return proprieta;
}
