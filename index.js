var a = "salve mondo";
let b;
var c = 'd', d = 6.5, e = 5;
console.log(e);
console.log(a);
console.log(typeof e);
console.log(typeof a);
a = 87.5;
console.log(a);
console.log(typeof a);
console.log(typeof a == "string");
console.log(5 == "5");
console.log(5 === "5");
console.log(4 + 5);
console.log(4 + "5");
somma();
var val1 = prompt("Inserisci il primo valore");
var val2 = prompt("Inserisci il secondo valore");
somma2(val1, val2);
somma3(5);
function somma(){
    let a = prompt("Inserisci il primo valore");
    let b = prompt("Inserisci il secondo valore");
    console.log(parseInt(a) + parseInt(b));
}
function somma2(a, b){
    if(isNaN(a) || isNaN(b))
        alert("Attenzione la Somma può essere fatta solo tra due numeri");
    return parseInt(a) + parseInt(b);
}
function somma3(a = 4, b = 6){
    return a + b;
}